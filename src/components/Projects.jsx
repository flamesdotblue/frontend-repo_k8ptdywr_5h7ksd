import React from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Landing',
    description: 'A playful WebGL landing page with real-time lighting, smooth camera motion, and delightful scroll-driven scenes.',
    tags: ['React', 'Spline', 'Three.js', 'Framer'],
    demo: '#',
    repo: '#',
    accent: 'from-indigo-500/20 to-sky-500/10',
  },
  {
    title: 'Design System Kit',
    description: 'Composable UI primitives, tokens, and themes built for speed and accessibility.',
    tags: ['TypeScript', 'Tailwind', 'Radix'],
    demo: '#',
    repo: '#',
    accent: 'from-teal-500/20 to-emerald-500/10',
  },
  {
    title: 'Realtime Collab Notes',
    description: 'Shared notes with presence, optimistic updates, and offline-first sync.',
    tags: ['React', 'WebSockets', 'IndexedDB'],
    demo: '#',
    repo: '#',
    accent: 'from-fuchsia-500/20 to-purple-500/10',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-slate-950 py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-sky-400" />
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Selected Projects</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow transition hover:shadow-lg"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${p.accent}`} />
              <h3 className="mb-2 text-xl font-semibold text-white">{p.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-slate-300">{p.description}</p>
              <div className="mb-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-slate-700 bg-slate-800/70 px-2.5 py-1 text-[11px] text-slate-200">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={p.demo}
                  className="inline-flex items-center gap-2 rounded-md bg-indigo-500/90 px-3 py-1.5 text-sm text-white hover:bg-indigo-600"
                >
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </a>
                <a
                  href={p.repo}
                  className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-sm text-slate-200 hover:bg-slate-800"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
