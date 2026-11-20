import { Resend } from "resend";

export const runtime = "nodejs";

const recipient = "sehajpalsingh360@gmail.com";
const sender = "MYTHTECH001 <onboarding@resend.dev>";

function text(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 12_000) {
    return Response.json({ error: "This request is too large." }, { status: 413 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Please check the form and try again." }, { status: 400 });
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return Response.json({ error: "Please check the form and try again." }, { status: 400 });
  }

  const fields = payload as Record<string, unknown>;
  if (text(fields.company, 200)) {
    return Response.json({ ok: true });
  }

  const name = text(fields.name, 100);
  const businessName = text(fields.businessName, 120);
  const website = text(fields.website, 2048);
  const message = text(fields.message, 3000);

  if (!name || name.length > 100) {
    return Response.json({ error: "Please add your name and try again." }, { status: 400 });
  }
  if (website) {
    try {
      const parsedWebsite = new URL(website);
      if (parsedWebsite.protocol !== "http:" && parsedWebsite.protocol !== "https:") throw new Error("Invalid protocol");
    } catch {
      return Response.json({ error: "Please enter a valid website URL." }, { status: 400 });
    }
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "Email is not configured yet. Please use the email link below." }, { status: 503 });
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: sender,
    to: [recipient],
    subject: `Free homepage concept request from ${name}`,
    text: [
      `Name: ${name}`,
      `Business name: ${businessName || "Not provided"}`,
      `Current website: ${website || "Not provided"}`,
      "",
      "What they would like help with:",
      message || "Not provided",
    ].join("\n"),
  });

  if (error) {
    return Response.json({ error: "Your request couldn’t be sent right now. Please email me directly." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
