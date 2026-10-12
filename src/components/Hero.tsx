import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Sparkles,
  Terminal,
  Code2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const roles = portfolioData.personal.typingRoles;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        const nextText = isDeleting
          ? currentRole.substring(0, displayText.length - 1)
          : currentRole.substring(0, displayText.length + 1);
        setDisplayText(nextText);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  return (
    <section id="hero" className="relative min-h-[92vh] pt-28 pb-16 flex items-center overflow-hidden">
      {/* Background Decorative Gradients & Grid */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500/15 via-purple-500/10 to-transparent rounded-full blur-3xl dark:from-indigo-600/20 dark:via-purple-600/15" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-2xl dark:bg-blue-600/15" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl dark:bg-purple-900/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/60 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Full Stack &amp; MERN Opportunities</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                  {portfolioData.personal.name}
                </span>
              </h1>

              {/* Dynamic Subheading */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-slate-200 font-mono">
                  &gt; {displayText}
                  <span className="animate-pulse text-indigo-500">|</span>
                </span>
              </div>
            </div>

            {/* Bio Summary */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Passionate developer skilled in <strong className="text-slate-900 dark:text-white font-semibold">React</strong>,{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">Node.js</strong>,{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">Express.js</strong>,{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">MongoDB</strong>, and{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">REST APIs</strong>. 
              Currently crafting responsive, scalable web applications and exploring modern AI-assisted engineering workflows.
            </p>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-indigo-500" />
                <span>{portfolioData.personal.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-purple-500" />
                <span>Tech Wars 2026 Hackathon</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-emerald-500" />
                <span>79+ GitHub Repositories</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={portfolioData.personal.resumePdfUrl}
                download="Amit_Chavda_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-100 bg-white/80 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700/80 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base"
              >
                <Download className="w-4 h-4 text-indigo-500" />
                <span>Download CV (PDF)</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm"
              >
                <span>View CV Online</span>
              </button>
            </div>

            {/* Social Icons row */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
              <span className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                Connect:
              </span>
              <a
                href={portfolioData.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-slate-900 dark:hover:bg-indigo-600 transition-all"
                title="GitHub @chavdaamit"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-[#0077b5] transition-all"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-rose-600 transition-all"
                title="Email Amit"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Avatar & Floating Badges */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Outer decorative glowing ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 blur-xl opacity-50 dark:opacity-40 animate-glow" />

              {/* Card wrapper */}
              <div className="relative w-full h-full rounded-3xl p-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-2xl">
                <div className="w-full h-full rounded-[22px] bg-slate-950/90 dark:bg-slate-950 overflow-hidden flex flex-col items-center justify-center p-6 text-center border border-white/10 backdrop-blur-sm relative">
                  
                  {/* Avatar image */}
                  <div className="relative mb-4 group">
                    <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden ring-4 ring-indigo-500/30 p-1 bg-slate-900">
                      <img
                        src={portfolioData.personal.avatarUrl}
                        alt="Amit Chavda"
                        className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                        loading="eager"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white p-2 rounded-xl shadow-lg border-2 border-slate-950">
                      <Code2 className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight">Amit Chavda</h3>
                  <p className="text-xs text-indigo-400 font-mono mt-0.5">@chavdaamit</p>
                  
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-indigo-950/80 text-indigo-300 border border-indigo-700/50">
                      Full Stack MERN
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-purple-950/80 text-purple-300 border border-purple-700/50">
                      REST APIs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Stats Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {portfolioData.personal.stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-panel p-4 sm:p-5 rounded-2xl text-center hover:border-indigo-500/40 transition-colors"
              >
                <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
