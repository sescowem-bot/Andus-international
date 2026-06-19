import type { Metadata } from "next";
import LoanClient from "./LoanClient";

export const metadata: Metadata = {
  title: "Loan Application — Apply for a Loan with ANDUS International",
  description:
    "Apply for a consumer loan, SME financing, asset finance, or LPO funding with ANDUS International Nigeria. Fast approval, transparent terms, no hidden fees. Apply online today.",
};

export default function LoanApplicationPage() {
  return <LoanClient />;
}
