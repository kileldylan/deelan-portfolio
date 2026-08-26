import { profile } from "../data";

export default function About() {
  return (
    <section id="about" className="border-b border-line py-16 md:py-24">
      <div className="mx-auto grid w-[min(1120px,calc(100%-2rem))] gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="mb-8 flex items-end justify-between">
            <h2 className="font-serif text-4xl md:text-[42px]">About</h2>
            <span className="font-mono text-xs text-muted">02 — profile</span>
          </div>
          <p className="text-lg font-light leading-relaxed text-[#cfcabf] md:text-[19px]">Hi, I&apos;m {profile.name}.</p>
          <p className="mt-4 text-lg font-light leading-relaxed text-[#cfcabf] md:text-[19px]">{profile.intro}</p>
        </div>
        <aside className="h-fit rounded-2xl border border-line bg-bg-2 p-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">Now</p>
          <ul className="mt-4 space-y-3 text-sm text-[#d4d0c6]">
            <li>Building ACI — evidence-backed delivery verification.</li>
            <li>Open to remote engineering roles and serious collaborators.</li>
            <li>Based in Nairobi. Shipping on Vercel, Railway, Render, Supabase.</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}