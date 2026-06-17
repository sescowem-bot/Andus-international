import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ANDUS International Nigeria's privacy policy — how we collect, use, and protect your personal information.",
};

const SECTIONS = [
  {
    title: "Information We Collect",
    content: `We collect personal information that you voluntarily provide to us when you apply for a loan, make a service enquiry, register for our investment programme, or contact our team. This includes your name, phone number, email address, residential address, employment details, and financial information relevant to our services. We may also collect information through cookies when you use our website.`,
  },
  {
    title: "How We Use Your Information",
    content: `Your information is used to assess and process loan applications and service requests, communicate with you about your enquiry or account, fulfil our regulatory compliance obligations as a licensed financial institution, improve our services and client experience, and send you relevant information about ANDUS products and services (which you may opt out of at any time).`,
  },
  {
    title: "Information Sharing",
    content: `ANDUS International does not sell, rent, or share your personal information with third parties for their marketing purposes. We may share information with regulatory authorities as required by Nigerian law, credit reference agencies for loan assessment purposes, and trusted service partners who assist in our operations under strict confidentiality obligations.`,
  },
  {
    title: "Data Security",
    content: `We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, loss, or disclosure. All financial data is handled in accordance with Nigerian financial services regulations. However, no transmission over the internet is completely secure, and we encourage clients to take care with how they share personal information online.`,
  },
  {
    title: "Your Rights",
    content: `You have the right to request access to the personal information we hold about you, request correction of inaccurate information, withdraw consent to marketing communications at any time, and request deletion of your information where we have no legal obligation to retain it. To exercise any of these rights, please contact us using the details below.`,
  },
  {
    title: "Cookies",
    content: `Our website uses cookies to improve your browsing experience, understand how visitors use our site, and serve relevant content. You may disable cookies in your browser settings, though some functionality may be affected. We do not use cookies to collect sensitive personal information.`,
  },
  {
    title: "Changes to This Policy",
    content: `ANDUS International may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. The most current version will always be available on our website. Continued use of our services after any update constitutes acceptance of the revised policy.`,
  },
  {
    title: "Contact Us",
    content: `For any privacy-related queries, requests, or complaints, please contact ANDUS International Nigeria Limited at ${SITE.email} or by post to our registered office: ${SITE.address}.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        label="Legal"
        title={<>Privacy <em className="gold-text not-italic">Policy</em></>}
        description="How ANDUS International Nigeria collects, uses, and protects your personal information."
      />

      <section className="py-24 bg-andus-dark">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal>
            <div className="glass rounded-2xl p-6 border border-andus-gold/10 mb-12 flex items-start gap-4">
              <div className="text-andus-gold text-xl mt-0.5">ℹ️</div>
              <div>
                <p className="text-andus-text text-sm font-medium mb-1">Last Updated: January 1, 2025</p>
                <p className="text-andus-subtle text-sm leading-relaxed">
                  This policy applies to all services provided by ANDUS International Nigeria Limited, a company registered with the Corporate Affairs Commission of Nigeria.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="space-y-10">
            {SECTIONS.map((section, i) => (
              <Reveal key={section.title} delay={i * 40}>
                <div className="border-b border-andus-border/40 pb-10 last:border-0">
                  <h2 className="font-display text-2xl text-andus-white font-light mb-4">{section.title}</h2>
                  <p className="text-andus-subtle leading-relaxed">{section.content}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
