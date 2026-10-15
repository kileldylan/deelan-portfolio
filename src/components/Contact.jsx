import { useState } from "react";
import { profile } from "../data";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    setSending(true);
    setError("");
    setSent(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Could not send your message.");
      }

      setSent(true);
      form.reset();
    } catch (submitError) {
      setError(submitError.message || "Could not send your message. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto grid w-[min(1120px,calc(100%-2rem))] gap-10 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs text-muted">06 — contact</p>
          <h2 className="mt-3 font-serif text-4xl md:text-[42px]">Let&apos;s build something that ships.</h2>
          <p className="mt-4 max-w-[36ch] text-[#cfcabf]">
            Roles, collaborations, or a product that needs a backend that holds. Write directly.
          </p>
          <a href={`mailto:${profile.email}`} className="mt-6 inline-block text-2xl hover:text-accent">
            {profile.email}
          </a>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:text-ink">GitHub</a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink">LinkedIn</a>
            <a href={profile.socials.x} target="_blank" rel="noreferrer" className="hover:text-ink">X</a>
          </div>
        </div>
        <form onSubmit={onSubmit} className="grid gap-3">
          <input required name="name" placeholder="Name" className="rounded-xl border border-line bg-[#101018] px-3.5 py-3 outline-none focus:border-accent" />
          <input required type="email" name="email" placeholder="Email" className="rounded-xl border border-line bg-[#101018] px-3.5 py-3 outline-none focus:border-accent" />
          <textarea required name="message" placeholder="What should we build?" className="min-h-32 resize-y rounded-xl border border-line bg-[#101018] px-3.5 py-3 outline-none focus:border-accent" />
          <button disabled={sending} className="rounded-full bg-accent px-5 py-3 text-sm font-medium text-[#111] disabled:cursor-wait disabled:opacity-60">
            {sending ? "Sending…" : sent ? "Message sent" : "Send message"}
          </button>
          <p aria-live="polite" className="text-sm text-muted">
            {sent && "Thanks — your message has been sent."}
            {error && <span role="alert" className="text-red-400">{error}</span>}
          </p>
        </form>
      </div>
    </section>
  );
}