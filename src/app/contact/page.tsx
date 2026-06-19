import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us — Get in Touch with ANDUS International",
  description:
    "Contact ANDUS International Nigeria by phone, WhatsApp, or email. Our team is ready to assist with loans, petroleum supply, real estate, logistics, farming, contracting, and CAC registration.",
};

export default function ContactPage() {
  return <ContactClient />;
}
