export const profile = {
  name: "Deelan Kilel",
  role: "Software Engineer",
  location: "Nairobi, Kenya",
  title: "Backend Engineer · Full-stack",
  tagline: "Software Developer | Problem Solver | Tech Enthusiast",
  footerLine: "Passionate about crafting scalable, user-centric software solutions.",
  email: "kileldylan@gmail.com",
  socials: {
    github: "https://github.com/kileldylan",
    linkedin: "https://www.linkedin.com/in/deelan-kilel-4555aa284",
    x: "https://x.com/dylan_kilel",
  },
  intro:
    "I build the engines that power great user experiences. I'm a full-stack developer who bridges the gap between pixel-perfect frontends and robust, scalable backends. With React on one side and Django/Node.js on the other, I architect and deliver complete, data-driven applications that are fast, reliable, and a breeze to use. I'm at my best when I'm tasked with turning a complex technical challenge into a simple, elegant solution.",
};

export const featured = {
  name: "ACI",
  year: "2026",
  label: "Delivery verification",
  live: null,
  repo: "https://github.com/kileldylan/ACI",
  problem:
    "AI review bots are good at bugs and style. They do not prove that a change satisfied the requirement — or leave evidence you can still trust months later.",
  solution:
    "ACI ingests requirements from Jira, Linear, GitHub, or manual entry, decomposes them into criteria, tracks the PR and changed files, collects code/CI/test evidence tied to commit SHAs, runs deterministic rules plus an LLM evaluator, and marks delivery verified, partial, failed, or stale.",
  stack: ["Django", "GitHub webhooks", "Jira", "LLM evaluator", "Vite", "Evidence pipeline"],
};

export const projects = [
  {
    name: "Branchi Arts E-commerce",
    tag: "Commerce",
    blurb: "A dedicated e-commerce platform that enables independent artists to launch their own online storefronts.",
    stack: ["React", "Python", "Django", "DRF", "Supabase", "Redis", "Vercel"],
    live: "https://branchiarts.vercel.app/",
    repo: null,
  },
  {
    name: "Afrinet Wi-Fi Billing System",
    tag: "Billing / ops",
    blurb: "A robust billing management system for automating invoice generation, payment tracking, and financial reporting for businesses.",
    stack: ["Python", "React", "DRF", "Render", "Vercel", "MySQL"],
    live: "https://afrinet-project.vercel.app/",
    repo: null,
  },
  {
    name: "EventPro",
    tag: "Events",
    blurb: "A streamlined event management system for creating, organizing, and tracking events in real time. It is a game changer in events.",
    stack: ["React", "Node.js", "Express.js", "MySQL", "Figma"],
    live: null,
    repo: "https://github.com/kileldylan/EventPro",
  },
  {
    name: "Greenbin IQ",
    tag: "IoT / ops",
    blurb: "IoT-driven waste operations — classify, route, and act on real collection data instead of guesswork.",
    stack: ["Python", "IoT", "APIs"],
    live: null,
    repo: null,
  },
  {
    name: "Automotive commerce",
    tag: "Commerce",
    blurb: "Dynamic e-commerce automotive website for browsing and converting vehicle inventory.",
    stack: ["Full-stack", "Commerce"],
    live: null,
    repo: null,
  },
  {
    name: "CloudHaven",
    tag: "SaaS",
    blurb: "SaaS product surface designed and built end-to-end for cloud workflows.",
    stack: ["SaaS", "Full-stack"],
    live: null,
    repo: null,
  },
  {
    name: "DeEvent",
    tag: "SaaS",
    blurb: "SaaS platform to manage event organizing, ticketing, payments, and artist revenue.",
    stack: ["Django", "Python", "Payments"],
    live: null,
    repo: "https://github.com/kileldylan/DeEvent",
  },
];

export const technicalSkills = [
  "React", "Python", "Django", "Node.js", "Express.js", "MySQL",
  "Flutter", "Material-UI", "API Design", "Figma", "Blockchain Programming", "RESTful APIs",
];

export const devops = [
  { group: "Version control", items: ["Git", "GitHub"] },
  { group: "Hosting", items: ["Vercel", "Railway", "Render", "Supabase"] },
  { group: "API testing", items: ["Postman"] },
  { group: "CI / CD", items: ["Railway CLI", "Heroku CLI", "PythonAnywhere", "Vercel Deployments"] },
  { group: "Databases", items: ["Supabase", "Railway PostgreSQL", "ClearDB / PostgreSQL on Render"] },
];

export const softSkills = [
  "Team Collaboration", "Critical Thinking", "Adaptability", "Problem-Solving",
  "Time Management", "Client Communication", "Project Management", "Creative Thinking",
];

export const experience = [
  {
    period: "2026",
    title: "ACI — Delivery verification",
    org: "Independent product",
    points: [
      "Designed an evidence-first verification layer that answers whether a PR actually delivered the requirement.",
      "Connected requirements, criteria, pull requests, CI, tests, and commit SHAs into an auditable decision history.",
    ],
  },
  {
    period: "2024 — 2026",
    title: "Full-stack product work",
    org: "Selected builds",
    points: [
      "Shipped Branchi Arts, an artist storefront platform on React, Django, DRF, Supabase, and Redis.",
      "Built Afrinet, a Wi-Fi billing system covering invoices, payments, and financial reporting.",
      "Designed EventPro in Figma and implemented real-time event creation and tracking with React and Node.",
      "Explored IoT waste ops with Greenbin IQ and SaaS surfaces including CloudHaven and DeEvent.",
    ],
  },
];

export const testimonials = [
  {
    quote: "Working with Deelan was an absolute pleasure. His ability to transform ideas into scalable solutions is unmatched!",
    name: "Andersone Kitheka",
  },
  {
    quote: "Deelan's dedication and creativity brought our project to life. Highly recommend him for any development work!",
    name: "Jeffery Barrows",
  },
  {
    quote: "Deelan’s expertise and innovation were essential in making our project successful. His problem-solving skills and attention to detail are unmatched, making him an invaluable asset to any team.",
    name: "Sarah Kerubo",
  },
];