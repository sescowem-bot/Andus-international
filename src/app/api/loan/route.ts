import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, phone, email, address, loanType, amount, period, employment, purpose } = body;

    if (!firstName || !phone || !amount) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn("RESEND_API_KEY not set — email not sent");
      return NextResponse.json({ success: true, dev: true });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "ANDUS Website <noreply@andusinternationalng.com>",
      to: [process.env.LOAN_EMAIL ?? "info@andusinternationalng.com"],
      subject: `New Loan Application — ${loanType} — ${firstName} ${lastName} — ₦${Number(amount).toLocaleString()}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#0C6B37;padding:24px;border-radius:8px 8px 0 0">
            <h2 style="color:white;margin:0">New Loan Application</h2>
            <p style="color:rgba(255,255,255,0.7);margin:4px 0 0">ANDUS International — Financial Services</p>
          </div>
          <div style="background:#f8f9fa;padding:24px;border:1px solid #e9ecef;border-radius:0 0 8px 8px">
            <h3 style="margin:0 0 16px;color:#0C6B37">Applicant Details</h3>
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#6c757d;font-size:13px;width:160px">Full Name</td><td style="padding:8px 0;font-weight:600">${firstName} ${lastName}</td></tr>
              <tr><td style="padding:8px 0;color:#6c757d;font-size:13px">Phone</td><td style="padding:8px 0">${phone}</td></tr>
              <tr><td style="padding:8px 0;color:#6c757d;font-size:13px">Email</td><td style="padding:8px 0">${email || "Not provided"}</td></tr>
              <tr><td style="padding:8px 0;color:#6c757d;font-size:13px">Address</td><td style="padding:8px 0">${address}</td></tr>
              <tr><td style="padding:8px 0;color:#6c757d;font-size:13px">Employment</td><td style="padding:8px 0">${employment}</td></tr>
            </table>
            <hr style="margin:16px 0;border:none;border-top:1px solid #dee2e6"/>
            <h3 style="margin:0 0 16px;color:#0C6B37">Loan Details</h3>
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#6c757d;font-size:13px;width:160px">Loan Type</td><td style="padding:8px 0;font-weight:600">${loanType}</td></tr>
              <tr><td style="padding:8px 0;color:#6c757d;font-size:13px">Amount Requested</td><td style="padding:8px 0;font-weight:700;color:#0C6B37">₦${Number(amount).toLocaleString()}</td></tr>
              <tr><td style="padding:8px 0;color:#6c757d;font-size:13px">Repayment Period</td><td style="padding:8px 0">${period}</td></tr>
            </table>
            <hr style="margin:16px 0;border:none;border-top:1px solid #dee2e6"/>
            <p style="color:#6c757d;font-size:13px;margin:0 0 8px">Purpose of Loan</p>
            <p style="margin:0;white-space:pre-wrap">${purpose}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Loan application error:", error);
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
  }
}
