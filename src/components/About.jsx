import React from 'react';
import { User, Briefcase, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <User className="h-5 w-5 text-indigo-400" />
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">About Me</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="mb-2 text-lg font-semibold text-white">Background</h3>
            <p className="text-slate-300">
              I’m a frontend-focused developer with a love for smooth interfaces, clean code, and playful micro-interactions. I enjoy turning complex problems into intuitive, delightful products.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="mb-2 text-lg font-semibold text-white">What I Do</h3>
            <ul className="list-inside list-disc space-y-2 text-slate-300">
              <li className="flex items-start gap-2"><Briefcase className="mt-0.5 h-4 w-4 text-sky-400" /> Product UI & rapid prototyping</li>
              <li className="flex items-start gap-2"><Code2 className="mt-0.5 h-4 w-4 text-teal-400" /> Design systems and component libraries</li>
              <li className="flex items-start gap-2"><Code2 className="mt-0.5 h-4 w-4 text-indigo-400" /> Frontend performance and DX</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="mb-2 text-lg font-semibold text-white">Tech</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Node', 'FastAPI'].map((tag) => (
                <span key={tag} className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs text-slate-200">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
