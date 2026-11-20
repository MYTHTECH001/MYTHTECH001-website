"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT_EMAIL } from "@/lib/site-content";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const details = [
      `Name: ${String(formData.get("name") ?? "").trim()}`,
      `Business name: ${String(formData.get("businessName") ?? "").trim() || "Not provided"}`,
      `Current website: ${String(formData.get("website") ?? "").trim() || "Not provided"}`,
      "",
      "What they would like help with:",
      String(formData.get("message") ?? "").trim() || "Not provided",
    ].join("\n");
    const subject = encodeURIComponent("Free homepage concept request — MYTHTECH001");
    const body = encodeURIComponent(details);
    setStatus("Your email app should open with a draft. Review it and press Send to finish.");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <FieldGroup className="grid gap-5 sm:grid-cols-2">
        <Field><FieldLabel htmlFor="contact-name">Your name <span className="text-primary">*</span></FieldLabel><Input id="contact-name" name="name" autoComplete="name" required placeholder="Your name" /></Field>
        <Field><FieldLabel htmlFor="business-name">Business name</FieldLabel><Input id="business-name" name="businessName" autoComplete="organization" placeholder="Your business" /></Field>
      </FieldGroup>
      <Field>
        <FieldLabel htmlFor="contact-website">Current website</FieldLabel>
        <Input id="contact-website" name="website" type="url" autoComplete="url" placeholder="https://" />
      </Field>
      <Field>
        <FieldLabel htmlFor="contact-message">What would you like help with?</FieldLabel>
        <Textarea id="contact-message" name="message" rows={4} placeholder="A few details about your business and what you have in mind…" />
        <FieldDescription>Your email app opens with a draft; nothing is sent until you press Send.</FieldDescription>
      </Field>
      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit">Send request <Send aria-hidden="true" data-icon="inline-end" /></Button>
        <span className="text-xs text-muted-foreground">No obligation. I’ll reply within 1 business day.</span>
      </div>
      {status && <p className="rounded-xl border border-primary/30 bg-primary/5 px-4 py-3 text-sm text-foreground" role="status" aria-live="polite">{status}</p>}
      <p className="text-xs text-muted-foreground">If your email app doesn’t open, write to <a className="inline-flex items-center gap-1 text-primary underline underline-offset-4" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL} <ArrowUpRight aria-hidden="true" /></a>.</p>
    </form>
  );
}
