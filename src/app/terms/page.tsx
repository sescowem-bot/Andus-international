import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions governing the use of ANDUS International Nigeria's services and website.",
};

const TERMS = [
  {
    title: "Acceptance of Terms",
    content: `By accessing and using the ANDUS International Nigeria website or engaging our services, you accept and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please discontinue use of our website and services. ANDUS International Nigeria Limited reserves the right to update these terms at any time, with changes taking effect upon posting to our website.`,
  },
  {
    title: "Services Description",
    content: `ANDUS International Nigeria Limited is a multi-sector business group registered with the Corporate Affairs Commission of Nigeria. Our services include financial services (including loan products), petroleum supply, real estate and construction, automobile and logistics, agriculture and livestock, general contracting, and CAC registration services. The provision of any specific service is subject to separate agreements, applicable regulatory requirements, and our internal approval processes.`,
  },
  {
    title: "Loan and Financial Services",
    content: `All loan and financial products are subject to credit assessment and approval at our sole discretion. Loan terms, interest rates, and repayment schedules are set out in individual loan agreements signed by both parties. Borrowers are responsible for ensuring they fully understand the terms of any financial product before signing. ANDUS International does not guarantee loan approval for any applicant. Provision of false information in any application constitutes grounds for immediate rejection or loan recovery.`,
  },
  {
    title: "Website Use",
    content: `You may use our website for lawful purposes only. You agree not to transmit any unlawful, harmful, or fraudulent material, attempt to gain unauthorised access to any part of our systems, use our website in any way that could damage, disable, or impair its operation, or collect personal data about other users without their consent. We reserve the right to suspend or terminate access for users who violate these conditions.`,
  },
  {
    title: "Intellectual Property",
    content: `All content on the ANDUS International website — including text, graphics, logos, images, and software — is the property of ANDUS International Nigeria Limited or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without prior written permission.`,
  },
  {
    title: "Disclaimer of Warranties",
    content: `Our website and services are provided on an "as is" basis without warranties of any kind, express or implied. While we strive to ensure accuracy and reliability in all our communications, ANDUS International does not warrant that the website will be uninterrupted, error-free, or free from viruses. Information on this website is for general guidance only and does not constitute financial, legal, or professional advice.`,
  },
  {
    title: "Limitation of Liability",
    content: `ANDUS International Nigeria Limited shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or services, including but not limited to loss of profits, data, or business opportunities. Our total liability for any claim arising out of or relating to these terms or our services shall not exceed the total amount paid by you for the specific service giving rise to the claim.`,
  },
  {
    title: "Governing Law",
    content: `These Terms of Service are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising from these terms or your use of our services shall be subject to the exclusive jurisdiction of the Nigerian courts.`,
  },
  {
    title: "Contact",
    content: `For questions about these Terms of Service, please contact ANDUS International Nigeria Limited at ${SITE.email} or ${SITE.phone[0]}, or write to us at our registered address: ${SITE.address}.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        label="Legal"
        title={<>Terms of <em className="gold-text not-italic">Service</em></>}
        description="Terms and conditions governing your use of ANDUS International Nigeria's website and services."
      />

      <section className="py-24 bg-andus-dark">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal>
            <div className="glass rounded-2xl p-6 border border-andus-gold/10 mb-12 flex items-start gap-4">
              <div className="text-andus-gold text-xl mt-0.5">📋</div>
              <div>
                <p className="text-andus-text text-sm font-medium mb-1">Effective Date: January 1, 2025</p>
                <p className="text-andus-subtle text-sm leading-relaxed">
                  Please read these terms carefully before using our services. Using ANDUS International services constitutes acceptance of these terms.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="space-y-10">
            {TERMS.map((term, i) => (
              <Reveal key={term.title} delay={i * 40}>
                <div className="border-b border-andus-border/40 pb-10 last:border-0">
                  <div className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-lg bg-andus-gold/10 border border-andus-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="font-mono text-[10px] text-andus-gold">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div>
                      <h2 className="font-display text-2xl text-andus-white font-light mb-4">{term.title}</h2>
                      <p className="text-andus-subtle leading-relaxed">{term.content}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
