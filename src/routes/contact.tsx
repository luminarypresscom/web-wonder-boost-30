import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { PageIntro } from "@/components/site/Layout";
import { CONTACT_EMAIL, faqs } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  validateSearch: z.object({ plan: z.string().optional() }),
  head: () => ({
    meta: [
      { title: "Contact & FAQ | Luminary Press" },
      { name: "description", content: "Ask a question or request a quote for your book marketing campaign. Answers to common questions included." },
      { property: "og:title", content: "Contact Luminary Press" },
      { property: "og:description", content: "Request a quote or ask us anything about marketing your book." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { plan } = Route.useSearch();
  return (
    <>
      <PageIntro eyebrow="Get in touch" title="Let's talk about your book.">
        Send a message or request a quote. It comes straight to our inbox. Prefer email? Write to{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="break-all text-accent hover:underline">{CONTACT_EMAIL}</a>.
      </PageIntro>
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2">
        <div className="h-fit rounded-xl border border-border bg-card p-6 md:p-8">
          <h2 className="mb-6 text-2xl text-foreground">{plan ? "Request a quote" : "Send us a message"}</h2>
          <EnquiryForm kind={plan ? "quote" : "contact"} defaultPlan={plan} />
        </div>
        <div>
          <p className="eyebrow">Questions</p>
          <h2 className="mt-3 text-3xl text-foreground">Frequently asked</h2>
          <div className="mt-6 divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground">
                  {f.q}
                  <span className="text-accent transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
