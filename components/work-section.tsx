import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const outcomes = [
  "Booking requests go straight to the restaurant manager",
  "Dietary, kids and parking answers up front",
  "Tap-to-call and directions on every page",
  "Google reviews on the homepage",
];

const concepts = [
  { category: "OPERATIONS", name: "Signal Desk", description: "An operations dashboard for small teams." },
  { category: "HOSPITALITY", name: "Local Loop", description: "Loyalty for independent venues." },
  { category: "LEARNING", name: "Study Buddy", description: "A focused companion for steadier study sessions." },
  { category: "WELLBEING", name: "Cozy Companion", description: "A gentle daily planning and reflection concept.", href: "/cozy-companion.html" },
];

function SectionIntro({ label, title, description }: { label: string; title: string; description: string }) {
  return (
    <div className="section-heading mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
      <div><p className="eyebrow">{label}</p><h2 className="section-title mt-4">{title}</h2></div>
      <p className="max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">{description}</p>
    </div>
  );
}

export function WorkSection() {
  return (
    <section id="work" className="section-shell section-divider">
      <SectionIntro label="Selected client work / 03" title="Real sites for real venues." description="Built mobile-first, shaped around the way people decide, and kept up to date for the people running the business." />
      <Card className="overflow-hidden lg:grid lg:grid-cols-[.9fr_1.1fr] lg:gap-0">
        <div className="relative min-h-[280px] overflow-hidden bg-muted sm:min-h-[380px] lg:min-h-full">
          <Image src="/images/sq-dining.png" alt="SQ Bar & Grill dining room, presented as a hospitality website project" fill sizes="(max-width: 1024px) 100vw, 45vw" loading="lazy" className="object-cover transition-transform duration-700 motion-reduce:transition-none hover:scale-[1.025]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
          <span className="absolute bottom-5 left-5 rounded-full border border-white/35 bg-black/30 px-3 py-2 font-mono text-[9px] uppercase tracking-[.12em] text-white backdrop-blur-sm">Social dining / Penrith</span>
          <span className="absolute right-5 top-5 grid size-11 place-items-center rounded-2xl bg-primary text-sm font-black text-primary-foreground">SQ</span>
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-11">
          <div className="flex items-center justify-between gap-4"><p className="eyebrow">01 / CLIENT WEBSITE</p><span className="font-mono text-[10px] text-muted-foreground">PENRITH, NSW</span></div>
          <CardHeader className="px-0 pb-0 pt-5"><CardTitle className="text-3xl sm:text-4xl">SQ Bar &amp; Grill</CardTitle><p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">A complete website for an all-day venue: menu, functions, visit planning and a live booking flow. I built it, and I manage it every month.</p></CardHeader>
          <div className="mt-5 flex flex-wrap gap-2"><span className="tag">Online booking</span><span className="tag">Functions enquiries</span><span className="tag">Mobile-first</span><span className="tag">Installable on phones</span></div>
          <CardContent className="mt-7 px-0">
            <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              {outcomes.map((item) => <li className="flex items-start gap-2.5" key={item}><Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" /><span>{item}</span></li>)}
            </ul>
          </CardContent>
          <CardFooter className="mt-8 border-t border-border px-0 pt-5 pb-0">
            <a className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" href="https://www.sqbarandgrill.com" target="_blank" rel="noopener noreferrer">Visit the live site <ArrowUpRight aria-hidden="true" /></a>
            <a className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-xs font-semibold transition hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" href="/sq-bar-and-grill.html">Read case study <ArrowRight aria-hidden="true" /></a>
          </CardFooter>
        </div>
      </Card>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <Card className="overflow-hidden">
          <div className="relative flex min-h-[170px] items-end overflow-hidden bg-[#18231d] p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(244,163,150,.22),transparent_28%),linear-gradient(145deg,transparent_45%,rgba(165,233,255,.1))]" aria-hidden="true" />
            <div className="relative rounded-2xl border border-white/15 bg-[#101512]/70 px-4 py-3 text-white backdrop-blur"><p className="font-mono text-[9px] uppercase tracking-[.16em] text-[#a5e9ff]">Sehaj</p><p className="mt-1 text-lg font-extrabold tracking-tight">Indian Food &amp; Sweets</p><p className="mt-1 font-mono text-[9px] uppercase tracking-[.12em] text-white/60">Five locations · one clear home</p></div>
            <span className="absolute right-6 top-6 font-mono text-[9px] uppercase tracking-[.14em] text-white/60">02 / WEB EXPERIENCE</span>
          </div>
          <CardHeader className="pb-2"><CardTitle>Sehaj Indian Food &amp; Sweets</CardTitle><p className="text-sm leading-7 text-muted-foreground">A mobile-first refresh that puts five locations, opening details and the brand story in one place.</p></CardHeader>
          <CardFooter className="pt-0"><a className="text-link" href="/sehaj-indian-food.html">Read case study <ArrowRight aria-hidden="true" /></a></CardFooter>
        </Card>
        <Card className="overflow-hidden">
          <div className="relative flex min-h-[170px] items-center justify-center overflow-hidden bg-[#102027] p-6">
            <div className="w-full max-w-[330px] rounded-2xl border border-[#a5e9ff]/20 bg-[#0b1518] p-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[9px] text-white/50"><span>REQUEST QUEUE</span><span className="text-[#dfff5a]">03 OPEN</span></div>
              {["Table for four · 6:30 pm", "Birthday dinner · 7:00 pm"].map((row, index) => <div className="mt-3 flex items-center justify-between gap-3 rounded-xl bg-white/[.05] px-3 py-2.5 text-[10px] text-white/80" key={row}><span>{row}</span><span className={index === 0 ? "text-[#a5e9ff]" : "text-[#f4a396]"}>{index === 0 ? "Review" : "New"}</span></div>)}
            </div>
            <span className="absolute right-5 top-5 font-mono text-[9px] uppercase tracking-[.14em] text-white/55">03 / OPERATIONS SYSTEM</span>
          </div>
          <CardHeader className="pb-2"><CardTitle>Booking management</CardTitle><p className="text-sm leading-7 text-muted-foreground">A private staging system where staff review and confirm customer requests. Built with Node.js and Supabase.</p></CardHeader>
          <CardFooter className="pt-0"><a className="text-link" href="/booking-management.html">Read case study <ArrowRight aria-hidden="true" /></a></CardFooter>
        </Card>
      </div>
      <div className="mt-14 border-t border-border pt-7 sm:mt-20">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"><div><p className="eyebrow">Not launched / experiments</p><h3 className="mt-2 text-xl font-bold tracking-tight">Concepts <span className="text-muted-foreground">for later.</span></h3></div><p className="text-xs text-muted-foreground">Client work comes first.</p></div>
        <div className="grid gap-x-6 sm:grid-cols-2 lg:grid-cols-4">{concepts.map((concept) => <article className="border-t border-border py-4" key={concept.name}><p className="font-mono text-[9px] uppercase tracking-[.14em] text-muted-foreground">{concept.category}</p><h4 className="mt-2 text-sm font-semibold">{concept.name}</h4><p className="mt-1 text-xs leading-6 text-muted-foreground">{concept.description}</p>{concept.href && <a className="mt-2 inline-flex items-center gap-1 text-xs text-primary" href={concept.href}>Explore concept <ArrowUpRight aria-hidden="true" /></a>}</article>)}</div>
      </div>
    </section>
  );
}
