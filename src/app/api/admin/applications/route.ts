import type {NextRequest} from "next/server";
import {fail,isKind,isStatus,requireStaff} from "@/lib/andus-backend";
export const dynamic="force-dynamic";
export const runtime="nodejs";
export async function GET(req:NextRequest) {
  const auth=await requireStaff(req);
  if(!auth.ok) return fail(auth.error,auth.status);
  const kind=req.nextUrl.searchParams.get("kind");
  const status=req.nextUrl.searchParams.get("status");
  const pageInput=Number(req.nextUrl.searchParams.get("page")||"0");
  const page=Number.isInteger(pageInput)&&pageInput>=0&&pageInput<=200?pageInput:0;
  if(kind&&!isKind(kind))return fail("Invalid kind filter",400);
  if(status&&!isStatus(status))return fail("Invalid status filter",400);
  let q=auth.db.from("andus_applications").select("id,reference,kind,full_name,email,phone,service,message,details,status,created_at,updated_at",{count:"exact"}).order("created_at",{ascending:false}).range(page*25,page*25+24);
  if(kind) q=q.eq("kind",kind);
  if(status) q=q.eq("status",status);
  const {data,count,error}=await q;
  if(error){console.warn("ANDUS admin listing failed",error.code);return fail("Unable to load applications",503);}
  return Response.json({items:data||[],page,count:count||0,pageSize:25},{headers:{"Cache-Control":"private, no-store"}});
}
