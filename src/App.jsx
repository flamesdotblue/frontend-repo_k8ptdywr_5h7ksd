import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Home, User, Sparkles, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 font-inter text-slate-100">
      {/* Simple sticky nav */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="flex items-center gap-2 text-sm font-semibold text-white">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-tr from-indigo-500 to-teal-500 text-white">F</span>
            <span>My Portfolio</span>
          </a>
          <nav className="hidden items-center gap-5 md:flex">
            <a href="#home" className="inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-white"><Home className="h-4 w-4" /> Home</a>
            <a href="#about" className="inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-white"><User className="h-4 w-4" /> About</a>
            <a href="#projects" className="inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-white"><Sparkles className="h-4 w-4" /> Projects</a>
            <a href="#contact" className="inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-white"><Mail className="h-4 w-4" /> Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
