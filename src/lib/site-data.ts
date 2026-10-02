import lastEmber from "@/assets/cover-last-ember.jpg";
import silence from "@/assets/cover-silence.jpg";
import sky from "@/assets/cover-sky.jpg";
import circuit from "@/assets/cover-circuit.jpg";
import orchard from "@/assets/cover-orchard.jpg";
import silenceVariant from "@/assets/cover-silence-variant.jpg";
import silence3d from "@/assets/mock-silence-3d.jpg";
import silenceDesk from "@/assets/mock-silence-desk.jpg";

export const CONTACT_EMAIL = "contact.luminarypress.online@gmail.com";

export const plans = [
  {
    id: "startup",
    name: "Startup Plan",
    price: "$350",
    unit: "/ book",
    blurb: "For debut authors building their first audience.",
    lead: null as string | null,
    features: [
      "Amazon listing optimization (keywords, categories, back-end search terms)",
      "Goodreads profile & shelf positioning",
      "Basic promotional materials (1–2 social graphics, blurb refinement)",
      "Single-touch outreach to relevant readers and bloggers",
      "Delivery summary with next-step recommendations",
    ],
  },
  {
    id: "growth",
    name: "Growth Plan",
    price: "$1,750",
    unit: "/ campaign",
    blurb: "Our most-booked package for a full launch cycle.",
    lead: "Everything in Startup, plus:",
    popular: true,
    features: [
      "Amazon promotional push (pricing and timing strategy)",
      "Goodreads community promotion (shelves, groups, reading lists)",
      "Book club promotion outreach",
      "Expanded promo kit (graphics, teaser copy, email templates)",
      "Author website build (bio, book showcase, mailing list signup)",
      "Multi-touch outreach sequence (initial + 2 follow-ups)",
      "Full competitor positioning report",
    ],
  },
  {
    id: "signature",
    name: "Signature Plan",
    price: "$3,400",
    unit: "",
    blurb: "End-to-end brand building for established authors.",
    lead: "Everything in Growth, plus:",
    features: [
      "Custom author sales website, your own storefront for direct book sales",
      "Built-in order processing and digital delivery",
      "Sales dashboard with revenue, traffic and conversion tracking",
      "Built-in email marketing tools",
      "Full ownership of pricing, discounts and data",
      "Extended outreach sequence (4–5 touches)",
      "Ongoing book club & Goodreads community management",
      "Priority turnaround on all deliverables",
      "30-day post-launch check-in with performance report",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Luminary Press didn't just market my book. They built me an audience I'll carry into every book I write. My book hit a regional bestseller list I never dreamed of reaching.",
    name: "Adaeze Okonkwo",
    role: 'Author, "The Weight of Seasons"',
  },
  {
    quote:
      "The strategy they built for my debut launch was unlike anything I had seen in publishing. Professional, deeply personal, and results-driven from the very first session.",
    name: "Marcus Reid",
    role: "Debut Novelist",
  },
  {
    quote:
      "They understood my genre, my voice, and exactly who my readers are. My BookTok presence went from zero to a thriving, engaged community in just 60 days.",
    name: "Fatima Al-Hassan",
    role: "Romance Author",
  },
];

export const covers = [
  { src: lastEmber, title: "The Last Ember", kind: "Cover" },
  { src: silence, title: "Silence", kind: "Cover" },
  { src: sky, title: "When the Sky Forgets", kind: "Cover" },
  { src: circuit, title: "Circuit of Lies", kind: "Cover" },
  { src: orchard, title: "The Orchard House Murders", kind: "Cover" },
  { src: silenceVariant, title: "Silence: Variant", kind: "Cover" },
  { src: silence3d, title: "Silence: 3D Mockup", kind: "Mockup" },
  { src: silenceDesk, title: "Silence: Desk Mockup", kind: "Mockup" },
];

export const faqs = [
  {
    q: "Do you work with self-published authors?",
    a: "Yes. We work with self-published, hybrid, and traditionally published authors alike.",
  },
  {
    q: "What genres do you work with?",
    a: "We've worked across fiction, romance, thrillers and a range of debut and established genres. Every strategy is built around your specific readers.",
  },
  {
    q: "How long does a typical campaign take?",
    a: "Timelines are built around your launch date during the consultation. Some authors start months ahead, others closer to launch.",
  },
  {
    q: "How much does it cost?",
    a: "Packages start at $350, with Growth at $1,750 and Signature at $3,400. See the Pricing page for what's included in each.",
  },
  {
    q: "Do you design book covers too?",
    a: "Yes. Cover design is part of our creative work. You can see examples in our portfolio.",
  },
  {
    q: "Is the Growth Blueprint really free?",
    a: "Yes. There is no cost and no obligation. It is a genuine look at where your book stands and what to do next.",
  },
];

export const blueprintItems = [
  ["What's already working", "A clear read on your book's real strengths: author credibility, reviews, and category fit."],
  ["Current challenges", "An honest look at what's limiting discovery right now: pricing, positioning, or simply being unseen."],
  ["Your ideal reader profile", "Who your book is actually for, and who it could reach with the right positioning."],
  ["Biggest opportunity", "The single highest-leverage move available for your book right now. No generic checklist."],
  ["A 30-day growth plan", "A realistic, week-by-week outline of what to do next, and in what order."],
  ["Community discovery plan", "Specific, real channels and communities where your readers already are."],
];
