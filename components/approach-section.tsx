import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { TESTIMONIAL } from "@/lib/site-content";

const steps = [
  { number: "01", title: "Ground it", description: "Start with real people, real constraints and the context around the work." },
  { number: "02", title: "Shape it", description: "Turn complexity into clear flows, calm interfaces and useful moments." },
  { number: "03", title: "Ship it", description: "Make the thing real, test it in the world, then keep improving it." },
];

export function ApproachSection() {
  return (
    <>
      <section className="section-shell py-14 sm:py-20" aria-labelledby="testimonial-heading">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-7 sm:p-11 lg:p-14">
          <div className="pointer-events-none absolute -right-10 -top-24 select-none font-serif text-[22rem] leading-none text-primary/[.045]" aria-hidden="true">“</div>
          <div className="relative z-10 max-w-3xl"><p className="eyebrow" id="testimonial-heading">A kind word / SQ Bar &amp; Grill</p><blockquote className="mt-6 text-2xl leading-[1.25] font-semibold tracking-[-.045em] sm:text-4xl">“{TESTIMONIAL.quote}”</blockquote><p className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground"><strong className="text-foreground">{TESTIMONIAL.name}</strong><span aria-hidden="true">·</span><span>{TESTIMONIAL.role}, {TESTIMONIAL.business}</span></p></div>
        </div>
      </section>
      <section id="about" className="section-shell section-divider">
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <div><p className="eyebrow">How I work</p><h2 className="section-title mt-4">Less noise.<br /><span className="text-primary">More signal.</span></h2><p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground">I’m Sehaj, a web designer and developer in Western Sydney. I care about the space between a business and the people using its website: start with the real problem, make the experience feel clear, then keep it working.</p><a href="#contact" className="text-link mt-6">Tell me what you’re building <ArrowUpRight aria-hidden="true" /></a></div>
          <div className="grid gap-4 sm:grid-cols-3">
            {steps.map((step, index) => <article className="border-t border-border pt-5" key={step.number}><div className="flex items-center justify-between"><span className="font-mono text-[10px] tracking-[.14em] text-muted-foreground">{step.number} / 03</span>{index === 2 ? <ArrowUpRight className="size-4 text-primary" aria-hidden="true" /> : <ArrowDownRight className="size-4 text-primary" aria-hidden="true" />}</div><h3 className="mt-7 text-lg font-semibold tracking-tight">{step.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p></article>)}
          </div>
        </div>
      </section>
    </>
  );
}
