import { ArrowUpRight, Mail } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { CONTACT_EMAIL, WHATSAPP_PHONE } from "@/lib/site-content";

export function ContactSection() {
  return (
    <section id="contact" className="section-shell section-divider pb-20 sm:pb-28">
      <div className="grid overflow-hidden rounded-[2rem] border border-border bg-card lg:grid-cols-[.85fr_1.15fr]">
        <div className="relative flex flex-col justify-between overflow-hidden bg-primary p-7 text-primary-foreground sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute -bottom-24 -right-20 size-80 rounded-full border border-primary-foreground/15" aria-hidden="true"><div className="absolute inset-8 rounded-full border border-primary-foreground/15" /><div className="absolute inset-16 rounded-full border border-primary-foreground/15" /></div>
          <div className="relative"><p className="font-mono text-[10px] uppercase tracking-[.16em] opacity-70">No obligation / a useful first step</p><h2 className="mt-5 max-w-lg text-4xl leading-[1.02] font-extrabold tracking-[-.07em] sm:text-5xl">Get a free homepage concept.</h2><p className="mt-5 max-w-md text-sm leading-7 opacity-80">Send me your business and current website. I’ll make a quick concept of how your homepage could look, with no obligation.</p></div>
          <div className="relative mt-12 flex flex-col gap-3 border-t border-primary-foreground/20 pt-5 text-sm">
            <a className="inline-flex w-fit items-center gap-2 font-semibold" href={`mailto:${CONTACT_EMAIL}`}><Mail aria-hidden="true" className="size-4" /> {CONTACT_EMAIL} <ArrowUpRight aria-hidden="true" className="size-4" /></a>
            <p className="text-xs opacity-80">{WHATSAPP_PHONE}</p>
          </div>
        </div>
        <div className="p-6 sm:p-9 lg:p-12"><ContactForm /></div>
      </div>
    </section>
  );
}
