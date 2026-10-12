import React from 'react';
import {
  GraduationCap,
  Award,
  Languages,
  CheckCircle2,
  MapPin,
  Sparkles,
  BookOpen,
  ArrowUpRight
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  const coreStrengths = [
    {
      title: "Full Stack Web Architecture",
      desc: "End-to-end development bridging responsive React user interfaces with scalable Node.js & Express REST backends."
    },
    {
      title: "Data Modeling & CRUD",
      desc: "Robust database schemas and complex aggregation pipelines utilizing MongoDB and Mongoose ODM."
    },
    {
      title: "Authentication & Security",
      desc: "Secure token-based auth with JSON Web Tokens (JWT), password encryption using bcrypt, and protected middleware."
    },
    {
      title: "AI-Augmented Engineering",
      desc: "Accelerating problem solving and code quality using modern AI developer tools (Copilot, Cursor, Claude, Perplexity)."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Amit Chavda</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering scalable web apps with passion and precision
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
            From crafting modern user experiences in React to architecting reliable RESTful backends in Node.js, 
            I bridge technology and design to build products that deliver real impact.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Story & Core Strengths */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-indigo-500" />
                <span>Professional Background</span>
              </h3>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                <p>
                  I am a passionate <strong className="text-slate-900 dark:text-white">Full Stack Developer</strong> based in{' '}
                  <span className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-semibold">
                    <MapPin className="w-4 h-4 inline mr-0.5" /> Bhavnagar, Gujarat
                  </span>. 
                  My core focus centers on developing responsive, reliable, and scalable web solutions using modern JavaScript/TypeScript technologies.
                </p>
                <p>
                  Currently honing my full stack craft through rigorous real-world project development, 
                  I build end-to-end applications including restaurant food ordering APIs, secure JWT authorization engines, 
                  responsive high-converting landing clones, and reactive e-commerce applications.
                </p>
                <p>
                  I emphasize writing clean, modular code with predictable error handling, reusable component design, 
                  and robust database schemas that adapt as application requirements grow.
                </p>
              </div>

              {/* Spoken Languages */}
              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                <h4 className="text-xs uppercase font-semibold tracking-wider text-slate-400 dark:text-slate-400 mb-3 flex items-center gap-1.5">
                  <Languages className="w-4 h-4 text-indigo-500" />
                  <span>Languages Spoken</span>
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {portfolioData.languages.map((lang) => (
                    <div
                      key={lang.name}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium"
                    >
                      <span className="font-semibold">{lang.name}</span>
                      <span className="text-slate-400 dark:text-slate-400 ml-1.5 font-normal">({lang.proficiency.split(' ')[0]})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coreStrengths.map((strength) => (
                <div
                  key={strength.title}
                  className="glass-panel p-5 rounded-2xl hover:border-indigo-500/40 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {strength.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-normal">
                        {strength.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Certifications Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Card */}
            <div className="glass-panel p-6 sm:p-7 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-2.5 mb-5">
                <div className="p-2.5 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Education &amp; Training</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Formal Full Stack Curriculum</p>
                </div>
              </div>

              {portfolioData.education.map((edu) => (
                <div
                  key={edu.institution}
                  className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">
                        {edu.institution}
                      </h4>
                      <div className="text-indigo-600 dark:text-indigo-400 font-medium text-sm mt-0.5">
                        {edu.course}
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                      {edu.status}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{edu.location}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications Card */}
            <div className="glass-panel p-6 sm:p-7 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-2.5 mb-5">
                <div className="p-2.5 rounded-xl bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Certifications &amp; Hackathons</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Competitive &amp; Verified Milestones</p>
                </div>
              </div>

              <div className="space-y-3.5">
                {portfolioData.certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex items-start gap-3.5"
                  >
                    <div className="w-9 h-9 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                          {cert.title}
                        </h4>
                        <span className="text-[11px] font-mono text-purple-600 dark:text-purple-400 font-semibold">
                          {cert.year}
                        </span>
                      </div>
                      <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                        {cert.role}
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-normal">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Resume CTA Box */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 text-white shadow-xl shadow-indigo-600/20">
              <h4 className="text-base font-bold">Want the full official resume?</h4>
              <p className="text-xs text-indigo-100 mt-1 leading-relaxed">
                Download Amit's verified CV with full details on academic background, technical skills, and project timeline.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <button
                  onClick={onOpenResume}
                  className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white text-indigo-900 hover:bg-slate-100 transition-colors inline-flex items-center gap-1.5 shadow-sm"
                >
                  <span>Preview Resume</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <a
                  href={portfolioData.personal.resumePdfUrl}
                  download="Amit_Chavda_Resume.pdf"
                  className="text-xs font-semibold text-indigo-100 hover:text-white underline underline-offset-4"
                >
                  Direct PDF Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
