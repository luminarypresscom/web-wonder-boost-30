import promo from "@/assets/promo.jpg";
import social from "@/assets/social.jpg";
import shelf from "@/assets/shelf.jpg";
import reader from "@/assets/reader.jpg";
import cover from "@/assets/cover-last-ember.jpg";
import mockups from "@/assets/mockups.jpg";
import websites from "@/assets/service-websites.jpg";
import trailers from "@/assets/service-trailers.jpg";
import { plans } from "@/lib/site-data";

// Reuse the pricing wording so package inclusions stay consistent on both pages.
function packageFeatures(planId: string, indexes: number[]) {
  const plan = plans.find((item) => item.id === planId);
  if (!plan) return [];
  return indexes.flatMap((index) => {
    const feature = plan.features[index];
    return feature ? [feature] : [];
  });
}

export const services = [
  {
    img: promo,
    alt: "Author promotion materials",
    title: "Author Promotion",
    description: "We build your author brand from the ground up, positioning you in your genre. From press outreach and media placements to interview coaching and long-term reputation strategy, we connect readers with the mind behind the book.",
    features: ["Brand identity", "Media outreach and press strategy", "Interview coaching"],
  },
  {
    img: social,
    alt: "Social media content for book promotion",
    title: "Social Media Marketing",
    description: "Platform-native content that builds genuine, lasting readership. We manage your presence across Instagram, TikTok, X and LinkedIn, bringing your book's voice to BookTok and Bookstagram and nurturing reader communities.",
    features: ["Content strategy", "Community growth", "BookTok and Bookstagram promotion"],
  },
  {
    img: shelf,
    alt: "Books arranged on shelves",
    title: "Amazon Listing & Promotion",
    description: "Give your book a clearer position on Amazon with focused listing optimization and a promotional plan built around pricing and timing. We work on the discovery details that help your book reach relevant readers.",
    features: [...packageFeatures("startup", [0]), ...packageFeatures("growth", [0])],
  },
  {
    img: reader,
    alt: "A reader discovering a book",
    title: "Goodreads & Book Club Promotion",
    description: "Put your book into the conversations where readers discover their next read. From your Goodreads profile and shelf positioning to reading lists, groups and book club outreach, we shape a community-focused discovery plan.",
    features: [...packageFeatures("startup", [1]), ...packageFeatures("growth", [1, 2]), ...packageFeatures("signature", [6])],
  },
  {
    img: promo,
    alt: "Book publicity and outreach materials",
    title: "Reader & Blogger Outreach",
    description: "Reach relevant readers and bloggers with outreach shaped around your book and audience. The sequence can range from a single introduction to a longer follow-up campaign, depending on your package.",
    features: [...packageFeatures("startup", [3]), ...packageFeatures("growth", [5]), ...packageFeatures("signature", [5])],
  },
  {
    img: social,
    alt: "Creative promotional assets for an author campaign",
    title: "Promotional Materials & Copy",
    description: "Bring consistency to every book announcement with visual assets and copy that reflect your story. From blurb refinement and social graphics to teaser copy and email templates, your promotional kit supports a coherent launch.",
    features: [...packageFeatures("startup", [2]), ...packageFeatures("growth", [3])],
  },
  {
    img: cover,
    alt: "The Last Ember book cover design",
    title: "Book Cover Design",
    description: "A first impression built around your story and its readers. We design book covers that communicate genre, mood and identity, with typography and imagery that work together as a distinctive whole.",
    features: ["Cover concept and visual direction", "Genre-focused imagery and typography", "Final formats confirmed with your project scope"],
  },
  {
    img: mockups,
    alt: "Book mockup designs from the Luminary Press portfolio",
    title: "Book Mockup Design",
    description: "Give your book a tangible presence beyond a flat cover. We create book mockups for your author website, promotional graphics and launch materials, presenting your design in polished, realistic settings.",
    features: ["3D book presentations", "Promotional book mockups", "Website and social media visuals"],
  },
  {
    img: trailers,
    alt: "Illustration of a book trailer being edited on a studio monitor",
    title: "Book Trailer Design",
    description: "Introduce your story through motion, atmosphere and a focused creative concept. We design book trailers that bring your book's mood and message together for your launch and promotional channels.",
    features: ["Trailer concept and visual direction", "Video design and editing", "Delivery formats agreed for your promotional channels"],
  },
  {
    img: websites,
    alt: "Illustration of an author website displayed on a laptop",
    title: "Author Website Building",
    description: "Build a dedicated home for your writing, with your biography, book showcase and mailing list signup in one place. Your website presents your author identity clearly and gives readers a lasting connection beyond social media.",
    features: packageFeatures("growth", [4]),
  },
  {
    img: websites,
    alt: "Illustration of an author's book catalog on a website",
    title: "Direct Book Sales Websites",
    description: "Create your own storefront for direct book sales, with order processing, digital delivery and a view of your sales performance. Keep control of your pricing, discounts and data while building a direct relationship with your readers.",
    features: packageFeatures("signature", [0, 1, 2, 4]),
  },
  {
    img: social,
    alt: "Author marketing content and campaign materials",
    title: "Email Marketing Tools",
    description: "Keep your readers connected to your books beyond launch day. Built-in email marketing tools support your author storefront, while campaign email templates are included in the expanded promotional kit.",
    features: packageFeatures("signature", [3]),
  },
  {
    img: promo,
    alt: "Book campaign planning and reporting materials",
    title: "Positioning, Reporting & Campaign Support",
    description: "Understand where your book stands and what to do next. Competitor positioning, delivery recommendations and post-launch reporting give your campaign a clear direction, with priority turnaround included in the Signature package.",
    features: [...packageFeatures("startup", [4]), ...packageFeatures("growth", [6]), ...packageFeatures("signature", [7, 8])],
  },
];