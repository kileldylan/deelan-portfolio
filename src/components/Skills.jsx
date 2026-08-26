import { devops, softSkills, technicalSkills } from "../data";

export default function Skills() {
  return (
    <section id="stack" className="border-b border-line py-16 md:py-24">
      <div className="mx-auto w-[min(1120px,calc(100%-2rem))]">
        <div className="mb-9 flex items-end justify-between gap-4">
          <h2 className="font-serif text-4xl md:text-[42px]">Stack & skills</h2>
          <span className="font-mono text-xs text-muted">03 — tools</span>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-line bg-bg-2 p-6">
            <h3 className="font-mono text-[12px] uppercase tracking-[0.12em] text-accent">Technical</h3>
            <ul className="mt-4">
              {technicalSkills.map((item) => (
                <li key={item} className="border-b border-line py-2 text-[15px] last:border-0">{item}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-line bg-bg-2 p-6">
            <h3 className="font-mono text-[12px] uppercase tracking-[0.12em] text-accent">Deployment & DevOps</h3>
            <div className="mt-4 space-y-4">
              {devops.map((block) => (
                <div key={block.group}>
                  <p className="text-xs text-muted">{block.group}</p>
                  <p className="mt-1 text-[15px]">{block.items.join(" · ")}</p>
                </div>
              ))}
            </div>
          </article>
          <article className="rounded-2xl border border-line bg-bg-2 p-6">
            <h3 className="font-mono text-[12px] uppercase tracking-[0.12em] text-accent">Soft skills</h3>
            <ul className="mt-4">
              {softSkills.map((item) => (
                <li key={item} className="border-b border-line py-2 text-[15px] last:border-0">{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}