import { NextResponse } from "next/server";

// Stub endpoint for the contact form.
// TODO: forward submissions to your inbox/CRM (e.g. Resend, a webhook, or a DB)
// before launch.
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // TODO: send the message somewhere useful.
    console.log("[contact] new message:", { name, email });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
