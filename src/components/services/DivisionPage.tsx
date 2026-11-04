import Link from "next/link";
import Image from "next/image";
import {ArrowUpRight,ArrowRight,CheckCircle2,Play} from "lucide-react";
import type {Division} from "@/lib/divisions";
import Reveal from "@/components/ui/Reveal";
export default function DivisionPage({data}:{data:Division}){
 const enquiry="/contact?service="+encodeURIComponent(data.title);
 const action=data.action??enquiry;
 return <main className="bg-white">
  <header className="border-b border-[#DFECE2] bg-[#F7FAF7] pt-[112px] sm:pt-[118px]">
   <div className="container-xl grid items-center gap-8 pb-10 pt-5 lg:grid-cols-[1.1fr_.9fr] lg:gap-12 lg:pb-12">
    <div className="andus-entrance">
     <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.2em] text-[#338B2E]"><span className="h-0.5 w-6 bg-[#338B2E]"/>Division {data.index} / 07</div>
     <h1 className="mt-5 max-w-3xl text-[clamp(2.45rem,4.3vw,4rem)] font-extrabold leading-[1.09] tracking-[-.045em] text-[#083F2C]">{data.headline}</h1>
     <p className="mt-4 max-w-[630px] text-[16px] leading-[1.75] text-[#4A6656]">{data.lede}</p>
     <div className="mt-7 flex flex-wrap gap-3">
      <Link href={action} className="group inline-flex items-center gap-2 rounded-lg bg-[#005C38] px-5 py-3 text-sm font-bold text-white transition duration-300 hover:bg-[#338B2E]">{data.actionText??"Discuss this service"}<ArrowUpRight size={17} className="transition group-hover:translate-x-1 group-hover:-translate-y-1"/></Link>
      <Link href="#capabilities" className="inline-flex items-center gap-2 rounded-lg border border-[#B9D5BF] px-5 py-3 text-sm font-bold text-[#005C38] transition hover:bg-white">View capabilities <ArrowRight size={17}/></Link>
     </div>
    </div>
    <div className="relative h-[230px] overflow-hidden rounded-[18px] border border-[#D3E8D8] bg-[#083F2C] shadow-[0_18px_50px_rgba(5,65,40,.09)] sm:h-[290px]">
      <Image src={"/images/divisions/"+data.slug+".svg"} alt="" fill priority sizes="(max-width:1024px) 100vw, 44vw" className="object-cover"/>
      <div className="absolute bottom-4 left-5 right-5 flex justify-between border-t border-white/25 pt-3 text-xs font-semibold uppercase tracking-[.16em] text-white/85"><span>ANDUS International</span><span>{data.index} / 07</span></div>
    </div>
   </div>
  </header>
  <div className="border-b border-[#E1EEE4] bg-white"><div className="container-xl flex flex-wrap items-center gap-x-7 gap-y-3 py-3">{data.highlights.map(t=><span key={t} className="inline-flex items-center gap-2 text-xs font-semibold text-[#436953]"><CheckCircle2 size={16} className="shrink-0 text-[#338B2E]"/>{t}</span>)}</div></div>
  <section id="capabilities" className="scroll-mt-24 py-12 sm:py-16"><div className="container-xl">
    <div className="grid gap-5 md:grid-cols-[.85fr_1.15fr] md:items-end"><div><span className="text-[11px] font-extrabold uppercase tracking-[.2em] text-[#338B2E]">What we do</span><h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#083F2C] sm:text-[2.5rem]">{data.title}<br/>capabilities.</h2></div><p className="max-w-2xl text-sm leading-7 text-[#557362] sm:text-[15px]">{data.intro}</p></div>
    <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">{data.offerings.map(([name,description],i)=><Reveal key={name} delay={Math.min(i,6)*.045}><article className="group flex h-full min-h-[164px] flex-col rounded-[14px] border border-[#DDEAE1] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#9BC6A5] hover:shadow-[0_12px_30px_rgba(0,60,30,.08)]"><div className="flex items-center justify-between"><span className="text-[11px] font-bold tracking-widest text-[#338B2E]">{String(i+1).padStart(2,"0")}</span><ArrowUpRight size={17} className="text-[#6A9777] transition group-hover:translate-x-1 group-hover:-translate-y-1"/></div><h3 className="mt-4 text-[18px] font-bold leading-tight text-[#083F2C]">{name}</h3><p className="mt-2 text-[13px] leading-[1.65] text-[#597263]">{description}</p></article></Reveal>)}</div>
  </div></section>
  <section className="bg-[#093F2C] py-11 text-white sm:py-14"><div className="container-xl grid gap-6 md:grid-cols-[.95fr_1.05fr] md:items-center md:gap-12"><div><p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#B8E8AA]">Before you begin</p><h2 className="mt-3 text-[28px] font-bold leading-[1.16] tracking-tight sm:text-4xl">{data.focusTitle}</h2></div><p className="text-[14px] leading-[1.85] text-white/80">{data.focusText}</p></div></section>
  {data.videos&&data.videos.length>0&&<section className="bg-[#F6FAF7] py-12 sm:py-14"><div className="container-xl"><div className="flex flex-wrap items-end justify-between gap-5"><div><span className="text-[11px] font-bold uppercase tracking-[.2em] text-[#338B2E]">Original company media</span><h2 className="mt-3 text-3xl font-bold text-[#083F2C]">See this division in action.</h2></div><Link href="/media" className="inline-flex items-center gap-2 text-sm font-semibold text-[#005C38]">All videos <ArrowUpRight size={16}/></Link></div><div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{data.videos.map(([title,id])=><a key={id} href={"https://www.youtube.com/watch?v="+id} target="_blank" rel="noopener noreferrer" className="group flex min-h-[118px] items-center gap-4 rounded-xl border border-[#DDEAE1] bg-white p-5 transition hover:border-[#96C8A3] hover:shadow-md"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#E9F5EB] text-[#005C38] transition group-hover:bg-[#005C38] group-hover:text-white"><Play size={20}/></span><span><strong className="block text-sm text-[#083F2C]">{title}</strong><small className="mt-1 block text-xs text-[#557362]">Watch on YouTube</small></span></a>)}</div></div></section>}
  <section className="py-10 sm:py-12"><div className="container-xl flex flex-wrap items-center justify-between gap-5 rounded-[17px] border border-[#D5E8D9] bg-[#F3F9F4] px-6 py-7 sm:px-9"><div><p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#338B2E]">Let's talk</p><h2 className="mt-2 text-[23px] font-bold text-[#083F2C]">Need help with {data.title.toLowerCase()}?</h2><p className="mt-1 text-sm text-[#557362]">Tell us your requirements and we'll discuss the next steps.</p></div><Link href={enquiry} className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#005C38] px-5 py-3 text-sm font-bold text-white hover:bg-[#338B2E]">Send an enquiry <ArrowUpRight size={17}/></Link></div></section>
 </main>;
}