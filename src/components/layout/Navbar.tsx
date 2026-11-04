"use client";
import {useEffect,useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {Menu,X,ChevronDown,ArrowUpRight,Phone} from "lucide-react";
import {SERVICES,SITE} from "@/lib/data";
const items=[{label:"About",href:"/about"},{label:"Projects",href:"/projects"},{label:"Media",href:"/media"},{label:"Contact",href:"/contact"}];
export default function Navbar(){
const [open,setOpen]=useState(false),[serviceMenu,setServiceMenu]=useState(false);
const path=usePathname();
useEffect(()=>{setOpen(false);setServiceMenu(false)},[path]);
return <header className="fixed inset-x-0 top-0 z-50 border-b border-[#DCE9E0] bg-white/[.96] shadow-[0_3px_16px_rgba(5,65,35,.035)] backdrop-blur-xl">
<div className="container-xl flex h-[78px] items-center justify-between gap-4">
<Link href="/" aria-label="ANDUS International homepage" className="flex min-w-0 items-center gap-2.5">
 <Image src="/brand/andus-original.webp" alt="ANDUS logo" width={67} height={61} className="h-[58px] w-[67px] shrink-0 object-contain"/>
 <span className="hidden leading-tight sm:block"><strong className="block text-[15px] font-extrabold tracking-[.025em] text-[#005C38]">ANDUS</strong><small className="block text-[9px] font-bold uppercase tracking-[.1em] text-[#557362]">International Nigeria Ltd</small></span>
</Link>
<nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
<Link href="/" className={"rounded-lg px-3 py-2 text-sm font-semibold transition hover:bg-[#EFF6F0] hover:text-[#005C38] "+(path==="/"?"text-[#005C38]":"text-[#315240]")}>Home</Link>
<Link href="/about" className={"rounded-lg px-3 py-2 text-sm font-semibold transition hover:bg-[#EFF6F0] hover:text-[#005C38] "+(path==="/about"?"text-[#005C38]":"text-[#315240]")}>About</Link>
<div className="group relative"><Link href="/services" aria-haspopup="true" className={"inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold transition hover:bg-[#EFF6F0] hover:text-[#005C38] "+(path.startsWith("/services")?"text-[#005C38]":"text-[#315240]")}>Our Divisions <ChevronDown size={15}/></Link>
<div className="invisible absolute left-1/2 top-full z-50 w-[560px] -translate-x-1/2 translate-y-2 rounded-[14px] border border-[#DFEAE1] bg-white p-3 opacity-0 shadow-[0_18px_55px_rgba(0,41,22,.13)] transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
<p className="px-3 pb-2 pt-1 text-[10px] font-extrabold uppercase tracking-[.2em] text-[#338B2E]">Seven specialist divisions</p><div className="grid grid-cols-2 gap-1">{SERVICES.map((s,i)=><Link key={s.id} href={s.href} className="group/item flex items-center gap-3 rounded-lg px-3 py-3 hover:bg-[#F0F7F1]"><span className="text-xs font-bold text-[#6A9777]">0{i+1}</span><span className="text-[13px] font-semibold text-[#214633]">{s.title}</span></Link>)}</div>
<div className="mt-2 flex justify-between border-t border-[#E6EEE8] px-3 pt-3"><Link href="/loan-application" className="text-xs font-bold text-[#005C38] hover:underline">Loan application</Link><Link href="/investment" className="text-xs font-bold text-[#005C38] hover:underline">Investment enquiry</Link></div>
</div></div>
{items.filter(i=>i.label!=="About").map(i=><Link key={i.href} href={i.href} className={"rounded-lg px-3 py-2 text-sm font-semibold transition hover:bg-[#EFF6F0] hover:text-[#005C38] "+(path===i.href?"text-[#005C38]":"text-[#315240]")}>{i.label}</Link>)}
</nav>
<div className="hidden items-center gap-3 lg:flex"><a href={"tel:"+SITE.phone[0]} aria-label="Call ANDUS" className="grid h-9 w-9 place-items-center rounded-full border border-[#DDE9E0] text-[#005C38] hover:bg-[#F0F7F1]"><Phone size={17}/></a><Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-[#005C38] px-5 py-3 text-[13px] font-bold text-white transition hover:bg-[#338B2E]">Get in touch <ArrowUpRight size={17}/></Link></div>
<button type="button" aria-label={open?"Close menu":"Open menu"} aria-expanded={open} aria-controls="andus-mobile-menu" onClick={()=>setOpen(v=>!v)} className="grid h-10 w-10 place-items-center rounded-lg border border-[#D9E8DC] text-[#005C38] lg:hidden">{open?<X size={22}/>:<Menu size={22}/>}</button>
</div>
{open&&<nav id="andus-mobile-menu" aria-label="Mobile navigation" className="max-h-[calc(100dvh-78px)] overflow-y-auto border-t border-[#E5EEE7] bg-white px-5 py-4 shadow-xl lg:hidden"><Link href="/" className="block rounded-md px-3 py-2.5 text-sm font-bold text-[#214633]">Home</Link><Link href="/about" className="block rounded-md px-3 py-2.5 text-sm font-bold text-[#214633]">About</Link><button type="button" onClick={()=>setServiceMenu(v=>!v)} aria-expanded={serviceMenu} className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-bold text-[#214633]">Our Divisions <ChevronDown size={17} className={serviceMenu?"rotate-180":""}/></button>{serviceMenu&&<div className="ml-2 rounded-xl bg-[#F4FAF5] p-2">{SERVICES.map(s=><Link key={s.id} href={s.href} className="block rounded-md px-3 py-2 text-sm text-[#315742]">{s.title}</Link>)}</div>}{items.filter(i=>i.label!=="About").map(i=><Link key={i.href} href={i.href} className="block rounded-md px-3 py-2.5 text-sm font-bold text-[#214633]">{i.label}</Link>)}<Link href="/investment" className="block rounded-md px-3 py-2.5 text-sm font-bold text-[#214633]">Investment</Link><Link href="/loan-application" className="mt-3 block rounded-lg bg-[#005C38] px-4 py-3 text-center text-sm font-bold text-white">Loan enquiries</Link></nav>}
</header>;
}