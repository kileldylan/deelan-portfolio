import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="notes" className="border-b border-line py-16 md:py-24">
      <div className="mx-auto w-[min(1120px,calc(100%-2rem))]">
        <div className="mb-9 flex items-end justify-between gap-4">
          <h2 className="font-serif text-4xl md:text-[42px]">Notes from collaborators</h2>
          <span className="font-mono text-xs text-muted">05 — social proof</span>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="rounded-2xl border border-line bg-bg-2 p-6 text-[16px] font-light text-[#ddd8ce]">
              “{item.quote}”
              <footer className="mt-5 text-[13px] text-muted">— {item.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}