import { createFileRoute, Link } from "@tanstack/react-router";
import library from "@/assets/library.jpg";
import promo from "@/assets/promo.jpg";
import social from "@/assets/social.jpg";
import { covers, testimonials, blueprintItems } from "@/lib/site-data";
import { BlueprintBand } from "@/components/site/Layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luminary Press | Your Book Deserves to Be Seen" },
      { name: "description", content: "Book marketing and author promotion that grows real readership. Start with a free Book Growth Blueprint for your book." },
      { property: "og:title", content: "Luminary Press | Your Book Deserves to Be Seen" },
      { property: "og:description", content: "Book marketing and author promotion. Get a free Book Growth Blueprint and 30-day plan." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <img src={library} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-32">
          <p className="eyebrow">Premium author promotion</p>
          <h1 className="mt-5 max-w-3xl text-5xl leading-[1.02] text-foreground md:text-7xl">
            Your book deserves <em className="text-accent">to be seen.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Strategic social media marketing and promotion that turns great books into real readership, and authors into names readers remember.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/blueprint" className="shadow-offset rounded-md bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground">
              Get a free Book Growth Blueprint
            </Link>
            <Link to="/pricing" className="rounded-md border border-input px-6 py-3.5 text-sm font-bold text-foreground hover:bg-secondary">
              See packages
            </Link>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Free · takes 2 minutes · no obligation</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow">Start here, for free</p>
            <h2 className="mt-3 text-4xl text-foreground">What your free Blueprint covers</h2>
            <p className="mt-4 text-muted-foreground">
              A grounded, source-checked look at your book's real discovery signals, plus a practical plan for what to do next.
            </p>
            <Link to="/blueprint" className="mt-6 inline-block font-bold text-accent hover:underline">Request yours →</Link>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2">
            {blueprintItems.map(([t, d], i) => (
              <li key={t} className="rounded-lg border border-border bg-card p-5">
                <span className="font-serif text-sm text-accent">0{i + 1}</span>
                <p className="mt-1 font-semibold text-foreground">{t}</p>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-border bg-ink-deep">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-3 text-4xl text-foreground">Services built for authors</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { img: promo, t: "Author Promotion", d: "Brand identity, press outreach, media placements and interview coaching, so readers know the mind behind the book." },
              { img: social, t: "Social Media Marketing", d: "Platform-native content for BookTok, Bookstagram, X and LinkedIn that turns followers into loyal readers." },
            ].map((s) => (
              <Link key={s.t} to="/services" className="group overflow-hidden rounded-xl border border-border bg-card">
                <img src={s.img} alt={s.t} loading="lazy" className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="p-6">
                  <h3 className="text-2xl text-foreground">{s.t}</h3>
                  <p className="mt-2 text-muted-foreground">{s.d}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Our craft</p>
            <h2 className="mt-3 text-4xl text-foreground">Covers that stop the scroll</h2>
          </div>
          <Link to="/portfolio" className="font-bold text-accent hover:underline">View portfolio →</Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-5">
          {covers.slice(0, 5).map((c) => (
            <img key={c.title} src={c.src} alt={c.title} loading="lazy" className="aspect-[5/8] w-full rounded-md object-cover shadow-offset" />
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow">Author stories</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-xl border border-border bg-card p-6">
                <blockquote className="font-serif text-lg leading-relaxed text-foreground">"{t.quote}"</blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-bold text-foreground">{t.name}</span>
                  <span className="block text-muted-foreground">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <BlueprintBand />
    </>
  );
}
