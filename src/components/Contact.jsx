import React from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  const email = 'you@example.com';
  return (
    <section id="contact" className="w-full bg-slate-950 py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mb-10 flex items-center gap-3">
          <Mail className="h-5 w-5 text-teal-400" />
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Get In Touch</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <p className="mb-6 text-slate-300">
              Have a project in mind or just want to say hello? Drop a message and I’ll get back to you.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const data = new FormData(form);
                const subject = encodeURIComponent(String(data.get('name') || 'Hello'));
                const body = encodeURIComponent(`Hi, my name is ${data.get('name') || ''}.%0A%0A${data.get('message') || ''}`);
                window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
              }}
              className="space-y-4"
            >
              <input
                name="name"
                placeholder="Your name"
                className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 text-slate-200 placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email (optional)"
                className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 text-slate-200 placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Your message"
                rows={5}
                className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-2 text-slate-200 placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-teal-500 px-4 py-2 font-medium text-white shadow hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-between gap-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
              <h3 className="mb-2 text-lg font-semibold text-white">Elsewhere</h3>
              <p className="mb-4 text-slate-300">Find me on these platforms:</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-sm text-slate-200 hover:bg-slate-800"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-sm text-slate-200 hover:bg-slate-800"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-sm text-slate-200 hover:bg-slate-800"
                >
                  <Mail className="h-4 w-4" /> Email
                </a>
              </div>
            </div>
            <p className="text-center text-sm text-slate-500">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
