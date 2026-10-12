import React from 'react';
import {
  ArrowUp,
  Mail,
  Phone,
  FileText
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/80 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-800/80 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-200 dark:border-slate-800">
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 flex items-center justify-center text-white font-mono text-sm font-bold shadow-md shadow-indigo-500/20">
                AC
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                  {portfolioData.personal.name}
                </h3>
                <p className="text-xs font-mono text-indigo-600 dark:text-indigo-400">
                  {portfolioData.personal.title}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Crafting modern web applications, scalable REST APIs, and delightful developer experiences from Bhavnagar, Gujarat.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={portfolioData.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-slate-900 dark:hover:bg-indigo-600 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={portfolioData.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-[#0077b5] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${portfolioData.personal.email}`}
                aria-label="Email"
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-rose-600 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={`tel:${portfolioData.personal.phone}`}
                aria-label="Phone"
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-emerald-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a href="#hero" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  About &amp; Education
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Skills &amp; Technologies
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#github" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  GitHub Repositories
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resume & Resources */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Documents &amp; Profiles
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <FileText className="w-4 h-4 text-indigo-500" />
                <span>View Online Resume (PDF)</span>
              </button>

              <a
                href={portfolioData.personal.resumePdfUrl}
                download="Amit_Chavda_Resume.pdf"
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <FileText className="w-4 h-4 text-purple-500" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={portfolioData.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                <span>GitHub Profile (@chavdaamit)</span>
              </a>

              <a
                href={portfolioData.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <span>&copy; {currentYear} Amit Chavda. Built with React, TypeScript &amp; Tailwind.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
