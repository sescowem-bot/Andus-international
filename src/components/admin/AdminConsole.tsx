"use client";
import {useEffect,useMemo,useState} from "react";
import type {FormEvent} from "react";
import {createClient} from "@supabase/supabase-js";
import {ShieldCheck,ArrowRight,LogOut,RefreshCw,Search,LockKeyhole,Eye,EyeOff,CheckCircle2,AlertCircle,ArrowUpRight} from "lucide-react";
type Role="admin"|"reviewer";
type Item={id:string;reference:string;kind:string;full_name:string;email:string;phone:string;service:string;message:string;details:Record<string,unknown>;status:string;created_at:string;updated_at:string};
type Event={id:number;from_status:string|null;to_status:string;note:string|null;created_at:string};
const STATUSES=["new","in_review","awaiting_customer","approved","rejected","completed"];
const KIND_LABELS:{[key:string]:string}={contact:"General enquiry",loan:"Loan enquiry",cac:"CAC registration",investment:"Investment"};
const fmt=(iso:string)=>new Date(iso).toLocaleString("en-NG",{dateStyle:"medium",timeStyle:"short"});
const style="w-full rounded-lg border border-[#CBDDD1] bg-white px-3.5 py-2.5 text-sm text-[#103B27] outline-none focus:border-[#338B2E] focus:ring-2 focus:ring-[#338B2E]/15";
export default function AdminConsole(){
 const supabase=useMemo(()=>{
   const url=process.env.NEXT_PUBLIC_ANDUS_SUPABASE_URL,key=process.env.NEXT_PUBLIC_ANDUS_SUPABASE_PUBLISHABLE_KEY;
   return url&&key?createClient(url,key):null;
 },[]);
 const [screen,setScreen]=useState<"loading"|"signin"|"enroll"|"challenge"|"dashboard">("loading");
 const [email,setEmail]=useState(""),[password,setPassword]=useState(""),[showPassword,setShowPassword]=useState(false);
 const [otp,setOtp]=useState(""),[factorId,setFactorId]=useState(""),[qr,setQr]=useState("");
 const [role,setRole]=useState<Role|null>(null),[staffEmail,setStaffEmail]=useState("");
 const [error,setError]=useState(""),[busy,setBusy]=useState(false);
 const [items,setItems]=useState<Item[]>([]),[total,setTotal]=useState(0),[page,setPage]=useState(0);
 const [kind,setKind]=useState(""),[status,setStatus]=useState(""),[search,setSearch]=useState("");
 const [selected,setSelected]=useState<Item|null>(null),[events,setEvents]=useState<Event[]>([]);
 const [newStatus,setNewStatus]=useState(""),[note,setNote]=useState("");
 const [updating,setUpdating]=useState(false);
 async function bearer(){
   if(!supabase)throw Error("Staff authentication is not configured");
   const {data}=await supabase.auth.getSession();
   if(!data.session?.access_token)throw Error("Please sign in again");
   return data.session.access_token;
 }
 async function request(path:string,options:RequestInit={}){
   const token=await bearer();
   const res=await fetch(path,{...options,cache:"no-store",headers:{...(options.headers||{}),Authorization:"Bearer "+token}});
   const data=await res.json().catch(()=>({}));
   if(!res.ok)throw Error(data.error||"Unable to complete request");
   return data;
 }
 async function verifyStaff(){
   const data=await request("/api/admin/me");
   setRole(data.role as Role);setStaffEmail(data.email||"");setScreen("dashboard");
 }
 async function checkSession(){
   if(!supabase){setScreen("signin");return;}
   try{
    const {data:{session}}=await supabase.auth.getSession();
    if(!session){setScreen("signin");return;}
    const level=await supabase.auth.mfa.getAuthenticatorAssuranceLevel();
    if(level.error)throw level.error;
    if(level.data.currentLevel!=="aal2"){
      const available=await supabase.auth.mfa.listFactors();
      if(available.error)throw available.error;
      const verified=available.data.totp.find(x=>x.status==="verified");
      if(verified){setFactorId(verified.id);setScreen("challenge");return;}
      const enrolled=await supabase.auth.mfa.enroll({factorType:"totp"});
      if(enrolled.error)throw enrolled.error;
      setFactorId(enrolled.data.id);setQr(enrolled.data.totp.qr_code);setScreen("enroll");return;
    }
    await verifyStaff();
   }catch(e){setError(e instanceof Error?e.message:"Unable to verify staff account");setScreen("signin");}
 }
 useEffect(()=>{void checkSession();},[supabase]); // The same browser client persists for this page.
 useEffect(()=>{if(screen==="dashboard")void loadList();},[screen,page,kind,status]);
 async function signin(e:FormEvent){
   e.preventDefault();if(!supabase){setError("The secure staff backend has not been configured");return;}
   setBusy(true);setError("");
   try{
     const {error:authError}=await supabase.auth.signInWithPassword({email,password});
     if(authError)throw authError;
     setPassword("");await checkSession();
   }catch(e){setError(e instanceof Error?e.message:"Unable to sign in");}
   finally{setBusy(false);}
 }
 async function verifyTotp(e:FormEvent){
   e.preventDefault();if(!supabase)return;
   setBusy(true);setError("");
   try{
     const verified=await supabase.auth.mfa.challengeAndVerify({factorId,code:otp.trim()});
     if(verified.error)throw verified.error;
     await supabase.auth.refreshSession();setOtp("");await checkSession();
   }catch(e){setError(e instanceof Error?e.message:"Invalid authentication code");}
   finally{setBusy(false);}
 }
 async function signout(){await supabase?.auth.signOut();setItems([]);setRole(null);setSelected(null);setScreen("signin");}
 async function loadList(){
   setBusy(true);setError("");
   try{
    const params=new URLSearchParams({page:String(page)});
    if(kind)params.set("kind",kind);if(status)params.set("status",status);
    const data=await request("/api/admin/applications?"+params.toString());
    setItems(data.items||[]);setTotal(data.count||0);
   }catch(e){setError(e instanceof Error?e.message:"Unable to load cases");}
   finally{setBusy(false);}
 }
 async function openItem(item:Item){
   setBusy(true);setError("");
   try{const data=await request("/api/admin/applications/"+encodeURIComponent(item.id));setSelected(data.application);setEvents(data.events||[]);setNewStatus(data.application.status);setNote("");}
   catch(e){setError(e instanceof Error?e.message:"Unable to open case");}
   finally{setBusy(false);}
 }
 async function saveStatus(e:FormEvent){
   e.preventDefault();if(!selected)return;
   setUpdating(true);setError("");
   try{
    await request("/api/admin/applications/"+encodeURIComponent(selected.id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:newStatus,note})});
    await openItem({...selected,status:newStatus});await loadList();
   }catch(e){setError(e instanceof Error?e.message:"Unable to update case");}
   finally{setUpdating(false);}
 }
 const visible=items.filter(x=>(x.reference+" "+x.full_name+" "+x.email+" "+x.service).toLowerCase().includes(search.toLowerCase()));
 if(screen==="loading")return <main className="min-h-screen bg-[#F4F8F5] pb-20 pt-32"><div className="container-xl text-sm text-[#557362]">Checking staff access…</div></main>;
 if(screen!=="dashboard"){
  return <main className="min-h-screen bg-[#F3F8F4] pb-16 pt-32">
   <div className="mx-auto max-w-[470px] px-5">
    <div className="mb-6 text-center"><span className="mx-auto grid h-14 w-14 place-items-center rounded-xl bg-[#005C38] text-white"><LockKeyhole size={26}/></span><p className="mt-5 text-xs font-bold uppercase tracking-[.16em] text-[#338B2E]">ANDUS / Staff only</p><h1 className="mt-2 text-3xl font-bold text-[#083F2C]">Secure staff access</h1><p className="mt-2 text-sm leading-7 text-[#557362]">Applications and customer information are restricted to authorised employees.</p></div>
    <div className="rounded-2xl border border-[#D8E9DC] bg-white p-6 shadow-sm">
      {screen==="signin"?<form onSubmit={signin} className="space-y-4">
       <label className="block"><span className="mb-1 block text-sm font-semibold text-[#234832]">Work email</span><input className={style} type="email" autoComplete="username" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="name@company.com"/></label>
       <label className="block"><span className="mb-1 block text-sm font-semibold text-[#234832]">Password</span><span className="flex gap-2"><input className={style} type={showPassword?"text":"password"} autoComplete="current-password" required minLength={8} value={password} onChange={e=>setPassword(e.target.value)}/><button type="button" aria-label={showPassword?"Hide password":"Show password"} onClick={()=>setShowPassword(v=>!v)} className="rounded-lg border border-[#D9E8DC] px-3 text-[#005C38]">{showPassword?<EyeOff size={19}/>:<Eye size={19}/>}</button></span></label>
       <button type="submit" disabled={busy||!supabase} className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#005C38] px-5 py-3 text-sm font-bold text-white disabled:opacity-60">{busy?"Signing in…":"Continue securely"}<ArrowRight size={17}/></button>
       {!supabase&&<p className="text-xs leading-6 text-[#8A4B26]">Staff sign-in is pending secure backend configuration.</p>}
      </form>:<form onSubmit={verifyTotp} className="space-y-4">
       <h2 className="text-lg font-bold text-[#083F2C]">{screen==="enroll"?"Set up authenticator":"Enter authenticator code"}</h2>
       {screen==="enroll"&&<><p className="text-sm leading-6 text-[#557362]">Scan this QR code with your authenticator app, then enter its six-digit code.</p>{qr&&<img className="mx-auto h-44 w-44" src={qr} alt="Two-factor authenticator setup QR code"/>}</>}
       <label className="block"><span className="mb-1 block text-sm font-semibold text-[#234832]">Six-digit code</span><input className={style} type="text" inputMode="numeric" autoComplete="one-time-code" maxLength={6} pattern="[0-9]{6}" required value={otp} onChange={e=>setOtp(e.target.value.replace(/\D/g,""))}/></label>
       <button type="submit" disabled={busy||otp.length!==6} className="w-full rounded-lg bg-[#005C38] px-5 py-3 text-sm font-bold text-white disabled:opacity-60">Verify and continue</button>
       <button type="button" onClick={()=>void signout()} className="w-full text-xs font-semibold text-[#567660]">Use another account</button>
      </form>}
      {error&&<p role="alert" className="mt-4 flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700"><AlertCircle size={18} className="shrink-0"/>{error}</p>}
    </div>
   </div>
  </main>;
 }
 return <main className="min-h-screen bg-[#F3F8F4] pb-16 pt-[113px]">
 <div className="container-xl">
   <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#DCE8DE] pb-5">
     <div><p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#338B2E]">Private / Applications</p><h1 className="mt-2 text-3xl font-bold text-[#083F2C]">Enquiry management</h1><p className="mt-2 text-sm text-[#557362]">{staffEmail} · {role==="admin"?"Administrator":"Reviewer"}</p></div>
     <div className="flex gap-2"><button type="button" onClick={()=>void loadList()} className="flex items-center gap-2 rounded-lg border border-[#C9DECD] bg-white px-4 py-2.5 text-sm font-semibold text-[#005C38]"><RefreshCw size={16}/> Refresh</button><button type="button" onClick={()=>void signout()} className="flex items-center gap-2 rounded-lg bg-[#083F2C] px-4 py-2.5 text-sm font-semibold text-white"><LogOut size={16}/> Sign out</button></div>
   </div>
   <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#DCE9DF] bg-white p-4">
     <div className="flex flex-wrap gap-2"><select aria-label="Enquiry type" className={style+" max-w-[175px]"} value={kind} onChange={e=>{setPage(0);setKind(e.target.value)}}><option value="">All categories</option>{Object.entries(KIND_LABELS).map(([key,label])=><option key={key} value={key}>{label}</option>)}</select><select aria-label="Status filter" className={style+" max-w-[170px]"} value={status} onChange={e=>{setPage(0);setStatus(e.target.value)}}><option value="">All statuses</option>{STATUSES.map(s=><option key={s} value={s}>{s.replaceAll("_"," ")}</option>)}</select></div>
     <label className="relative w-full sm:w-[255px]"><Search size={17} className="absolute left-3 top-3 text-[#7C9783]"/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search this page" className={style+" pl-9"}/></label>
   </div>
   {error&&<p role="alert" className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</p>}
   <div className="mt-4 overflow-x-auto rounded-xl border border-[#DEE9DF] bg-white">
     <table className="w-full min-w-[790px] text-left text-sm"><thead className="border-b border-[#E4ECE5] bg-[#F7FAF7] text-xs font-bold uppercase tracking-wider text-[#51715A]"><tr><th className="px-4 py-4">Reference</th><th className="px-4 py-4">Customer</th><th className="px-4 py-4">Category</th><th className="px-4 py-4">Status</th><th className="px-4 py-4">Received</th><th className="px-4 py-4">Action</th></tr></thead>
     <tbody className="divide-y divide-[#E8EFE9]">{visible.map(item=><tr key={item.id} className="transition hover:bg-[#F6FBF7]"><td className="px-4 py-4 font-bold text-[#005C38]">{item.reference}</td><td className="px-4 py-4"><strong className="block text-[#164129]">{item.full_name}</strong><small className="text-[#6A8670]">{item.email}</small></td><td className="px-4 py-4 text-[#4E6C57]">{KIND_LABELS[item.kind]||item.kind}</td><td className="px-4 py-4"><span className="rounded-full bg-[#E7F5EB] px-3 py-1 text-xs font-semibold capitalize text-[#005C38]">{item.status.replaceAll("_"," ")}</span></td><td className="px-4 py-4 whitespace-nowrap text-xs text-[#6A8270]">{fmt(item.created_at)}</td><td className="px-4 py-4"><button type="button" onClick={()=>void openItem(item)} className="inline-flex items-center gap-1 text-xs font-bold text-[#005C38]">Review <ArrowUpRight size={16}/></button></td></tr>)}</tbody></table>
     {!busy&&visible.length===0&&<p className="p-8 text-center text-sm text-[#6B8471]">No enquiries match these filters.</p>}
   </div>
   <div className="mt-4 flex items-center justify-between text-sm text-[#557362]"><span>{total} total · Page {page+1}</span><div className="flex gap-2"><button type="button" disabled={page===0} onClick={()=>setPage(n=>Math.max(0,n-1))} className="rounded-lg border border-[#D0E2D4] bg-white px-4 py-2 disabled:opacity-40">Previous</button><button type="button" disabled={(page+1)*25>=total} onClick={()=>setPage(n=>n+1)} className="rounded-lg border border-[#D0E2D4] bg-white px-4 py-2 disabled:opacity-40">Next</button></div></div>
   <p className="mt-6 flex items-start gap-2 text-xs leading-6 text-[#6F8874]"><ShieldCheck size={17} className="shrink-0"/>Staff access requires a verified user, a staff role and two-factor authentication. This is an enquiry register, not a banking or CAC filing platform.</p>
 </div>
 {selected&&<div className="fixed inset-0 z-[90] flex items-end justify-center bg-[#061A0F]/65 p-3 sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-labelledby="case-title" onClick={()=>setSelected(null)}><div onClick={e=>e.stopPropagation()} className="max-h-[90dvh] w-full max-w-[780px] overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-7">
   <div className="flex items-start justify-between gap-4 border-b border-[#E0EBE2] pb-4"><div><p className="text-xs font-bold uppercase tracking-widest text-[#338B2E]">{selected.reference} / {KIND_LABELS[selected.kind]}</p><h2 id="case-title" className="mt-2 text-2xl font-bold text-[#083F2C]">{selected.full_name}</h2><p className="mt-2 text-sm text-[#52715C]">{fmt(selected.created_at)} · {selected.service}</p></div><button type="button" onClick={()=>setSelected(null)} className="rounded-lg border border-[#CBDCCF] px-3 py-2 text-sm font-bold text-[#005C38]">Close</button></div>
   <div className="grid gap-4 py-5 sm:grid-cols-2"><div><h3 className="text-xs font-bold uppercase tracking-wide text-[#338B2E]">Contact details</h3><p className="mt-2 text-sm text-[#285139]">{selected.email}</p><p className="mt-1 text-sm text-[#285139]">{selected.phone}</p></div><div><h3 className="text-xs font-bold uppercase tracking-wide text-[#338B2E]">Additional information</h3>{Object.entries(selected.details||{}).map(([k,v])=><p key={k} className="mt-1 text-sm text-[#52715C]"><strong>{k}:</strong> {String(v)}</p>)}</div></div>
   <div className="rounded-xl bg-[#F4F9F5] p-4"><h3 className="text-xs font-bold uppercase tracking-wide text-[#338B2E]">Customer message</h3><p className="mt-2 whitespace-pre-wrap break-words text-sm leading-7 text-[#244B32]">{selected.message}</p></div>
   <form onSubmit={saveStatus} className="mt-5 grid gap-4 border-t border-[#E3ECE5] pt-5 sm:grid-cols-2"><label><span className="mb-1 block text-xs font-bold text-[#315940]">Status</span><select className={style} value={newStatus} onChange={e=>setNewStatus(e.target.value)}>{STATUSES.filter(s=>role==="admin"||["in_review","awaiting_customer"].includes(s)).map(s=><option key={s} value={s}>{s.replaceAll("_"," ")}</option>)}</select></label><label><span className="mb-1 block text-xs font-bold text-[#315940]">Internal note (optional)</span><input className={style} value={note} maxLength={1000} onChange={e=>setNote(e.target.value)} placeholder="No passwords or ID numbers"/></label><div className="sm:col-span-2"><button type="submit" disabled={updating} className="inline-flex items-center gap-2 rounded-lg bg-[#005C38] px-5 py-3 text-sm font-bold text-white disabled:opacity-60">{updating?"Saving…":"Save status"} <CheckCircle2 size={16}/></button></div></form>
   <section className="mt-6 border-t border-[#E3ECE5] pt-5"><h3 className="text-sm font-bold text-[#083F2C]">Status history</h3>{events.length===0?<p className="mt-3 text-sm text-[#6B8571]">No previous status changes.</p>:<div className="mt-3 space-y-2">{events.map(ev=><div key={ev.id} className="rounded-lg border border-[#E4ECE5] p-3 text-sm text-[#516C59]"><strong className="capitalize text-[#16422C]">{ev.from_status||"new"} → {ev.to_status.replaceAll("_"," ")}</strong><span className="ml-3 text-xs">{fmt(ev.created_at)}</span>{ev.note&&<p className="mt-1 text-sm">{ev.note}</p>}</div>)}</div>}</section>
 </div></div>}
 </main>;
}
