import { Mail } from "lucide-react";
import { ALL_EMAILS } from "@/lib/site-data";

export function EmailContacts({ subject, tone = "default" }: { subject?: string; tone?: "default" | "onPrimary" }) {
  const text = tone === "onPrimary" ? "text-primary-foreground" : "text-foreground";
  const href = (e: string) => `mailto:${e}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
  return (
    <ul className="space-y-3">
      {ALL_EMAILS.map((e) => (
        <li key={e}>
          <a href={href(e)} className={`flex items-center gap-3 break-all font-semibold ${text} hover:underline`}>
            <Mail size={18} className="shrink-0 opacity-80" />
            {e}
          </a>
        </li>
      ))}
    </ul>
  );
}
