import { createFileRoute } from "@tanstack/react-router";
import mockups from "@/assets/mockups.jpg";
import { covers } from "@/lib/site-data";
import { PageIntro, BlueprintBand } from "@/components/site/Layout";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Cover Design Portfolio — Luminary Press" },
      { name: "description", content: "Book cover designs and mockups by Luminary Press — thrillers, romance, fantasy and more." },
      { property: "og:title", content: "Cover Design Portfolio — Luminary Press" },
      { property: "og:description", content: "Covers designed to stop the scroll and sell the story." },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <>
      <PageIntro eyebrow="Our craft" title="Cover design portfolio.">
        Every author's first impression — designed to stop the scroll and sell the story before a single page is turned.
      </PageIntro>
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {covers.map((c) => (
            <figure key={c.title}>
              <img src={c.src} alt={c.title} loading="lazy" className="aspect-[5/8] w-full rounded-md object-cover shadow-offset" />
              <figcaption className="mt-4 text-sm">
                <span className="font-semibold text-foreground">{c.title}</span>
                <span className="block text-xs text-muted-foreground">{c.kind}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <img src={mockups} alt="Book mockup designs" loading="lazy" className="mx-auto mt-16 w-full max-w-lg rounded-xl" />
      </section>
      <BlueprintBand />
    </>
  );
}
