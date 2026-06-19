import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, service, message } = body;

    if (!firstName || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Use Resend only when API key is present (runtime, not build time)
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn("RESEND_API_KEY not set — email not sent");
      return NextResponse.json({ success: true, dev: true });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "ANDUS Website <noreply@andusinternationalng.com>",
      to: [process.env.CONTACT_EMAIL ?? "info@andusinternationalng.com"],
      replyTo: email,
      subject: `New Contact Enquiry — ${service || "General"} — ${firstName} ${lastName}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#0C6B37;padding:24px;border-radius:8px 8px 0 0">
            <h2 style="color:white;margin:0">New Contact Enquiry</h2>
            <p style="color:rgba(255,255,255,0.7);margin:4px 0 0">ANDUS International Website</p>
          </div>
          <div style="background:#f8f9fa;padding:24px;border:1px solid #e9ecef;border-radius:0 0 8px 8px">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#6c757d;font-size:13px;width:140px">Name</td><td style="padding:8px 0;font-weight:600">${firstName} ${lastName}</td></tr>
              <tr><td style="padding:8px 0;color:#6c757d;font-size:13px">Email</td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#6c757d;font-size:13px">Phone</td><td style="padding:8px 0">${phone || "Not provided"}</td></tr>
              <tr><td style="padding:8px 0;color:#6c757d;font-size:13px">Service</td><td style="padding:8px 0">${service || "General Enquiry"}</td></tr>
            </table>
            <hr style="margin:16px 0;border:none;border-top:1px solid #dee2e6"/>
            <p style="color:#6c757d;font-size:13px;margin:0 0 8px">Message</p>
            <p style="margin:0;white-space:pre-wrap">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
