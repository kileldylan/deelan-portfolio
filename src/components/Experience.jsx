import { useEffect, useRef, useState } from "react";

const aci = {
  period: "2026",
  title: "ACI — Delivery verification",
  org: "Independent product",
  href: "https://github.com/kileldylan/OnSpec",
  summary:
    "Evidence-first verification layer that answers whether a pull request actually delivered the requirement.",
  points: [
    "Links Jira / Linear / GitHub requirements to PRs and changed files.",
    "Builds an evidence pack from code, CI, tests, and commit SHAs.",
    "Marks delivery verified, partial, failed, or stale with a full decision history.",
  ],
  stack: ["Django", "GitHub webhooks", "Jira", "LLM evaluator", "Vite"],
};

const jobs = [
  {
    id: "branchi",
    period: "2025",
    title: "Branchi Arts",
    org: "E-commerce",
    href: "https://branchiarts.vercel.app/",
    summary:
      "Storefront platform so independent artists can launch and run their own shops.",
    points: [
      "Artist-facing catalog, cart, and checkout flow.",
      "Django + DRF API with Supabase data and Redis for hot paths.",
      "Shipped the frontend on Vercel.",
    ],
    stack: ["React", "Python", "Django", "DRF", "Supabase", "Redis", "Vercel"],
  },
  {
    id: "afrinet",
    period: "2025",
    title: "Afrinet Billing",
    org: "Wi-Fi ops",
    href: "https://afrinet-project.vercel.app/",
    summary:
      "Billing system for invoice generation, payment tracking, and financial reporting.",
    points: [
      "Automated invoices instead of manual spreadsheet billing.",
      "Payment status and reporting for operators.",
      "React client on Vercel, API and MySQL on Render.",
    ],
    stack: ["Python", "React", "DRF", "MySQL", "Render", "Vercel"],
  },
  {
    id: "eventpro",
    period: "2024 — 2025",
    title: "EventPro",
    org: "Events",
    href: "https://github.com/kileldylan/EventPro",
    summary:
      "Create, organize, and track events in real time — management plus ticketing.",
    points: [
      "Designed the product surface in Figma first.",
      "React + Node/Express with MySQL for event records.",
      "Organizer flow for creating and following live events.",
    ],
    stack: ["React", "Node.js", "Express.js", "MySQL", "Figma"],
  },
  {
    id: "deevent",
    period: "2025",
    title: "DeEvent",
    org: "SaaS",
    href: "https://github.com/kileldylan/DeEvent",
    summary:
      "SaaS for event organizing, ticketing, payments, and artist revenue.",
    points: [
      "Multi-tenant org and event model in Django.",
      "Ticketing and payment modules.",
      "Aimed at organizers who also need artist payouts.",
    ],
    stack: ["Django", "Python", "Payments"],
  },
  {
    id: "greenbin",
    period: "2024",
    title: "Greenbin IQ",
    org: "IoT / ops",
    href: null,
    summary:
      "IoT-driven waste operations — classify, route, and act on real collection data.",
    points: [
      "Moved collection decisions off guesswork onto incoming sensor/ops data.",
      "Classification and routing as the core loop.",
      "API layer for downstream collection teams.",
    ],
    stack: ["Python", "IoT", "APIs"],
  },
  {
    id: "auto",
    period: "2024",
    title: "Automotive commerce",
    org: "Commerce",
    href: null,
    summary: "Dynamic vehicle storefront — catalog, browse, convert.",
    points: [
      "Inventory-led product pages instead of a static brochure site.",
      "Browse and conversion flow for automotive listings.",
    ],
    stack: ["Full-stack", "Commerce"],
  },
  {
    id: "cloudhaven",
    period: "2024",
    title: "CloudHaven",
    org: "SaaS",
    href: null,
    summary: "SaaS product surface designed and built end-to-end for cloud workflows.",
    points: [
      "Owned the product surface, not just a feature slice.",
      "Full-stack SaaS structure for cloud workflows.",
    ],
    stack: ["SaaS", "Full-stack"],
  },
];

export default function Experience() {
  const [active, setActive] = useState(jobs[0].id);
  const [autoplay, setAutoplay] = useState(true);
  const activeRef = useRef(active);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    if (!autoplay) return undefined;

    const timer = setInterval(() => {
      const index = jobs.findIndex((job) => job.id === activeRef.current);
      const next = jobs[(index + 1) % jobs.length];
      setActive(next.id);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoplay]);

  function selectTab(id) {
    setActive(id);
    setAutoplay(false);
  }

  const current = jobs.find((job) => job.id === active) ?? jobs[0];

  return (
    <section id="experience" className="border-b border-line py-16 md:py-24">
      <div className="mx-auto w-[min(1120px,calc(100%-2rem))]">
        <div className="mb-9 flex items-end justify-between gap-4">
          <h2 className="font-serif text-4xl md:text-[42px]">Experience</h2>
          <span className="font-mono text-xs text-muted">04 — timeline</span>
        </div>

        <article className="grid gap-8 rounded-3xl border border-line bg-bg-2 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-8">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
              Current · {aci.period}
            </p>
            <h3 className="mt-2 text-3xl font-medium">{aci.title}</h3>
            <p className="mt-1 text-sm text-muted">{aci.org}</p>
            <p className="mt-4 text-[#cfcabf]">{aci.summary}</p>
            <ul className="mt-4 space-y-2 text-[#cfcabf]">
              {aci.points.map((point) => (
                <li key={point} className="border-l border-accent/40 pl-4">
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {aci.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line px-2.5 py-1 text-xs text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
            <a
              href={aci.href}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full border border-line px-4 py-2 text-sm hover:border-white"
            >
              View repository →
            </a>
          </div>

          <div className="rounded-2xl border border-line bg-[#101018] p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
              What shipped
            </p>
            <p className="mt-4 text-2xl leading-snug">
              Requirement → criteria → evidence → decision
            </p>
            <p className="mt-3 text-muted">
              Built as a real product surface, not a demo. This is the work I want next roles to see first.
            </p>
          </div>
        </article>

        <div className="mt-14">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h3 className="font-serif text-3xl">2024 — 2026</h3>
            <p className="font-mono text-xs text-muted">
              {autoplay ? "Auto-rotating" : "Locked to your pick"}
            </p>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {jobs.map((job) => {
              const on = job.id === active;
              return (
                <button
                  key={job.id}
                  type="button"
                  onClick={() => selectTab(job.id)}
                  className={`relative shrink-0 overflow-hidden rounded-full border px-4 py-2 text-sm transition ${
                    on
                      ? "border-accent bg-accent text-[#111]"
                      : "border-line text-muted hover:border-white hover:text-ink"
                  }`}
                >
                  {on && autoplay && (
                    <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left animate-[grow_5s_linear] bg-[#111]/40" />
                  )}
                  {job.title}
                </button>
              );
            })}
          </div>

          <article
            key={current.id}
            className="mt-6 grid gap-8 rounded-3xl border border-line bg-bg-2 p-6 md:grid-cols-[200px_1fr] md:p-8"
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                {current.period}
              </p>
              <p className="mt-3 text-sm text-muted">{current.org}</p>
            </div>
            <div>
              <h4 className="text-2xl font-medium">{current.title}</h4>
              <p className="mt-3 max-w-[60ch] text-[#cfcabf]">{current.summary}</p>
              <ul className="mt-5 space-y-2 text-[#cfcabf]">
                {current.points.map((point) => (
                  <li key={point} className="border-l border-line pl-4">
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {current.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line px-2.5 py-1 text-xs text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
              {current.href && (
                <a
                  href={current.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex text-sm text-accent hover:underline"
                >
                  Open project →
                </a>
              )}
            </div>
          </article>
        </div>
      </div>

      <style>{`
        @keyframes grow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
}