import React, { useState } from 'react';
import {
  Code,
  Server,
  Database,
  Wrench,
  Bot,
  Sparkles,
  CheckCircle,
  Layers
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Skills', icon: Layers },
    { id: 'frontend', name: 'Frontend', icon: Code },
    { id: 'backend', name: 'Backend & APIs', icon: Server },
    { id: 'database', name: 'Database & Cloud', icon: Database },
    { id: 'tools', name: 'Tools & AI', icon: Wrench },
  ];

  const getFilteredCategories = () => {
    if (activeTab === 'all') {
      return portfolioData.skillsCategories;
    }
    return portfolioData.skillsCategories.filter((cat) => cat.id === activeTab);
  };

  const aiTools = [
    { name: 'Cursor AI', desc: 'Agentic code refactoring & IDE acceleration' },
    { name: 'GitHub Copilot', desc: 'Predictive inline completions & tests' },
    { name: 'Claude', desc: 'Complex reasoning & system architecture' },
    { name: 'ChatGPT', desc: 'API design, logic debugging & ideation' },
    { name: 'Perplexity AI', desc: 'Rapid documentation & library research' },
    { name: 'OpenCode', desc: 'AI-assisted code exploration' },
  ];

  return (
    <section id="skills" className="py-20 relative bg-slate-100/50 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Tools, Technologies &amp; Architecture
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
            A comprehensive overview of my technical stack across frontend frameworks, backend servers, databases, and AI tooling.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25 scale-105'
                    : 'glass-panel text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {getFilteredCategories().map((cat) => (
            <div key={cat.id} className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {cat.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                    {cat.description}
                  </p>
                </div>
                <span className="text-xs font-mono font-medium text-indigo-600 dark:text-indigo-400">
                  {cat.skills.length} skills
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="glass-panel p-4 rounded-2xl hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/5 transition-all hover:-translate-y-1 group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-mono font-bold text-xs group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        &lt;/&gt;
                      </div>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                          skill.level === 'Advanced'
                            ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                            : 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/80 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>

                    <div className="font-bold text-slate-900 dark:text-white text-sm sm:text-base group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {skill.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* AI & Developer Velocity Spotlight */}
        <div className="mt-16 glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden border border-indigo-500/20">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-purple-500/20">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>AI-Augmented Developer Workflow</span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300 font-semibold">
                    10x Velocity
                  </span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Leveraging cutting-edge AI coding agents and LLM tooling listed in resume
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiTools.map((tool) => (
              <div
                key={tool.name}
                className="p-4 rounded-2xl bg-white/60 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 flex items-start gap-3"
              >
                <CheckCircle className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed">
                    {tool.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
