import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        {/* Content */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs text-slate-300 backdrop-blur">
            <Rocket className="h-3.5 w-3.5 text-indigo-400" />
            <span>Tech • Portfolio • Interactive</span>
          </div>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Hi, I’m <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-teal-400 bg-clip-text text-transparent">Your Name</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
            I build delightful, performant web experiences. Explore my work and let’s create something remarkable together.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2 text-white shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <Rocket className="h-4 w-4" />
              View Projects
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-2 text-slate-200 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/50 px-4 py-2 text-slate-200 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </div>
        </div>

        {/* Spline Scene */}
        <div className="relative h-[420px] w-full rounded-2xl border border-slate-800 bg-slate-900/40 shadow-lg md:h-[540px]">
          {/* soft glow */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.25),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(20,184,166,0.18),transparent_40%)]" />
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
