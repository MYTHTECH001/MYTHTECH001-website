import { ArrowUpRight, Gamepad2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ROBLOX_LINKS } from "@/lib/site-content";

const games = [
  { name: "STAR HUNT", description: "A Roblox game I designed and built end to end: gameplay scripting, interface design, and the icon and thumbnail art.", link: ROBLOX_LINKS.starHunt, accent: "text-[#a5e9ff]" },
  { name: "STEAL A DREAM", description: "A Roblox game I designed and built end to end: game systems, UI and visuals, with a focus on a clear, fun first minute for new players.", link: ROBLOX_LINKS.stealADream, accent: "text-[#f4a396]" },
];

export function RobloxSection() {
  return (
    <section id="roblox" className="section-shell section-divider">
      <div className="section-heading mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="eyebrow">A different kind of build</p><h2 className="section-title mt-4">Roblox &amp; games.</h2></div>
        <p className="max-w-lg text-sm leading-7 text-muted-foreground">I also script and design Roblox games, including UI, icons and thumbnails. Available for commissions.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {games.map((game, index) => (
          <Card className="bg-card/60" key={game.name}>
            <CardHeader className="pb-0"><div className="flex items-center justify-between"><span className="font-mono text-[10px] uppercase tracking-[.14em] text-muted-foreground">GAME 0{index + 1} / ROBLOX</span><Gamepad2 className={`size-5 ${game.accent}`} aria-hidden="true" /></div><CardTitle className="pt-4 text-2xl">{game.name}</CardTitle></CardHeader>
            <CardContent><p className="text-sm leading-7 text-muted-foreground">{game.description}</p><div className="mt-5 flex items-center justify-between border-t border-border pt-4"><span className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.12em] text-muted-foreground"><span className="size-1.5 rounded-full bg-[#f4a396]" /> Solo build</span>{game.link ? <a className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary" href={game.link} target="_blank" rel="noopener noreferrer">Find on Roblox <ArrowUpRight aria-hidden="true" /></a> : null}</div></CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
