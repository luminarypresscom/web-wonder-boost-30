import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import library from "@/assets/library.jpg";
import mockups from "@/assets/mockups.jpg";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { BlueprintBand } from "@/components/site/Layout";

export const Route = createFileRoute("/publishing")({
  head: () => ({
    meta: [
      { title: "Hybrid Publishing | Luminary Press" },
      { name: "description", content: "A selective hybrid publishing journey from manuscript review and editing to design, production, publication and launch." },
      { property: "og:title", content: "Hybrid Publishing | Luminary Press" },
      { property: "og:description", content: "Bring your manuscript to market with an author-focused publishing and growth partner." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Publishing,
});

const stages = [
  ["Manuscript review", "We begin with your work, its audience, its promise and what it needs to become publication-ready."],
  ["Editorial development", "The right editorial path is shaped around your manuscript, from structural guidance to final language refinement."],
  ["Book design", "Cover, typography, interior layout and digital formats are developed as one coherent reading experience."],
  ["Production", "Publication details and production requirements are prepared carefully for the formats agreed in your proposal."],
  ["Publication", "Your book moves toward publication with responsibilities, deliverables and decisions documented before work begins."],
  ["Market launch", "Positioning, author presence, outreach and reader discovery connect the finished book to its intended audience."],
];

const principles = [
  "Every manuscript is reviewed before a publishing proposal is offered.",
  "Scope, costs, deliverables and responsibilities are agreed in writing.",
  "Editorial and design decisions protect the author's voice and the reader's experience.",
  "Publishing and marketing are planned together, not treated as separate afterthoughts.",
];

function Publishing() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <img src={library} alt="Books in a library" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-32">
          <p className="eyebrow">Selective hybrid publishing</p>
          <h1 className="mt-5 max-w-4xl text-5xl leading-[1.02] text-foreground md:text-7xl">
            From <em className="text-accent">manuscript</em> to market.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A complete, carefully directed publishing journey for authors whose work and ambitions align with ours.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#submit" className="shadow-offset rounded-md bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground">
              Submit for review
            </a>
            <Link to="/blueprint" className="rounded-md border border-input px-6 py-3.5 text-sm font-bold text-foreground hover:bg-secondary">
              Get the free Blueprint
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:items-start">
        <div>
          <p className="eyebrow">The Luminary model</p>
          <h2 className="mt-3 text-4xl text-foreground">Selective by design. Complete by nature.</h2>
        </div>
        <div className="space-y-5 text-muted-foreground">
          <p><strong className="text-foreground">Curated publishing.</strong> We review each manuscript before proposing a path, giving accepted projects thoughtful editorial and creative attention.</p>
          <p><strong className="text-foreground">Strategic growth.</strong> The reader, market position and author platform inform the book from the beginning, not only after publication.</p>
        </div>
      </section>

      <section className="border-y border-border bg-ink-deep">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow">The publishing journey</p>
          <h2 className="mt-3 max-w-3xl text-4xl text-foreground">One considered path, from first review to reader discovery.</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stages.map(([title, description], index) => (
              <li key={title} className="rounded-xl border border-border bg-card p-6">
                <p className="font-serif text-4xl text-primary">0{index + 1}</p>
                <h3 className="mt-3 text-2xl text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:items-center">
        <img src={mockups} alt="Luminary Press book design mockups" loading="lazy" className="w-full rounded-xl object-cover shadow-offset" />
        <div>
          <p className="eyebrow">A transparent partnership</p>
          <h2 className="mt-3 text-4xl text-foreground">Know what the partnership means before it begins.</h2>
          <ul className="mt-8 space-y-4">
            {principles.map((principle) => (
              <li key={principle} className="flex gap-3 text-muted-foreground">
                <Check className="mt-1 shrink-0 text-accent" size={18} />
                {principle}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="submit" className="scroll-mt-24 border-t border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2">
          <div>
            <p className="eyebrow">Manuscript review</p>
            <h2 className="mt-3 text-4xl text-foreground">Start with the story.</h2>
            <p className="mt-4 text-muted-foreground">
              Tell us what you have written, where it is in the process and what you hope to achieve. A submission begins a review, not an automatic acceptance or contract.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-background p-6 md:p-8">
            <EnquiryForm kind="manuscript" />
          </div>
        </div>
      </section>
      <BlueprintBand />
    </>
  );
}