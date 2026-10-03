import { createFileRoute } from "@tanstack/react-router";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { blueprintItems } from "@/lib/site-data";

export const Route = createFileRoute("/blueprint")({
  head: () => ({
    meta: [
      { title: "Free Book Growth Blueprint | Luminary Press" },
      { name: "description", content: "Request a free, no-obligation assessment of your book's discovery signals plus a 30-day growth plan." },
      { property: "og:title", content: "Free Book Growth Blueprint | Luminary Press" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:description", content: "A free assessment of your book and a practical 30-day growth plan." },
    ],
  }),
  component: Blueprint,
});

function Blueprint() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1fr_1.1fr] md:py-24">
      <div>
        <p className="eyebrow">Free · No obligation</p>
        <h1 className="mt-4 text-4xl leading-[1.05] text-foreground md:text-6xl">Get a free Book Growth Blueprint</h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Before you spend a dollar with us, see exactly where your book stands. Here's what you'll receive:
        </p>
        <ul className="mt-8 space-y-4">
          {blueprintItems.map(([t, d]) => (
            <li key={t} className="border-l-2 border-primary pl-4">
              <p className="font-semibold text-foreground">{t}</p>
              <p className="text-sm text-muted-foreground">{d}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-fit rounded-xl border border-border bg-card p-6 md:sticky md:top-24 md:p-8">
        <h2 className="text-2xl text-foreground">Tell us about your book</h2>
        <p className="mb-6 mt-1 text-sm text-muted-foreground">Takes about 2 minutes.</p>
        <EnquiryForm kind="blueprint" />
      </div>
    </section>
  );
}
