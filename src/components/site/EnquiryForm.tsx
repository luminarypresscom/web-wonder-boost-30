import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { CONTACT_EMAIL, plans } from "@/lib/site-data";

type Kind = "blueprint" | "contact" | "quote";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  book_title: z.string().trim().max(200).optional(),
  book_link: z.string().trim().max(500).optional(),
  plan: z.string().trim().max(50).optional(),
  message: z.string().trim().max(2000).optional(),
});

const field =
  "w-full rounded-md border border-input bg-ink-deep px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/40";

export function EnquiryForm({ kind, defaultPlan }: { kind: Kind; defaultPlan?: string | undefined }) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(
      [...fd.entries()].map(([k, v]) => [k, String(v) || undefined]),
    );
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      return;
    }
    if (kind === "contact" && !parsed.data.message) {
      setErrors({ message: "Please write a short message" });
      return;
    }
    setErrors({});
    setStatus("sending");
    const d = parsed.data;
    const { error } = await supabase.from("enquiries").insert({
      kind,
      name: d.name,
      email: d.email,
      book_title: d.book_title ?? null,
      book_link: d.book_link ?? null,
      plan: d.plan ?? null,
      message: d.message ?? null,
    });
    setStatus(error ? "error" : "done");
  }

  if (status === "done") {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center">
        <p className="eyebrow">Received</p>
        <h3 className="mt-3 text-2xl text-foreground">Thank you — we've got it.</h3>
        <p className="mt-3 text-muted-foreground">
          {kind === "blueprint"
            ? "We'll prepare your Book Growth Blueprint and email it to you, usually within a few days."
            : "We typically reply within one working day."}
        </p>
      </div>
    );
  }

  const err = (k: string) =>
    errors[k] ? <p className="mt-1 text-xs text-destructive">{errors[k]}</p> : null;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1.5 block font-semibold">Your name</span>
          <input name="name" className={field} autoComplete="name" />
          {err("name")}
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-semibold">Email</span>
          <input name="email" type="email" className={field} autoComplete="email" />
          {err("email")}
        </label>
      </div>
      <label className="block text-sm">
        <span className="mb-1.5 block font-semibold">
          Book title {kind === "contact" && <span className="text-muted-foreground">(optional)</span>}
        </span>
        <input name="book_title" className={field} />
      </label>
      {kind === "blueprint" && (
        <label className="block text-sm">
          <span className="mb-1.5 block font-semibold">
            Where is it listed? <span className="text-muted-foreground">(Amazon or Goodreads link)</span>
          </span>
          <input name="book_link" className={field} placeholder="https://" />
        </label>
      )}
      {kind === "quote" && (
        <label className="block text-sm">
          <span className="mb-1.5 block font-semibold">Package</span>
          <select name="plan" defaultValue={defaultPlan ?? "growth"} className={field}>
            {plans.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} — {p.price}
              </option>
            ))}
            <option value="custom">Something custom</option>
          </select>
        </label>
      )}
      <label className="block text-sm">
        <span className="mb-1.5 block font-semibold">
          {kind === "blueprint" ? "Biggest challenge right now" : "Message"}
          {kind !== "contact" && <span className="text-muted-foreground"> (optional)</span>}
        </span>
        <textarea name="message" rows={4} className={field} />
        {err("message")}
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="shadow-offset w-full rounded-md bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition hover:translate-x-0.5 hover:translate-y-0.5 disabled:opacity-60 sm:w-auto"
      >
        {status === "sending"
          ? "Sending…"
          : kind === "blueprint"
            ? "Get my free Blueprint"
            : kind === "quote"
              ? "Request a quote"
              : "Send message"}
      </button>
      {status === "error" && (
        <p className="text-sm text-destructive">
          Something went wrong. Please try again or email us at {CONTACT_EMAIL}.
        </p>
      )}
    </form>
  );
}
