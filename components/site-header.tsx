"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/button";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#about" },
  { label: "Roblox", href: "#roblox" },
];

export function SiteHeader() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }

  return (
    <header className="sticky top-3 z-40 mx-auto flex w-[calc(100%-2rem)] max-w-6xl items-center justify-between gap-4 rounded-full border border-border bg-background/90 px-3 py-2 shadow-[0_8px_32px_rgba(0,0,0,.14)] backdrop-blur-xl sm:px-4">
      <a className="flex shrink-0 items-center gap-2.5 rounded-full text-xs font-bold tracking-[.12em]" href="#top" aria-label="MYTHTECH001 home">
        <span className="grid size-9 place-items-center rounded-xl bg-primary text-base font-extrabold text-primary-foreground">M</span>
        <span>MYTHTECH001</span>
      </a>
      <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
        {navigation.map((item) => <a className="nav-link" href={item.href} key={item.href}>{item.label}</a>)}
      </nav>
      <div className="hidden items-center gap-3 md:flex">
        <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 font-mono text-[10px] uppercase tracking-[.1em] text-muted-foreground">
          <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" /> Available for projects
        </span>
        <Button type="button" variant="outline" size="icon" aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} aria-pressed={theme === "light"} onClick={toggleTheme}>
          {theme === "dark" ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
        </Button>
        <ButtonLink href="#contact" size="sm">Free concept <ArrowUpRight aria-hidden="true" data-icon="inline-end" /></ButtonLink>
      </div>
      <div className="flex items-center gap-2 md:hidden">
        <Button type="button" variant="outline" size="icon" aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} aria-pressed={theme === "light"} onClick={toggleTheme}>
          {theme === "dark" ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
        </Button>
        <Button type="button" variant="ghost" size="icon" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </div>
      {menuOpen && (
        <nav id="mobile-navigation" className="absolute inset-x-0 top-[calc(100%+0.5rem)] rounded-3xl border border-border bg-background p-3 shadow-xl lg:hidden" aria-label="Mobile navigation">
          {navigation.map((item, index) => (
            <a className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}<span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
            </a>
          ))}
          <a className="mt-1 flex items-center justify-between rounded-2xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground" href="#contact" onClick={() => setMenuOpen(false)}>Free concept <ArrowUpRight aria-hidden="true" /></a>
        </nav>
      )}
    </header>
  );
}
