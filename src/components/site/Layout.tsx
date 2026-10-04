import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL } from "@/lib/site-data";

const nav = [
  { to: "/", label: "Home" },
  { to: "/publishing", label: "Publishing" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-serif text-xl font-semibold tracking-wide text-foreground">Luminary</span>
          <span className="eyebrow">Press</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-semibold text-muted-foreground transition hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/blueprint"
            className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition hover:opacity-90"
          >
            Free Blueprint
          </Link>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      {open && (
        <nav className="border-t border-border px-5 pb-6 pt-2 md:hidden">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="block border-b border-border py-3 font-serif text-lg text-foreground"
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/blueprint"
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-sm bg-primary px-4 py-3 text-center font-bold text-primary-foreground"
          >
            Get a free Blueprint
          </Link>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink-deep">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-foreground">Luminary Press</p>
          <p className="mt-2 text-sm text-muted-foreground">Hybrid publishing, book marketing & author promotion.</p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-muted-foreground hover:text-foreground">
              {n.label}
            </Link>
          ))}
          <Link to="/blueprint" className="text-muted-foreground hover:text-foreground">Free Blueprint</Link>
        </div>
        <div className="text-sm">
          <p className="eyebrow">Get in touch</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="mt-2 block break-all text-foreground hover:text-accent">
            {CONTACT_EMAIL}
          </a>
          <a href="mailto:luminarypress.online@proton.me" className="mt-1 block break-all text-foreground hover:text-accent">
            luminarypress.online@proton.me
          </a>
          <a href="mailto:sam.luminarypress.online@gmail.com" className="mt-1 block break-all text-foreground hover:text-accent">
            sam.luminarypress.online@gmail.com
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61589893041779"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-foreground hover:text-accent"
          >
            <Facebook size={16} /> Facebook
          </a>
          <p className="mt-2 text-muted-foreground">Typically replies within a day</p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-5 py-5 text-xs text-muted-foreground">
          <p>© 2026 Luminary Press. All rights reserved.</p>
          <p className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-foreground">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-foreground">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: React.ReactNode; children?: React.ReactNode }) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] text-foreground md:text-6xl">{title}</h1>
        {children && <div className="mt-6 max-w-2xl text-lg text-muted-foreground">{children}</div>}
      </div>
    </section>
  );
}

export function BlueprintBand() {
  return (
    <section className="bg-primary">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-foreground/80">Free · No obligation</p>
          <h2 className="mt-2 max-w-xl text-3xl text-primary-foreground md:text-4xl">
            See where your book stands before you spend a dollar.
          </h2>
        </div>
        <Link
          to="/blueprint"
          className="rounded-md bg-ink-deep px-6 py-3.5 text-sm font-bold text-foreground transition hover:opacity-90"
        >
          Get my free Blueprint →
        </Link>
      </div>
    </section>
  );
}
