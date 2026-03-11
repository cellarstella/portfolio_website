"use client";

import { useMemo, useState } from "react";

type Experience = {
  id: string;
  role: string;
  company: string;
  link?: string;
  linkTitle?: string;
  period: string;
  location: string;
  summary: string;
  contributions: string[];
  tags: string[];
};

const experiences: Experience[] = [
  {
    id: "adobe",
    role: "Senior Software Engineer",
    company: "Adobe (Marketo -> Journey Optimizer)",
    link: "http://experienceleague.adobe.com/en/docs/journey-optimizer-b2b/user/get-started/about-journey-optimizer-b2b-edition",
    linkTitle: "Adobe Journey Optimizer B2B Edition",
    period: "2016 – 2025",
    location: "Portland, OR",
    summary:
      "Individual contributor on team leading feature development for large-scale B2B marketing product. Focused on modular TypeScript/React, user adoption, and accessibility.",
    contributions: [
      "Migrated core workflows from legacy Marketo Engage UI to Journey Optimizer",
      "Championed user feedback/input to critically influence Marketo design decisions",
      "Partnered with Product, Design, and QA to deliver cross-platform improvements",
      "Contributed time and resource estimates to provide budget analysis for future initiatives",
      "Led training meetings covering accessibility best practices, component library usage, and product knowledge sharing",
      "Developed and maintained a scalable React component library ",
      "Women at Adobe Site Lead for Portland office, organizing events and resources",
    ],
    tags: ["TypeScript", "React", "GraphQL", "Accessibility", "Design Systems", "Postman API"],
  },
  {
    id: "thetus",
    role: "Frontend Developer",
    company: "Thetus Corporation",
    link: "https://thetus.wordpress.com/",
    linkTitle: "Thetus Corporation (dissolved, but this blog still has information)",
    period: "2012 – 2016",
    location: "Portland, OR",
    summary:
      "Orchestrated design-to-development alignment, led experimental UI modules, and improved release velocity for the SaaS Savanna product.",
    contributions: [
      "Delivered a reusable charting interaction in ExtJS + D3-based product visualization",
      "Introduced scoped theming and Style Guide components to dramatically reduce visual debt",
      "Collaborated with cross-functional stakeholders on pricing-tiered product paths",
      "Prototyped supporting mobile application in React Native",
    ],
    tags: ["ExtJS", "D3", "SASS", "UX", "Testing", "React Native", "OmniGraffle", "Java"],
  },
  {
    id: "early-career",
    role: "Web Developer",
    company: "Self-employed",
    link: "http://www.doctorkorin.com/",
    linkTitle: "Example of client work (site for local chiropractor)",
    period: "2005 – 2012",
    location: "Portland, OR",
    summary:
      "Built client work for restaurants, wellness studios, and small businesses. Developed full project lifecycle practices and handoff documentation.",
    contributions: [
      "Crafted end-to-end websites and content workflows using HTML/CSS/JavaScript, following responsive design principles",
      "Integrated with customer's pre-deployed applications and platforms (e.g. Wordpress, TurboGears, X-Cart)",
      "Standardized client handoff with editable CMS quick-start guides",
      "Delivered local SEO and accessibility improvements",
    ],
    tags: ["Web Design", "Client Communication", "Project Management", "Accessibility", "JavaScript", "PHP", "Python"],
  },
];

export default function ExperiencePage() {
  const [activeId, setActiveId] = useState(experiences[0].id);

  const activeExperience = useMemo(
    () => experiences.find((item) => item.id === activeId) ?? experiences[0],
    [activeId]
  );

  return (
    <article className="max-w-6xl mx-auto py-10 px-4 text-slate-100">
      <header className="mb-9">
        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-wide">
          Experience
        </h1>
        <p className="mt-3 text-lg text-slate-300 max-w-3xl">
          A dynamic timeline that surfaces what I built and what I learned at each step.
          Click your favorite role to zoom in and compare progress across projects.
        </p>
      </header>

      <main className="grid gap-6 md:grid-cols-4">
        <nav className="md:col-span-1">
          <ul className="space-y-3">
            {experiences.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveId(item.id)}
                  className={`w-full text-left rounded-xl border p-3 transition-transform duration-200 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                    activeId === item.id
                      ? "border-cyan-400 bg-cyan-500/20"
                      : "border-slate-700 bg-slate-900/60"
                  }`}
                >
                  <p className="text-sm text-slate-300">{item.period}</p>
                  <h3 className="font-semibold text-white">{item.role}</h3>
                  <p className="text-sm text-slate-400">{item.company}</p>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <section className="md:col-span-3 space-y-6">
          <article className="rounded-2xl border border-cyan-400/20 bg-slate-900/50 p-6 shadow-xl shadow-cyan-500/10 transition-colors duration-300">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-sm text-cyan-300">{activeExperience.location}</p>
                <h2 className="text-2xl font-bold text-white">{activeExperience.role}</h2>
                <p className="text-lg text-slate-300">
                  {activeExperience.company}{' '}
                  {activeExperience.link ? (
                    <a href={activeExperience.link} className="text-cyan-300 underline" target="_blank" rel="noreferrer">
                      ({activeExperience.linkTitle ?? "site"})
                    </a>
                  ) : null}
                </p>
              </div>
              <span className="rounded-full bg-cyan-500/30 px-3 py-1 text-xs font-medium text-cyan-100">
                {activeExperience.period}
              </span>
            </div>

            <p className="mt-4 text-slate-200">{activeExperience.summary}</p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
              {activeExperience.contributions.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {activeExperience.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-100">
                  {tag}
                </span>
              ))}
            </div>
          </article>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-white">All roles at a glance</h3>
            <div className="space-y-3">
              {experiences.map((item, index) => (
                <div
                  key={item.id}
                  className="group rounded-xl border border-slate-700 bg-slate-900/70 p-4 transition hover:-translate-y-1 hover:border-cyan-400"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-400">{item.period}</p>
                    <span className="text-xs font-semibold uppercase tracking-widest text-cyan-300">Step {index + 1}</span>
                  </div>
                  <h4 className="mt-1 text-lg font-semibold text-white">{item.role} @ {item.company}</h4>
                  <p className="mt-2 text-slate-300 line-clamp-2">{item.summary}</p>
                </div>
              ))}
            </div>
          </section>
        </section>
      </main>

      <section className="mt-10 rounded-xl border border-slate-700 bg-slate-950/40 p-6">
        <h3 className="text-2xl font-bold text-white">Pre-college experience</h3>
        <p className="mt-2 text-slate-300">
          Customer facing roles, data entry, and process improvement at a young age built the discipline, attention to detail, and problem-solving that I still carry forward. Best career advice from my Michael&apos;s manager: &ldquo;Take initiative. Recognizing problems around you and solving them is the best way to get ahead.&rdquo;
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
        <li>Meal server at a retirement center</li>
          <li>Sandwich maker / backup frozen yogurt shop lead</li>
          <li>Phone reception and data-entry at a multi-lot car dealership</li>
          <li>Certified Frame shop associate and cashier at Michael&apos;s</li>
          <li>Sales associate and window treatment specialist at Home Depot</li>
        </ul>
      </section>
    </article>
  );
}
