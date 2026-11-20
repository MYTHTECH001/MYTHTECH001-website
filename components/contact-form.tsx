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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting || hasSubmitted) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          businessName: formData.get("businessName"),
          website: formData.get("website"),
          message: formData.get("message"),
          company: formData.get("company"),
        }),
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null);
        throw new Error(result?.error || "Your request couldn’t be sent. Please email me directly.");
      }

      setHasSubmitted(true);
      setStatus("Thanks, I’ll reply within 1 business day.");
      form.reset();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Your request couldn’t be sent. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <FieldGroup className="grid gap-5 sm:grid-cols-2">
        <Field><FieldLabel htmlFor="contact-name">Your name <span className="text-primary">*</span></FieldLabel><Input id="contact-name" name="name" autoComplete="name" required maxLength={100} placeholder="Your name" /></Field>
        <Field><FieldLabel htmlFor="business-name">Business name</FieldLabel><Input id="business-name" name="businessName" autoComplete="organization" maxLength={120} placeholder="Your business" /></Field>
      </FieldGroup>
      <Field>
        <FieldLabel htmlFor="contact-website">Current website</FieldLabel>
        <Input id="contact-website" name="website" type="url" autoComplete="url" maxLength={2048} placeholder="https://" />
      </Field>
      <Field>
        <FieldLabel htmlFor="contact-message">What would you like help with?</FieldLabel>
        <Textarea id="contact-message" name="message" rows={4} maxLength={3000} placeholder="A few details about your business and what you have in mind…" />
        <FieldDescription>Your details are sent securely and used only to reply to your enquiry.</FieldDescription>
      </Field>
      <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="contact-company">Leave this field empty</label>
        <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={isSubmitting || hasSubmitted}>
          {isSubmitting ? "Sending…" : hasSubmitted ? "Request sent" : "Send request"}
          <Send aria-hidden="true" data-icon="inline-end" />
        </Button>
        <span className="text-xs text-muted-foreground">No obligation. I’ll reply within 1 business day.</span>
      </div>
      {status && <p className="rounded-xl border border-primary/30 bg-primary/5 px-4 py-3 text-sm text-foreground" role="status" aria-live="polite">{status}</p>}
      <p className="text-xs text-muted-foreground">Prefer email? <a className="inline-flex items-center gap-1 text-primary underline underline-offset-4" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL} <ArrowUpRight aria-hidden="true" /></a>.</p>
    </form>
  );
}
