import type {NextRequest} from "next/server";
import {allowOrigin,fail,isStatus,requireStaff,safeText} from "@/lib/andus-backend";
export const dynamic="force-dynamic";
export const runtime="nodejs";
type Params={params:Promise<{id:string}>};
const isUuid=(v:string)=>/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(v);
export async function GET(req:NextRequest,{params}:Params) {
  const auth=await requireStaff(req);
  if(!auth.ok)return fail(auth.error,auth.status);
  const {id}=await params;
  if(!isUuid(id))return fail("Invalid application",400);
  const [{data:application,error},{data:events,error:eventError}]=await Promise.all([
    auth.db.from("andus_applications").select("*").eq("id",id).maybeSingle(),
    auth.db.from("andus_status_events").select("id,from_status,to_status,note,created_at").eq("application_id",id).order("created_at",{ascending:false}).limit(100)
  ]);
  if(error||eventError)return fail("Unable to read this application",503);
  if(!application)return fail("Application not found",404);
  return Response.json({application,events:events||[]},{headers:{"Cache-Control":"private, no-store"}});
}
export async function PATCH(req:NextRequest,{params}:Params) {
  if(!allowOrigin(req))return fail("Request origin not permitted",403);
  const auth=await requireStaff(req);
  if(!auth.ok)return fail(auth.error,auth.status);
  const {id}=await params;
  if(!isUuid(id))return fail("Invalid application",400);
  if(req.headers.get("content-type")?.split(";")[0]!=="application/json")return fail("Invalid request",415);
  if(Number(req.headers.get("content-length")||0)>3500)return fail("Request too large",413);
  let payload:Record<string,unknown>;
  try{
    const raw=await req.text();
    if(raw.length>3500)return fail("Request too large",413);
    payload=JSON.parse(raw);
    if(!payload||typeof payload!=="object"||Array.isArray(payload))return fail("Invalid request",400);
  }catch{return fail("Invalid request",400);}
  if(!isStatus(payload.status))return fail("Choose a valid status",422);
  if(auth.role!=="admin"&&!["in_review","awaiting_customer"].includes(payload.status))return fail("Only an administrator can make that status change",403);
  const note=payload.note===undefined?"":safeText(payload.note,1000);
  if(payload.note!==undefined && typeof payload.note==="string" && payload.note.length>1000)return fail("Note is too long",422);
  const {error}=await auth.db.rpc("andus_update_status",{
    p_application:id,p_actor:auth.userId,p_status:payload.status,p_note:note
  });
  if(error){
    if(error.message.includes("NOT_FOUND"))return fail("Application not found",404);
    if(error.message.includes("NOT_AUTHORIZED"))return fail("Not authorised",403);
    console.warn("ANDUS status change failed",error.code);
    return fail("Could not update application",503);
  }
  return Response.json({success:true,status:payload.status},{headers:{"Cache-Control":"private, no-store"}});
}
