import { ArrowUpRight, Github } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-border px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <span>© 2026 MYTHTECH001 · Western Sydney, Australia</span>
      <div className="flex items-center gap-5"><a className="inline-flex items-center gap-1.5 transition hover:text-foreground" href="https://github.com/MYTHTECH001" target="_blank" rel="noopener noreferrer"><Github aria-hidden="true" className="size-3.5" /> GitHub <ArrowUpRight aria-hidden="true" className="size-3" /></a><a className="transition hover:text-foreground" href="#work">Full portfolio</a></div>
    </footer>
  );
}
