import type {NextRequest} from "next/server";
import {allowOrigin,escapeHtml,fail,getDb,getRateKey,isBackendReady,isKind,safeText} from "@/lib/andus-backend";

type Input = Record<string,unknown>;
const allowedDetailKeys=["kind","proposedName","proposedName2","amount","tenor","purpose","organisation","preferredContact"] as const;
export async function submitPublicApplication(req:NextRequest,forcedKind?:string) {
  if(req.headers.get("content-type")?.split(";")[0]!=="application/json") return fail("Use the online form",415);
  if(!allowOrigin(req)) return fail("Request origin not permitted",403);
  if(Number(req.headers.get("content-length")||0)>18000) return fail("Submission too large",413);
  if(!isBackendReady()) return fail("Applications are temporarily unavailable. Please call or WhatsApp ANDUS.",503);
  let input:Input;
  try {
    const raw=await req.text();
    if(raw.length>18000) return fail("Submission too large",413);
    input=JSON.parse(raw) as Input;
    if(!input||Array.isArray(input)||typeof input!=="object") return fail("Invalid form",400);
  } catch{return fail("Invalid form",400);}
  const kind=forcedKind || input.kind;
  if(!isKind(kind)) return fail("Choose the correct enquiry category",400);
  if(input.website) return fail("Request rejected",403);
  const firstName=safeText(input.firstName,80),lastName=safeText(input.lastName,80);
  const fullName=(firstName+" "+lastName).trim();
  const email=safeText(input.email,180).toLowerCase();
  const phone=safeText(input.phone,35);
  const service=safeText(input.service,130) || kind.toUpperCase()+" enquiry";
  const message=safeText(input.message,3000);
  if(fullName.length<2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || phone.replace(/\D/g,"").length<10 || message.length<5) return fail("Enter your name, valid email, phone and message",422);
  if(/\b(?:BVN|NIN|PIN|PASSWORD|ACCOUNT\s*NUMBER)\b/i.test(message)) return fail("Remove identity numbers, passwords and banking details from this enquiry",422);
  const details:Record<string,string>={};
  for(const k of allowedDetailKeys){
    const value=safeText(input[k],150);
    if(value) details[k]=value;
  }
  const db=getDb(),rateKey=getRateKey(req);
  if(!db||!rateKey) return fail("Applications are temporarily unavailable",503);
  const {data,error}=await db.rpc("andus_accept_application",{
    p_kind:kind,p_full_name:fullName,p_email:email,p_phone:phone,
    p_service:service,p_message:message,p_details:details,p_rate_key:rateKey
  }).single();
  if(error || !data) {
    if(error?.message.includes("RATE_LIMITED")) return fail("Too many submissions. Please try again later.",429);
    // Do not log customer PII or raw database errors.
    console.warn("ANDUS application persistence failed",error?.code||"unknown");
    return fail("Could not save your enquiry. Please contact ANDUS directly.",503);
  }
  const record=data as {id:string;reference:string};
  // Notification is secondary. The database register is the source of truth.
  const apiKey=process.env.RESEND_API_KEY,from=process.env.ANDUS_SENDER_EMAIL,to=process.env.CONTACT_EMAIL;
  if(apiKey && from && to) {
    try {
      const emailBody="<h2>New ANDUS "+escapeHtml(kind)+" enquiry</h2>"+
        "<p>Reference: "+escapeHtml(record.reference)+"</p>"+
        "<p>Name: "+escapeHtml(fullName)+"</p>"+
        "<p>Email: "+escapeHtml(email)+"</p>"+
        "<p>Phone: "+escapeHtml(phone)+"</p>"+
        "<p>Service: "+escapeHtml(service)+"</p>"+
        "<p>Message: "+escapeHtml(message).replace(/\n/g,"<br>")+"</p>";
      const delivery=await fetch("https://api.resend.com/emails",{method:"POST",
        headers:{"Authorization":"Bearer "+apiKey,"Content-Type":"application/json"},
        body:JSON.stringify({from,to:[to],reply_to:email,subject:"ANDUS enquiry "+record.reference,html:emailBody}),
        signal:AbortSignal.timeout(8000),cache:"no-store"});
      if(!delivery.ok) console.warn("ANDUS email notification not delivered",delivery.status);
    } catch {console.warn("ANDUS email notification not available");}
  }
  return Response.json({success:true,reference:record.reference,message:"Your enquiry has been securely recorded."},
    {status:201,headers:{"Cache-Control":"no-store"}});
}
