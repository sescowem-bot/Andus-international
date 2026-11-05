"use client";
import {useEffect,useMemo,useState} from "react";
import type {FormEvent} from "react";
import {ArrowUpRight,CheckCircle2,AlertCircle,Send,ShieldCheck} from "lucide-react";
import {SITE,SERVICES} from "@/lib/data";
type Variant="contact"|"loan"|"cac"|"investment";
type Data={firstName:string;lastName:string;email:string;phone:string;service:string;message:string;kind:string;proposedName:string;proposedName2:string;amount:string;tenor:string};
const options={
 contact:["General enquiry",...SERVICES.map(s=>s.title),"Investment & Cooperative"],
 loan:["Personal / Consumer Loan","SME / Business Loan","Asset Finance","LPO / Contract Finance","Other financing enquiry"],
 cac:["Business Name","Private Limited (Ltd)","Public Limited (PLC)","Incorporated Trustees","Post-Incorporation","TIN & Tax Compliance"],
 investment:["Fixed Deposit / Investment","Corporate Investment Enquiry","Investment Consultation"]
};
const labels={contact:"Send an enquiry",loan:"Loan enquiry",cac:"Business registration enquiry",investment:"Investment enquiry"};
export default function EnquiryForm({variant="contact"}:{variant?:Variant}){
const [data,setData]=useState<Data>({firstName:"",lastName:"",email:"",phone:"",service:"",message:"",kind:"",proposedName:"",proposedName2:"",amount:"",tenor:""});
const [status,setStatus]=useState<"idle"|"sending"|"sent"|"error">("idle"),[error,setError]=useState(""),[reference,setReference]=useState(""),[acknowledged,setAcknowledged]=useState(false);
const [availability,setAvailability]=useState<"checking"|"available"|"unavailable">("checking");
useEffect(()=>{const controller=new AbortController();let active=true;fetch("/api/applications/status",{cache:"no-store",signal:controller.signal}).then(r=>r.ok?r.json():Promise.reject(new Error("Service offline"))).then(data=>{if(active)setAvailability(data?.available===true?"available":"unavailable");}).catch(()=>{if(active)setAvailability("unavailable");});return()=>{active=false;controller.abort();};},[]);
const put=(k:keyof Data,v:string)=>setData(d=>({...d,[k]:v}));
useEffect(()=>{if(variant==="contact"){const category=new URLSearchParams(window.location.search).get("service");if(category)setData(d=>({...d,service:category}));}},[variant]);
const waText=useMemo(()=>{const l=["Hello ANDUS International, I would like to make a "+labels[variant].toLowerCase()+".",data.firstName&&"Name: "+data.firstName+" "+data.lastName,data.phone&&"Phone: "+data.phone,data.kind&&"Service type: "+data.kind,data.proposedName&&"Proposed business name: "+data.proposedName];return l.filter(Boolean).join("\n");},[variant,data.firstName,data.lastName,data.phone,data.kind,data.proposedName]);
const waLink="https://wa.me/"+SITE.whatsapp+"?text="+encodeURIComponent(waText);
function submit(e:FormEvent){e.preventDefault();void run();}
async function run(){
setError("");
if(!data.firstName.trim()||!data.lastName.trim()||!data.phone.trim()||!data.email.trim()||!data.message.trim()){setError("Complete the required fields before sending.");return;}
if(!acknowledged){setError("Please read and acknowledge the privacy notice.");return;}
if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)){setError("Please enter a valid email address.");return;}
if(data.phone.replace(/\D/g,"").length<10){setError("Please enter a valid phone number.");return;}
if(variant!=="contact"&&!data.kind){setError("Choose an enquiry type.");return;}
const service=variant==="contact"?(data.service||"General enquiry"):(variant==="loan"?"Financial Services / "+data.kind:variant==="cac"?"CAC Registration / "+data.kind:"Investment / "+data.kind);
setStatus("sending");
try{
 const res=await fetch("/api/applications",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
   kind:variant,firstName:data.firstName,lastName:data.lastName,email:data.email,phone:data.phone,service,message:data.message,privacyAcknowledged:acknowledged,
   proposedName:variant==="cac"?data.proposedName:"",proposedName2:variant==="cac"?data.proposedName2:"",
   amount:variant==="loan"?data.amount:"",tenor:data.tenor
 })});
 const result=await res.json().catch(()=>({}));
 if(!res.ok||!result.success||!result.reference)throw new Error(result.error||"Your enquiry was not saved.");
 setReference(result.reference);setStatus("sent");
}
catch(e){setStatus("error");setError(e instanceof Error?e.message:"Unable to deliver online enquiry.");}
}
const field="w-full rounded-lg border border-[#CBDDCE] bg-white px-4 py-3 text-[14px] text-[#173D28] outline-none transition placeholder:text-[#93AA99] focus:border-[#338B2E] focus:ring-2 focus:ring-[#338B2E]/15";
const hint="mb-1.5 block text-[12px] font-bold text-[#355F44]";
if(availability==="checking")return <div role="status" aria-live="polite" className="rounded-[18px] border border-[#D8E8DC] bg-white p-7"><div className="animate-pulse space-y-4"><div className="h-5 w-52 rounded bg-[#DFECE2]"/><div className="h-3 w-full rounded bg-[#F1F7F2]"/><div className="h-3 w-2/3 rounded bg-[#F1F7F2]"/></div><p className="mt-5 text-sm text-[#557362]">Checking enquiry availability…</p></div>;
if(availability==="unavailable")return <div role="status" className="rounded-[18px] border border-[#D8E8DC] bg-[#F7FBF7] p-6 sm:p-8"><ShieldCheck size={31} className="text-[#005C38]"/><h3 className="mt-4 text-[23px] font-bold text-[#083F2C]">Speak with our team directly.</h3><p className="mt-3 max-w-lg text-sm leading-7 text-[#557362]">Online enquiry submissions are temporarily unavailable. You can contact ANDUS by phone or WhatsApp to discuss your request. Do not share BVN, NIN, bank details or identification documents through chat.</p><div className="mt-6 flex flex-wrap gap-3"><a href={"https://wa.me/"+SITE.whatsapp} rel="noopener noreferrer" target="_blank" className="inline-flex items-center gap-2 rounded-lg bg-[#005C38] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#338B2E]">Chat on WhatsApp <ArrowUpRight size={17}/></a><a href={"tel:"+SITE.phone[0]} className="inline-flex items-center rounded-lg border border-[#B8D3BE] px-5 py-3 text-sm font-bold text-[#005C38]">Call ANDUS</a></div></div>;
if(status==="sent")return <div role="status" className="rounded-2xl border border-[#B6DCC0] bg-[#EEF8F0] p-8 text-center"><CheckCircle2 size={38} className="mx-auto text-[#005C38]"/><h3 className="mt-4 text-2xl font-bold text-[#083F2C]">Your enquiry was sent.</h3><p className="mt-3 text-sm leading-7 text-[#557362]">ANDUS has recorded your enquiry. Keep this reference for follow-up. This is not a final application approval.</p><p className="mt-3 font-mono text-base font-bold text-[#005C38]">{reference}</p><button type="button" onClick={()=>{setReference("");setStatus("idle")}} className="mt-5 rounded-lg border border-[#A7CFB1] px-5 py-2.5 text-sm font-bold text-[#005C38]">Send another enquiry</button></div>;
return <form onSubmit={submit} noValidate className="rounded-[18px] border border-[#D8E8DC] bg-white p-5 shadow-[0_10px_35px_rgba(0,65,30,.045)] sm:p-7">
<div className="mb-6 flex items-center justify-between gap-4 border-b border-[#E5EEE6] pb-5"><div><p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#338B2E]">Direct to our team</p><h3 className="mt-2 text-[22px] font-bold text-[#083F2C]">{labels[variant]}</h3></div><Send size={24} className="text-[#338B2E]"/></div>
<div className="grid gap-4 sm:grid-cols-2">
<label><span className={hint}>First name *</span><input className={field} autoComplete="given-name" required maxLength={80} value={data.firstName} onChange={e=>put("firstName",e.target.value)} placeholder="First name"/></label>
<label><span className={hint}>Last name *</span><input className={field} autoComplete="family-name" required maxLength={80} value={data.lastName} onChange={e=>put("lastName",e.target.value)} placeholder="Last name"/></label>
<label><span className={hint}>Email *</span><input className={field} type="email" autoComplete="email" required maxLength={180} value={data.email} onChange={e=>put("email",e.target.value)} placeholder="name@example.com"/></label>
<label><span className={hint}>Phone *</span><input className={field} type="tel" autoComplete="tel" required maxLength={25} value={data.phone} onChange={e=>put("phone",e.target.value)} placeholder="080..."/></label>
<label className="sm:col-span-2"><span className={hint}>{variant==="contact"?"Service of interest":"Enquiry type"} {variant==="contact"?"":"*"}</span><select required={variant!=="contact"} value={variant==="contact"?data.service:data.kind} onChange={e=>put(variant==="contact"?"service":"kind",e.target.value)} className={field}><option value="">Select an option</option>{options[variant].map(v=><option key={v} value={v}>{v}</option>)}</select></label>
{variant==="cac"&&<><label><span className={hint}>Proposed name (first choice)</span><input className={field} maxLength={150} value={data.proposedName} onChange={e=>put("proposedName",e.target.value)} placeholder="Preferred business name"/></label><label><span className={hint}>Alternative name</span><input className={field} maxLength={150} value={data.proposedName2} onChange={e=>put("proposedName2",e.target.value)} placeholder="Second name choice"/></label></>}
{variant==="loan"&&<><label><span className={hint}>Approximate amount (₦)</span><input className={field} inputMode="numeric" maxLength={12} value={data.amount} onChange={e=>put("amount",e.target.value.replace(/\D/g,""))} placeholder="Amount to discuss"/></label><label><span className={hint}>Preferred tenor</span><select className={field} value={data.tenor} onChange={e=>put("tenor",e.target.value)}><option value="">Not decided</option>{["3 months","6 months","9 months","12 months","18 months","24 months","Other"].map(v=><option key={v}>{v}</option>)}</select></label></>}
{variant==="investment"&&<label className="sm:col-span-2"><span className={hint}>Preferred term</span><select className={field} value={data.tenor} onChange={e=>put("tenor",e.target.value)}><option value="">To discuss</option>{["3 months","6 months","12 months","Other"].map(v=><option key={v}>{v}</option>)}</select></label>}
<label className="sm:col-span-2"><span className={hint}>{variant==="contact"?"Your message":"Tell us about your requirements"} *</span><textarea className={field+" min-h-[120px] resize-y"} maxLength={3000} required value={data.message} onChange={e=>put("message",e.target.value)} placeholder="Briefly explain what you need. Do not include BVN, NIN, passwords or bank details."/></label>
</div>
{variant!=="contact"&&<p className="mt-4 flex items-start gap-2 rounded-lg bg-[#EFF7F1] p-3 text-[12px] leading-5 text-[#557362]"><ShieldCheck size={18} className="shrink-0 text-[#005C38]"/>This is an initial enquiry, not a completed financial or CAC filing. Documents must use a verified secure application channel.</p>}
{error&&<div role="alert" className="mt-4 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-[13px] leading-6 text-red-800"><AlertCircle size={18} className="mt-0.5 shrink-0"/>{error}</div>}
<div className="mt-5 flex flex-wrap items-center gap-3"><button type="submit" disabled={status==="sending"} className="inline-flex items-center gap-2 rounded-lg bg-[#005C38] px-6 py-3.5 text-[13px] font-bold text-white transition hover:bg-[#338B2E] disabled:cursor-wait disabled:opacity-60">{status==="sending"?"Sending...":"Send enquiry"}<ArrowUpRight size={17}/></button><a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-[#C1D8C6] px-5 py-3.5 text-[13px] font-bold text-[#005C38] hover:bg-[#F3F9F4]">Enquire on WhatsApp <ArrowUpRight size={16}/></a></div>
<p className="mt-4 text-[11px] leading-5 text-[#718C78]">We use the details provided to respond. See the <a href="/privacy" className="font-semibold underline">privacy notice</a>.</p></form>;

}
