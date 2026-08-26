import { useState } from "react";
import { profile } from "../data";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    const subject = encodeURIComponent(`Portfolio note from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
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
          <button className="rounded-full bg-accent px-5 py-3 text-sm font-medium text-[#111]">
            {sent ? "Opening your mail app…" : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}