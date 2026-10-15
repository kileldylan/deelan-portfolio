import { featured, profile } from "../data";

export default function Hero() {
  return (
    <section id="top" className="grid-bg relative overflow-hidden border-b border-line">
      <div className="mx-auto grid w-[min(1120px,calc(100%-2rem))] gap-12 py-16 md:grid-cols-[1.15fr_0.85fr] md:items-end md:py-24">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            {profile.title} · {profile.location}
          </p>
          <h1 className="mt-4 whitespace-nowrap font-serif text-[clamp(3rem,8vw,6.6rem)] leading-none tracking-[-0.04em]">
            Deelan Kilel
          </h1>
          <p className="mt-6 max-w-[34ch] text-lg font-light text-[#d8d4cb] md:text-xl">
            I build the engines that power great user experiences — and the proof that the work was actually delivered.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-[#111]">See the work</a>
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="rounded-full border border-line px-5 py-2.5 text-sm hover:border-white">GitHub</a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-line px-5 py-2.5 text-sm hover:border-white">LinkedIn</a>
            <a href="/Deelan_Kipkorir_Kilel_CV.pdf" download="Deelan-Kilel-CV.pdf" className="rounded-full border border-line px-5 py-2.5 text-sm hover:border-accent hover:text-accent">Download CV</a>
          </div>
        </div>
        <aside className="rounded-2xl border border-line bg-gradient-to-b from-[#16161f] to-[#0c0c12] p-5 shadow-[0_30px_80px_rgba(0,0,0,.35)]">
          <div className="mb-5 flex items-start justify-between">
            <div>
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-[#1c1733] text-sm font-semibold text-violet">ACI</div>
              <p className="mt-3 text-[13px] text-muted">Did the PR actually deliver the requirement?</p>
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">New · {featured.year}</span>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {[
              ["Evidence", "Code · CI · tests · SHA"],
              ["States", "Verified / partial / stale"],
              ["Sources", "Jira · Linear · GitHub"],
              ["Trail", "Decision history kept"],
            ].map(([title, note]) => (
              <div key={title} className="rounded-xl border border-line bg-[#101018] p-3">
                <b className="block text-[15px] font-medium">{title}</b>
                <span className="text-[12px] text-muted">{note}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}