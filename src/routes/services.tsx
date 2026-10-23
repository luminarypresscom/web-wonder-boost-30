import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/lib/services";
import { PageIntro, BlueprintBand } from "@/components/site/Layout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Book Marketing, Design & Websites | Luminary Press" },
      { name: "description", content: "Explore Amazon and Goodreads promotion, outreach, book covers, mockups, trailers, author websites, direct sales stores and campaign support." },
      { property: "og:title", content: "Book Marketing Services | Luminary Press" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:description", content: "Book marketing, creative design, author websites and every service in our Startup, Growth and Signature packages." },
    ],
  }),
  component: Services,
});

const steps = [
  ["Consult", "A deep-dive discovery session: your book, audience, goals and timeline. No templates, no recycled plans."],
  ["Strategize", "We map platforms, timing, messaging, partnerships and press. The plan is approved before a single post goes live."],
  ["Launch", "Full transparency: weekly check-ins, live reporting and continuous optimization. You write, we handle the rest."],
];

function Services() {
  return (
    <>
      <PageIntro eyebrow="What we do" title="Marketing, design and websites built for authors.">
        We work exclusively with authors and publishers. Every account, asset and piece of content stays yours. You never share royalties or rights with us.
      </PageIntro>
      <section className="mx-auto max-w-6xl space-y-16 px-5 py-20">
        {services.map((s, i) => (
          <article key={s.title} className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>img]:order-2" : ""}`}>
            <img src={s.img} alt={s.alt} loading="lazy" width={1200} height={900} className={`aspect-[4/3] w-full rounded-xl shadow-offset ${s.title === "Book Cover Design" ? "bg-ink-deep object-contain" : "object-cover"}`} />
            <div>
              <p className="eyebrow">{String(i + 1).padStart(2, "0")} / Service</p>
              <h2 className="mt-3 text-4xl text-foreground">{s.title}</h2>
              <p className="mt-4 text-muted-foreground">{s.description}</p>
              <ul className="mt-6 space-y-3">
                {s.features.map((feature) => (
                  <li key={feature} className="border-l-2 border-primary pl-3 text-sm text-accent">{feature}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
      <section className="border-t border-border bg-ink-deep">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow">The process</p>
          <h2 className="mt-3 text-4xl text-foreground">Three steps to visibility</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map(([t, d], i) => (
              <div key={t} className="rounded-xl border border-border bg-card p-6">
                <p className="font-serif text-5xl text-primary">0{i + 1}</p>
                <h3 className="mt-3 text-2xl text-foreground">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <BlueprintBand />
    </>
  );
}
