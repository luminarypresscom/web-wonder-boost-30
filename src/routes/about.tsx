import { createFileRoute } from "@tanstack/react-router";
import lead from "@/assets/team-lead.jpg";
import { testimonials } from "@/lib/site-data";
import { PageIntro, BlueprintBand } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Luminary Press | Team & Philosophy" },
      { name: "description", content: "An author-first team of 9 specialists in strategy, content, outreach and design, founded by Samuel Eni." },
      { property: "og:title", content: "About Luminary Press" },
      { property: "og:description", content: "Precision, prestige and results. Meet the team behind every campaign." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const pillars = [
  ["Author-first philosophy", "We work exclusively with authors and publishers. Every strategy answers one question: what's best for this author's career?"],
  ["Data-driven storytelling", "Audience research, platform analytics and publishing market intelligence: the precision of data with the power of narrative."],
  ["Long-term brand building", "We don't chase viral moments. We build audiences that show up for your next book just as passionately."],
];

function About() {
  return (
    <>
      <PageIntro eyebrow="Why Luminary Press" title={<>Precision. Prestige. <em className="text-accent">Results.</em></>}>
        "The right story, told to the right people, at the right moment. That's not luck. That's strategy."
      </PageIntro>
      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-20 md:grid-cols-3">
        {pillars.map(([t, d]) => (
          <div key={t} className="rounded-xl border border-border bg-card p-6">
            <h2 className="text-2xl text-foreground">{t}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>
      <section className="border-y border-border bg-ink-deep">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2">
          <img src={lead} alt="Samuel Eni, Executive Marketing Manager" loading="lazy" className="aspect-[4/5] w-full max-w-md rounded-xl object-cover shadow-offset" />
          <div>
            <p className="eyebrow">Meet the team</p>
            <h2 className="mt-3 text-4xl text-foreground">Nine specialists behind every author.</h2>
            <p className="mt-4 text-muted-foreground">
              Leadership brings years of hands-on marketing strategy experience, backed by specialists in content, outreach and design, so every campaign is handled with precision, accountability and genuine care for your career.
            </p>
            <div className="mt-8 border-l-2 border-primary pl-4">
              <p className="font-serif text-xl text-foreground">Samuel Eni</p>
              <p className="text-sm text-accent">Founder & Executive Marketing Manager</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Leads strategy across every campaign, translating each book's voice into a plan built to turn readers into lifelong fans, hands-on from first consultation to launch day.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-20">
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
      </section>
      <BlueprintBand />
    </>
  );
}
