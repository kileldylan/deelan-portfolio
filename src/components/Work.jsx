import { featured, projects } from "../data";

export default function Work() {
  return (
    <section id="work" className="border-b border-line py-16 md:py-24">
      <div className="mx-auto w-[min(1120px,calc(100%-2rem))]">
        <div className="mb-9 flex items-end justify-between gap-4">
          <h2 className="font-serif text-4xl md:text-[42px]">Selected work</h2>
          <span className="font-mono text-xs text-muted">01 — products</span>
        </div>

        <article className="grid gap-8 rounded-3xl border border-line bg-bg-2 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-8">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">Featured · {featured.label}</p>
            <h3 className="mt-2 text-3xl font-medium">{featured.name}</h3>
            <p className="mt-3 text-[#cfcabf]">{featured.problem}</p>
            <p className="mt-3 text-[#cfcabf]">{featured.solution}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {featured.stack.map((s) => (
                <span key={s} className="rounded-full border border-line px-2.5 py-1 text-xs text-muted">{s}</span>
              ))}
            </div>
            <a href={featured.repo} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full border border-line px-4 py-2 text-sm hover:border-white">
              View repository →
            </a>
          </div>
          <div className="rounded-2xl border border-line bg-[#101018] p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">Verification layer</p>
            <p className="mt-4 text-2xl leading-snug">Requirement → criteria → evidence → decision</p>
            <p className="mt-3 text-muted">Not another comment bot. An auditable delivery record your team can still trust later.</p>
          </div>
        </article>

        <div className="mt-4">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.live || project.repo || "#contact"}
              target={project.live || project.repo ? "_blank" : undefined}
              rel="noreferrer"
              className="group grid gap-2 border-b border-line py-7 md:grid-cols-[160px_1fr_auto] md:gap-6"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">{project.tag}</span>
              <div>
                <h3 className="text-xl font-medium group-hover:text-accent md:text-[22px]">{project.name}</h3>
                <p className="mt-1 max-w-[62ch] text-muted">{project.blurb}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((s) => <span key={s} className="text-xs text-muted">{s}</span>)}
                </div>
              </div>
              <span className="text-muted group-hover:text-ink">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}