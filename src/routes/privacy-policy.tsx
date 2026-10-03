import { createFileRoute } from "@tanstack/react-router";
import { CONTACT_EMAIL } from "@/lib/site-data";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Luminary Press" },
      { name: "description", content: "What Luminary Press collects through this website and how it is used." },
      { property: "og:title", content: "Privacy Policy | Luminary Press" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:description", content: "How Luminary Press handles your information." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <article className="mx-auto max-w-3xl space-y-5 px-5 py-16 text-muted-foreground [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:text-foreground">
      <p className="eyebrow">Last updated: October 2026</p>
      <h1 className="text-5xl text-foreground">Privacy Policy</h1>
      <p>This policy describes what Luminary Press collects through this website. We don't run ads, sell data, or use tracking cookies.</p>
      <h2>Information we collect</h2>
      <p>Only what you choose to give us through our forms: your name, email address, book title, book link and message. If you email us directly, we receive whatever you include in that email.</p>
      <h2>How we use it</h2>
      <p>To respond to your enquiry, prepare materials you've requested (such as a free Book Growth Blueprint), send quotes, and improve our services. We never sell, rent or trade your information.</p>
      <h2>Third-party services</h2>
      <p>Form submissions are stored securely with our hosting provider. Fonts are loaded from Google Fonts, which may involve your browser contacting Google's servers.</p>
      <h2>Retention and your rights</h2>
      <p>We keep messages only as long as useful for responding and maintaining business records. You may request access, correction or deletion at any time by emailing {CONTACT_EMAIL}.</p>
      <h2>Children</h2>
      <p>This site is not directed at children and we do not knowingly collect information from anyone under 16.</p>
      <p className="pt-6 text-xs">This document is a general template and does not constitute legal advice.</p>
    </article>
  );
}
