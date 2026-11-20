import Image from "next/image";
import { ArrowDown, ArrowUpRight, CalendarCheck, HeartHandshake, MapPin, UtensilsCrossed } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";

const proofPoints = [
  { label: "Live project", value: "SQ Bar & Grill", icon: UtensilsCrossed },
  { label: "Booking requests", value: "To the manager", icon: CalendarCheck },
  { label: "After launch", value: "Monthly care", icon: HeartHandshake },
];

export function HeroSection() {
  return (
    <section id="top" className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:min-h-[730px] lg:grid-cols-[1.12fr_.88fr] lg:items-center lg:gap-8 lg:pb-24 lg:pt-20">
      <div className="relative z-10">
        <p className="eyebrow"><span className="size-2 rounded-full bg-primary shadow-[0_0_16px_var(--primary)]" /> Websites for Western Sydney businesses</p>
        <h1 className="mt-7 max-w-3xl text-[clamp(3.35rem,8vw,6.1rem)] leading-[.93] font-extrabold tracking-[-.09em] text-foreground">
          <span className="block">Websites that</span>
          <span className="block"><span className="text-primary">fill</span> tables.</span>
        </h1>
        <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">I design and build fast, good-looking websites with booking systems for restaurants, cafes and local businesses in Western Sydney.</p>
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <ButtonLink href="#contact" className="px-6">Get a free homepage concept <ArrowDown aria-hidden="true" data-icon="inline-end" /></ButtonLink>
          <a className="text-link" href="/sq-bar-and-grill.html">See SQ Bar &amp; Grill <ArrowUpRight aria-hidden="true" /></a>
        </div>
        <ul className="mt-10 grid gap-3 border-t border-border pt-5 sm:grid-cols-3" aria-label="What you can expect">
          {proofPoints.map(({ label, value, icon: Icon }) => (
            <li className="flex items-start gap-3" key={label}>
              <Icon className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span className="flex flex-col"><span className="font-mono text-[9px] uppercase tracking-[.12em] text-muted-foreground">{label}</span><strong className="mt-1 text-sm font-semibold">{value}</strong></span>
            </li>
          ))}
        </ul>
        <p className="mt-7 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.12em] text-muted-foreground"><MapPin className="size-3.5 text-primary" aria-hidden="true" /> Western Sydney, Australia</p>
      </div>
      <div className="relative mx-auto w-full max-w-[460px] lg:ml-auto lg:max-w-[440px]">
        <div className="absolute -inset-6 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,rgba(223,255,90,.13),transparent_67%)]" aria-hidden="true" />
        <div className="relative rounded-[2rem] border border-border bg-card/80 p-5 shadow-[0_28px_90px_rgba(0,0,0,.28)] sm:p-7">
          <div className="mb-5 flex items-center justify-between font-mono text-[9px] uppercase tracking-[.16em] text-muted-foreground"><span>SQ / Penrith</span><span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-primary" /> Live project</span></div>
          <div className="mx-auto w-[min(100%,292px)] rounded-[2.35rem] border border-white/15 bg-[#111715] p-[9px] shadow-[0_14px_36px_rgba(0,0,0,.42)]">
            <div className="relative overflow-hidden rounded-[1.85rem] bg-[#f5efe4]">
              <div className="relative h-[225px] overflow-hidden">
                <Image src="/images/sq-dining.png" alt="Warm, welcoming restaurant dining room with share plates and soft pendant lighting" fill sizes="(max-width: 640px) 72vw, 292px" priority className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
                <div className="absolute inset-x-4 top-4 flex items-center justify-between text-[9px] font-semibold text-white"><span>SQ BAR &amp; GRILL</span><span className="rounded-full border border-white/50 px-2 py-1">PENRITH</span></div>
                <div className="absolute inset-x-4 bottom-4 text-white"><p className="font-mono text-[8px] uppercase tracking-[.18em]">Good food, good company</p><p className="mt-1 text-xl leading-none font-extrabold tracking-tight">Make a night<br />of it.</p></div>
              </div>
              <div className="p-4 text-[#202720]"><p className="font-mono text-[8px] uppercase tracking-[.14em] text-[#647066]">A table is waiting</p><div className="mt-3 flex items-center justify-between"><span className="text-xs font-bold">Join us at SQ</span><span className="rounded-full bg-[#dfff5a] px-3 py-2 font-mono text-[8px] font-bold uppercase tracking-wide">Book a table</span></div></div>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {[["Web", "text-[#a5e9ff]"], ["Bookings", "text-primary"], ["Care", "text-[#f4a396]"]].map(([label, color]) => <span className={`rounded-full border border-border bg-background px-3 py-1.5 font-mono text-[9px] uppercase tracking-[.1em] ${color}`} key={label}>{label}</span>)}
          </div>
          <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[.14em] text-muted-foreground">Made for the moment someone decides to book.</p>
        </div>
        <div className="absolute -right-3 top-20 hidden rounded-full border border-border bg-background px-3 py-2 font-mono text-[9px] uppercase tracking-[.1em] text-muted-foreground sm:block">Built to feel easy</div>
      </div>
    </section>
  );
}
