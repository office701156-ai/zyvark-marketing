import { NextResponse } from "next/server";

// Stub endpoint for newsletter / "Start free" email capture.
// TODO: wire this to your email provider (e.g. Resend, Mailchimp, Loops)
// or your signup flow before launch.
export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    if (typeof email !== "string" || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // TODO: persist the email / trigger your provider here.
    console.log("[subscribe] new signup:", email);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
