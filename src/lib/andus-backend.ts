import { createClient } from "@supabase/supabase-js";
import { createHmac } from "node:crypto";
import type { NextRequest } from "next/server";

export const KINDS = ["contact","loan","cac","investment"] as const;
export const STATUSES = ["new","in_review","awaiting_customer","approved","rejected","completed"] as const;
export type ApplicationKind = (typeof KINDS)[number];
export type ApplicationStatus = (typeof STATUSES)[number];
export const isKind = (x:unknown):x is ApplicationKind => typeof x==="string" && (KINDS as readonly string[]).includes(x);
export const isStatus = (x:unknown):x is ApplicationStatus => typeof x==="string" && (STATUSES as readonly string[]).includes(x);

const url = () => process.env.ANDUS_SUPABASE_URL || process.env.NEXT_PUBLIC_ANDUS_SUPABASE_URL || "";
export function isBackendReady() {
  return Boolean(url() && process.env.ANDUS_SUPABASE_SERVICE_ROLE_KEY && (process.env.ANDUS_RATE_LIMIT_SECRET || "").length>=32);
}
export function getDb() {
  const key=process.env.ANDUS_SUPABASE_SERVICE_ROLE_KEY;
  if(!key||!url()) return null;
  return createClient(url(),key,{auth:{autoRefreshToken:false,persistSession:false,detectSessionInUrl:false}});
}
export function getRateKey(req:NextRequest) {
  const secret=process.env.ANDUS_RATE_LIMIT_SECRET;
  if(!secret||secret.length<32) return null;
  // On Vercel, prefer the provider-controlled header; the WAF remains an additional layer.
  const ip=(req.headers.get("x-vercel-forwarded-for") || req.headers.get("x-real-ip") || req.headers.get("x-forwarded-for") || "unknown").split(",")[0].trim();
  return createHmac("sha256",secret).update(ip).digest("hex");
}
export function allowOrigin(req:NextRequest) {
  if(req.headers.get("sec-fetch-site")==="cross-site") return false;
  const origin=req.headers.get("origin");
  if(!origin) return true;
  try {
    const parsed=new URL(origin);
    const host=req.headers.get("host")?.toLowerCase();
    return Boolean(
      (parsed.host.toLowerCase()===host && (parsed.protocol==="https:" || parsed.hostname==="localhost" || parsed.hostname==="127.0.0.1")) ||
      parsed.origin===req.nextUrl.origin ||
      (process.env.NEXT_PUBLIC_SITE_URL && parsed.origin===new URL(process.env.NEXT_PUBLIC_SITE_URL).origin)
    );
  } catch { return false; }
}
export function fail(error:string,status:number) {
  return Response.json({success:false,error},{status,headers:{"Cache-Control":"no-store"}});
}
export function safeText(x:unknown,max:number) {
  if(typeof x!=="string") return "";
  const s=x.trim();
  return s.length<=max?s:"";
}
export function escapeHtml(x:string) {
  return x.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]||c));
}
function decodeVerifiedAal(token:string,userId:string) {
  try {
    const parts=token.split(".");
    if(parts.length!==3) return false;
    const body=JSON.parse(Buffer.from(parts[1],"base64url").toString("utf8")) as {aal?:string;sub?:string};
    // The token was verified by Supabase Auth before reading its claims.
    return body.sub===userId && body.aal==="aal2";
  } catch {return false;}
}
export async function requireStaff(req:NextRequest) {
  const db=getDb();
  if(!db) return {ok:false as const,status:503,error:"Admin service not configured"};
  const header=req.headers.get("authorization") || "";
  if(!header.startsWith("Bearer ") || header.length>6000) return {ok:false as const,status:401,error:"Sign in required"};
  const token=header.slice(7).trim();
  const {data:verified,error}=await db.auth.getUser(token);
  if(error||!verified.user) return {ok:false as const,status:401,error:"Invalid or expired session"};
  if(!decodeVerifiedAal(token,verified.user.id)) return {ok:false as const,status:403,error:"Two-factor authentication required"};
  const {data:staff,error:dbError}=await db.from("andus_staff_roles").select("role").eq("user_id",verified.user.id).maybeSingle();
  if(dbError || !staff || !["admin","reviewer"].includes(staff.role)) return {ok:false as const,status:403,error:"This account is not authorized"};
  return {ok:true as const,db,userId:verified.user.id,role:staff.role as "admin"|"reviewer",email:verified.user.email||""};
}
