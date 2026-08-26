import { useEffect, useState } from "react";

const links = [
  ["Work", "#work"],
  ["About", "#about"],
  ["Stack", "#stack"],
  ["Experience", "#experience"],
  ["Notes", "#notes"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-line transition-colors ${
        scrolled ? "bg-[#07070a]/80 backdrop-blur-xl" : "bg-[#07070a]/40 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 w-[min(1120px,calc(100%-2rem))] items-center justify-between">
        <a href="#top" className="font-mono text-[13px] tracking-[0.16em]">
          DK<span className="text-accent">/</span>26
        </a>
        <nav className="hidden items-center gap-7 text-[13px] text-muted md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-ink">{label}</a>
          ))}
        </nav>
        <a href="#contact" className="hidden rounded-full border border-line px-3.5 py-1.5 text-[13px] hover:border-accent hover:text-accent md:inline-flex">
          Available for roles
        </a>
        <button className="text-xl md:hidden" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <div className="border-t border-line bg-[#0b0b10] px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm text-muted">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}