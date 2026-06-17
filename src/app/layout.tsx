import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://andusinternationalng.com"),
  title: {
    default: "ANDUS International Nigeria | Multi-Sector Business Group",
    template: "%s | ANDUS International Nigeria",
  },
  description:
    "ANDUS International Nigeria Limited — a CAC-registered, multi-sector business group delivering financial services, oil & gas supply, real estate, automobile logistics, agriculture, general contracting, and CAC registration across Nigeria.",
  keywords: [
    "ANDUS International Nigeria", "Nigeria financial services", "loans Nigeria",
    "SME loans Nigeria", "oil gas supply Nigeria", "real estate Ogun State",
    "CAC registration Nigeria", "microfinance Nigeria", "Ogun State business",
  ],
  authors: [{ name: "ANDUS International Nigeria Limited" }],
  openGraph: {
    type: "website", locale: "en_NG",
    url: "https://andusinternationalng.com",
    siteName: "ANDUS International Nigeria",
    title: "ANDUS International Nigeria | Multi-Sector Business Group",
    description: "Empowering lives and transforming communities through seven business divisions.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ANDUS International Nigeria" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ANDUS International Nigeria",
    description: "Licensed, multi-sector business group empowering Nigerians across seven divisions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: "https://andusinternationalng.com" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ANDUS International Nigeria Limited",
  url: "https://andusinternationalng.com",
  logo: "https://andusinternationalng.com/logo.png",
  description: "CAC-registered multi-sector business group delivering financial services, oil & gas, real estate, automobile logistics, agriculture, general contracting, and CAC registration across Nigeria.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bankole Estate, Ibasa Magboro",
    addressRegion: "Ogun State",
    addressCountry: "NG",
  },
  contactPoint: [
    { "@type": "ContactPoint", telephone: "+2348068833012", contactType: "customer service" },
    { "@type": "ContactPoint", telephone: "+2348021058328", contactType: "sales" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=DM+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-slate-900 antialiased">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
