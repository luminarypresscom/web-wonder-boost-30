import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { plans } from "@/lib/site-data";
import { PageIntro, BlueprintBand } from "@/components/site/Layout";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Book Marketing Packages | Luminary Press" },
      { name: "description", content: "Startup $350, Growth $1,750, Signature $3,400. Clear book marketing packages so you know what's included." },
      { property: "og:title", content: "Book Marketing Packages — Luminary Press" },
      { property: "og:description", content: "Startup, Growth and Signature plans for every stage of your author career." },
    ],
  }),
  component: Pricing,
});

function Pricing() {
  return (
    <>
      <PageIntro eyebrow="Packages" title="Campaigns built to fit your launch.">
        Straightforward packages so you know exactly what's included. Final scope is confirmed with you before any work begins.
      </PageIntro>
      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-20 lg:grid-cols-3">
        {plans.map((p) => (
          <article
            key={p.id}
            className={`flex flex-col rounded-xl border bg-card p-7 ${p.popular ? "border-primary shadow-offset" : "border-border"}`}
          >
            {p.popular && <p className="eyebrow mb-3">Most popular</p>}
            <h2 className="text-2xl text-foreground">{p.name}</h2>
            <p className="mt-4">
              <span className="font-serif text-5xl text-foreground">{p.price}</span>
              <span className="ml-1 text-sm text-muted-foreground">{p.unit}</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>
            {p.lead && <p className="mt-6 text-sm font-bold text-accent">{p.lead}</p>}
            <ul className={`${p.lead ? "mt-3" : "mt-6"} flex-1 space-y-3`}>
              {p.features.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-foreground">
                  <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                  {f}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              search={{ plan: p.id }}
              className={`mt-8 rounded-md px-5 py-3 text-center text-sm font-bold ${p.popular ? "bg-primary text-primary-foreground" : "border border-input text-foreground hover:bg-secondary"}`}
            >
              Get a quote
            </Link>
          </article>
        ))}
      </section>
      <p className="mx-auto -mt-8 max-w-6xl px-5 pb-20 text-center text-muted-foreground">
        Need something more tailored?{" "}
        <Link to="/contact" className="font-bold text-accent hover:underline">Tell us about your launch</Link> and we'll build a custom plan.
      </p>
      <BlueprintBand />
    </>
  );
}
