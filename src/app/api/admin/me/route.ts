import type {NextRequest} from "next/server";
import {fail,requireStaff} from "@/lib/andus-backend";
export const dynamic="force-dynamic";
export const runtime="nodejs";
export async function GET(req:NextRequest) {
  const auth=await requireStaff(req);
  if(!auth.ok) return fail(auth.error,auth.status);
  return Response.json({authenticated:true,role:auth.role,email:auth.email},{headers:{"Cache-Control":"no-store"}});
}
