import { ArrowRight, CalendarCheck, HeartHandshake, MonitorSmartphone } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  { number: "01", icon: MonitorSmartphone, name: "Website design", description: "A fast, mobile-first site with your menu, hours, photos and a clear way to contact or book.", price: "From $800" },
  { number: "02", icon: CalendarCheck, name: "Booking & enquiry systems", description: "Online booking and function enquiries that go straight to the right person, with confirmation emails.", price: "From $400" },
  { number: "03", icon: HeartHandshake, name: "Monthly care plan", description: "Menu and price updates, new pages, fixes, security and backups. You message me, I change it.", price: "$150–$400", suffix: "per month" },
];

export function ServicesSection() {
  return (
    <section id="services" className="section-shell section-divider">
      <div className="section-heading mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="eyebrow">Clear scope / no surprises</p><h2 className="section-title mt-4">What I offer.</h2></div>
        <div className="max-w-lg"><p className="text-sm leading-7 text-muted-foreground sm:text-base">Fixed prices, clear scope, two rounds of revisions included. 50% upfront to start.</p><p className="mt-2 font-mono text-[10px] uppercase tracking-[.12em] text-muted-foreground">Indicative pricing · AUD · Written quote before work</p></div>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {services.map(({ number, icon: Icon, name, description, price, suffix }) => (
          <Card className="service-card group transition duration-300 hover:-translate-y-1 hover:border-primary/40 motion-reduce:transition-none" key={number}>
            <CardHeader className="pb-0"><div className="flex items-center justify-between"><span className="font-mono text-[10px] tracking-[.14em] text-muted-foreground">{number} / SERVICE</span><span className="grid size-10 place-items-center rounded-xl border border-border bg-background text-primary"><Icon className="size-4" aria-hidden="true" /></span></div><CardTitle className="pt-4">{name}</CardTitle></CardHeader>
            <CardContent className="flex-1"><p className="text-sm leading-7 text-muted-foreground">{description}</p></CardContent>
            <CardFooter className="mt-auto flex items-center justify-between border-t border-border pt-5"><span className="font-mono text-lg font-medium tracking-tight text-primary">{price}{suffix && <small className="ml-2 text-[10px] text-muted-foreground">{suffix}</small>}</span><a href="#contact" className="grid size-9 place-items-center rounded-full border border-border transition group-hover:border-primary/50" aria-label={`Ask about ${name}`}><ArrowRight className="size-4" aria-hidden="true" /></a></CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
