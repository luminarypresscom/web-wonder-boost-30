import { createFileRoute } from "@tanstack/react-router";
import { CONTACT_EMAIL } from "@/lib/site-data";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Luminary Press" },
      { name: "description", content: "Terms for using the Luminary Press website and booking our services." },
      { property: "og:title", content: "Terms of Service | Luminary Press" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:description", content: "The terms that apply to our website and services." },
    ],
  }),
  component: Terms,
});

const sections: [string, string][] = [
  ["Agreement", "By using this website you agree to these terms. If you don't agree, please don't use the site."],
  ["Our services", "Luminary Press provides book marketing and author promotion services. Package pricing shown reflects our standard offerings; final scope and pricing are confirmed with you before work begins."],
  ["Free consultations & Blueprint", "Free consultations and the Book Growth Blueprint are offered at our discretion, without obligation on either side, and do not create a binding agreement for paid services."],
  ["Using this website", "Don't use the site unlawfully, attempt unauthorized access, submit false or malicious content, or scrape its content without permission."],
  ["Intellectual property", "Site content and branding belong to Luminary Press. Book covers and author materials remain the property of their authors and are shown with permission."],
  ["Client ownership", "Unless agreed otherwise in writing, you keep full ownership of your author brand, accounts, website and promotional content. We take no share of royalties or authorship."],
  ["No guarantee of results", "Marketing outcomes depend on factors outside our control. We do not guarantee specific sales, rankings or results."],
  ["Payment", "Payment terms are confirmed directly with clients. This website does not process payments."],
  ["Limitation of liability", "To the fullest extent permitted by law, Luminary Press is not liable for indirect, incidental or consequential damages."],
  ["Changes", "We may update these terms. Continued use of the site means you accept the updated terms."],
];

function Terms() {
  return (
    <article className="mx-auto max-w-3xl space-y-5 px-5 py-16 text-muted-foreground">
      <p className="eyebrow">Last updated: October 2026</p>
      <h1 className="text-5xl text-foreground">Terms of Service</h1>
      {sections.map(([h, p]) => (
        <section key={h}>
          <h2 className="mt-8 text-2xl text-foreground">{h}</h2>
          <p className="mt-2">{p}</p>
        </section>
      ))}
      <p className="pt-6">Questions? Email {CONTACT_EMAIL}.</p>
      <p className="text-xs">This document is a general template and does not constitute legal advice.</p>
    </article>
  );
}
