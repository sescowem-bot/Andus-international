import {NextRequest,NextResponse} from "next/server";
export const dynamic="force-dynamic";
const fail=(error:string,status:number)=>NextResponse.json({success:false,error},{status,headers:{"Cache-Control":"no-store"}});
const escapeHTML=(s:string)=>s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]||c));
export async function POST(req:NextRequest){
 if(req.headers.get("content-type")?.split(";")[0]!=="application/json")return fail("Invalid content type",415);
 const size=Number(req.headers.get("content-length")||0);
 if(size>20000)return fail("Request too large",413);
 if(req.headers.get("sec-fetch-site")==="cross-site")return fail("Invalid origin",403);
 const origin=req.headers.get("origin");
 if(origin){
  let allowed=false;
  try {
   const parsed=new URL(origin);
   const host=req.headers.get("host")?.toLowerCase();
   const envSite=process.env.NEXT_PUBLIC_SITE_URL;
   allowed=(parsed.host.toLowerCase()===host && (parsed.protocol==="https:" || parsed.hostname==="localhost" || parsed.hostname==="127.0.0.1")) ||
    parsed.origin===new URL(req.url).origin ||
    (!!envSite && parsed.origin===new URL(envSite).origin);
  } catch {}
  if(!allowed)return fail("Invalid origin",403);
 }
 let data:Record<string,unknown>;try{data=await req.json()}catch{return fail("Invalid data",400)}
 if(!data||typeof data!=="object")return fail("Invalid form",400);
 const get=(k:string,n:number)=>typeof data[k]==="string"?(data[k] as string).trim().slice(0,n):"";
 const first=get("firstName",80),last=get("lastName",80),email=get("email",180),phone=get("phone",40),service=get("service",90),message=get("message",3000);
 if(!first||!message||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return fail("Name, valid email and message are required",400);
 if(get("website",50))return fail("Request rejected",403);
 const key=process.env.RESEND_API_KEY,to=process.env.CONTACT_EMAIL,from=process.env.ANDUS_SENDER_EMAIL;
 if(!key||!to||!from)return fail("Enquiry form is temporarily unavailable; please email or call ANDUS.",503);
 const safe=(x:string)=>escapeHTML(x).replace(/\n/g,"<br/>");
 const html="<h2>ANDUS enquiry</h2><p>Name: "+safe(first+" "+last)+"</p><p>Email: "+safe(email)+"</p><p>Phone: "+safe(phone)+"</p><p>Service: "+safe(service)+"</p><p>Message: "+safe(message)+"</p>";
 try{const r=await fetch("https://api.resend.com/emails",{method:"POST",headers:{"Authorization":"Bearer "+key,"Content-Type":"application/json"},body:JSON.stringify({from,to:[to],reply_to:email,subject:"ANDUS website enquiry",html}),cache:"no-store",signal:AbortSignal.timeout(9000)});const result=await r.json().catch(()=>({}));if(!r.ok||!result.id)return fail("Message could not be delivered. Please contact ANDUS directly.",502);return NextResponse.json({success:true},{headers:{"Cache-Control":"no-store"}})}catch{return fail("Contact service is unavailable",503)}
}
