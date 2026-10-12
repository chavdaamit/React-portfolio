import {
  ExternalLink,
  FolderGit2,
  Users,
  Code2
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export const GitHubSection: React.FC = () => {
  const topRepos = [
    {
      name: '03-React',
      description: 'Hands-on modern React application workflows, hooks, state management, and reusable components.',
      language: 'JavaScript / React',
      url: 'https://github.com/chavdaamit/03-React',
      tag: 'Frontend'
    },
    {
      name: 'node.js',
      description: 'Backend services repository containing food_order API, auth_login microservice, and REST modules.',
      language: 'Node.js / Express',
      url: 'https://github.com/chavdaamit/node.js',
      tag: 'Backend & API'
    },
    {
      name: 'JWT-Authentication',
      description: 'Robust authentication system with bcrypt password hashing, token verification, and route security.',
      language: 'JavaScript',
      url: 'https://github.com/chavdaamit/JWT-Authentication',
      tag: 'Security'
    },
    {
      name: 'asus-laptop',
      description: 'Responsive ASUS Laptop product showcase clone with modern Bootstrap 5 UI and Netlify deployment.',
      language: 'HTML / CSS / JS',
      url: 'https://github.com/chavdaamit/asus-laptop',
      tag: 'Clone UI'
    },
    {
      name: 'E-commerce-project',
      description: 'Full stack online retail store with catalog filtering, shopping cart, and persistent checkout states.',
      language: 'React / JavaScript',
      url: 'https://github.com/chavdaamit/E-commerce-project',
      tag: 'Full Stack'
    },
    {
      name: 'html-css-exam',
      description: 'Clean responsive web design practical exam project with mobile-first CSS layout architectures.',
      language: 'HTML / CSS',
      url: 'https://github.com/chavdaamit/html-css-exam',
      tag: 'Web Design'
    }
  ];

  return (
    <section id="github" className="py-20 relative bg-slate-100/50 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 mb-3">
            <GithubIcon className="w-3.5 h-3.5" />
            <span>Open Source &amp; Code Activity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            GitHub Activity &amp; Repositories
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
            Actively writing code, pushing commits, and building practical repositories on GitHub under{' '}
            <strong className="text-slate-900 dark:text-white">@chavdaamit</strong>.
          </p>
        </div>

        {/* GitHub Stats Header Card */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl mb-10 border border-indigo-500/20 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* User Profile Snapshot */}
            <div className="flex items-center gap-4 text-center md:text-left flex-col sm:flex-row">
              <div className="w-20 h-20 rounded-2xl overflow-hidden ring-4 ring-indigo-500/30 p-1 bg-slate-900 shrink-0">
                <img
                  src={portfolioData.personal.avatarUrl}
                  alt="Amit Chavda"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {portfolioData.personal.name}
                </h3>
                <a
                  href={portfolioData.personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-mono text-indigo-600 dark:text-indigo-400 hover:underline flex items-center justify-center sm:justify-start gap-1 mt-0.5"
                >
                  <span>@chavdaamit</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Active Developer on GitHub • MERN Stack &amp; REST APIs
                </p>
              </div>
            </div>

            {/* Quick Stats Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <div className="px-4 py-3 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-center min-w-[90px]">
                <div className="text-xl sm:text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 flex items-center justify-center gap-1">
                  <FolderGit2 className="w-4 h-4" />
                  <span>79+</span>
                </div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                  Repositories
                </div>
              </div>

              <div className="px-4 py-3 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-center min-w-[90px]">
                <div className="text-xl sm:text-2xl font-extrabold text-purple-600 dark:text-purple-400 flex items-center justify-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>14</span>
                </div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                  Followers
                </div>
              </div>

              <div className="px-4 py-3 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-center min-w-[90px]">
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-1">
                  <Code2 className="w-4 h-4" />
                  <span>MERN</span>
                </div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                  Full Stack
                </div>
              </div>

              <a
                href={portfolioData.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-2xl font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-indigo-600 dark:hover:bg-indigo-500 shadow-md transition-all text-xs sm:text-sm flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Visit GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-6 rounded-3xl hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/5 transition-all hover:-translate-y-1 block group"
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400">
                    <FolderGit2 className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-base font-mono">
                    {repo.name}
                  </h4>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 transition-colors" />
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 min-h-[40px]">
                {repo.description}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-800 text-xs">
                <span className="font-mono text-indigo-600 dark:text-indigo-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  {repo.language}
                </span>
                <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[11px] font-medium">
                  {repo.tag}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
