import { createFileRoute } from "@tanstack/react-router";
import promo from "@/assets/promo.jpg";
import social from "@/assets/social.jpg";
import { PageIntro, BlueprintBand } from "@/components/site/Layout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Author Promotion & Social Media | Luminary Press" },
      { name: "description", content: "Author brand building, press outreach, BookTok and Bookstagram marketing, and a clear three-step campaign process." },
      { property: "og:title", content: "Book Marketing Services | Luminary Press" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:description", content: "Author promotion and social media marketing built around your readers." },
    ],
  }),
  component: Services,
});

const services = [
  {
    img: promo,
    n: "01",
    t: "Author Promotion",
    d: "We build your author brand from the ground up, positioning you as an authority in your genre. From press outreach and media placements to interview coaching and long-term reputation strategy, we make sure the world knows not just your book, but the mind behind it.",
    tags: ["Brand identity", "Media outreach", "Press strategy", "Interview coaching"],
  },
  {
    img: social,
    n: "02",
    t: "Social Media Marketing",
    d: "Platform-native content that builds genuine, lasting readership. We manage your presence across Instagram, TikTok, X and LinkedIn, turning followers into loyal readers and word-of-mouth advocates.",
    tags: ["Content strategy", "Community growth", "BookTok", "Bookstagram"],
  },
];

const steps = [
  ["Consult", "A deep-dive discovery session: your book, audience, goals and timeline. No templates, no recycled plans."],
  ["Strategize", "We map platforms, timing, messaging, partnerships and press. The plan is approved before a single post goes live."],
  ["Launch", "Full transparency: weekly check-ins, live reporting and continuous optimization. You write, we handle the rest."],
];

function Services() {
  return (
    <>
      <PageIntro eyebrow="What we do" title="Marketing built only for authors.">
        We work exclusively with authors and publishers. Every account, asset and piece of content stays yours. You never share royalties or rights with us.
      </PageIntro>
      <section className="mx-auto max-w-6xl space-y-16 px-5 py-20">
        {services.map((s, i) => (
          <article key={s.t} className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>img]:order-2" : ""}`}>
            <img src={s.img} alt={s.t} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover shadow-offset" />
            <div>
              <p className="eyebrow">{s.n} / Service</p>
              <h2 className="mt-3 text-4xl text-foreground">{s.t}</h2>
              <p className="mt-4 text-muted-foreground">{s.d}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <li key={t} className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-accent">{t}</li>
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
