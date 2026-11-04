import type {Metadata} from "next";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
export const metadata:Metadata={
 metadataBase:new URL("https://andusinternationalng.com"),
 title:{default:"ANDUS International Nigeria Limited",template:"%s | ANDUS International"},
 description:"ANDUS International Nigeria Limited provides services across finance, oil and gas, real estate, logistics, agriculture, contracting and business registration.",
 authors:[{name:"ANDUS International Nigeria Limited"}],
 openGraph:{type:"website",locale:"en_NG",url:"https://andusinternationalng.com",siteName:"ANDUS International",title:"ANDUS International Nigeria Limited",description:"Empowering lives. Transforming communities."},
 robots:{index:true,follow:true},
};
const organization={"@context":"https://schema.org","@type":"Organization",name:"ANDUS International Nigeria Limited",url:"https://andusinternationalng.com",description:"Nigerian multi-sector business group with seven divisions.",address:{"@type":"PostalAddress",streetAddress:"Bankole Estate, Ibasa Magboro",addressRegion:"Ogun State",addressCountry:"NG"},contactPoint:[{"@type":"ContactPoint",telephone:"+2348068833012",contactType:"customer service"}]};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><head>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700;9..144,800&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organization)}}/>
</head><body className="bg-white text-[#173F2B] antialiased"><a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-24 focus:z-[100] focus:rounded-lg focus:bg-white focus:p-3 focus:text-[#005C38]">Skip to main content</a><Navbar/><div id="main-content">{children}</div><Footer/><WhatsAppButton/></body></html>}