import React, { useState } from 'react';
import {
  ArrowUpRight,
  BookOpen,
  Search,
  Scale,
  Sparkles,
  Languages,
  FileText,
  Briefcase,
  Users,
} from 'lucide-react';
import { featuredProjects } from '../data/projects';
import { selectWorkspacePreviewTab } from '../data/portfolioLogic';

const capabilityIcons = {
  BookOpen: <BookOpen className="w-4 h-4 text-[var(--accent-gold)] shrink-0" aria-hidden="true" />,
  Search: <Search className="w-4 h-4 text-[var(--accent-emerald)] shrink-0" aria-hidden="true" />,
  Scale: <Scale className="w-4 h-4 text-[var(--accent-gold)] shrink-0" aria-hidden="true" />,
  Sparkles: <Sparkles className="w-4 h-4 text-[var(--accent-emerald)] shrink-0" aria-hidden="true" />,
  Languages: <Languages className="w-4 h-4 text-[var(--accent-gold)] shrink-0" aria-hidden="true" />,
  FileText: <FileText className="w-4 h-4 text-[var(--accent-emerald)] shrink-0" aria-hidden="true" />,
  Briefcase: <Briefcase className="w-4 h-4 text-[var(--accent-gold)] shrink-0" aria-hidden="true" />,
  Users: <Users className="w-4 h-4 text-[var(--accent-emerald)] shrink-0" aria-hidden="true" />,
};

export const Projects: React.FC = () => {
  const project = featuredProjects[0];
  const [activeTabId, setActiveTabId] = useState<string>(project.previewTabs[0].id);

  const activePreview = selectWorkspacePreviewTab(activeTabId, project.previewTabs);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-24 md:py-32 border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header & Primary Project Actions */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <p className="font-mono text-xs tracking-wider text-[var(--accent-gold)] mb-3">
              03. Featured Project · {project.role}
            </p>
            <h2
              id="projects-heading"
              className="font-serif text-3xl sm:text-5xl tracking-tight text-[var(--text-primary)]"
              style={{ textWrap: 'balance' }}
            >
              {project.name} — {project.subtitle}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              {project.summary}
            </p>
            {/* Unboxed Metadata Tags */}
            <div className="mt-4 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-mono text-[var(--accent-emerald)]">
              {project.tags.map((tag, idx) => (
                <React.Fragment key={tag}>
                  {idx > 0 && (
                    <span className="text-[var(--text-secondary)]" aria-hidden="true">
                      ·
                    </span>
                  )}
                  <span>{tag}</span>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
            >
              <span>Visit YZlex</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href={project.aboutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium border border-[var(--border-accent)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:border-[var(--accent-emerald)] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Read About the Project</span>
              <ArrowUpRight className="w-4 h-4 text-[var(--accent-gold)]" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Interactive Product Interface Preview (Single-Elevation Container with Hairline Dividers) */}
        <div className="rounded-2xl border border-[var(--border-accent)] bg-[var(--bg-secondary)] overflow-hidden">
          {/* Interactive Workspace Toolbar */}
          <div className="px-6 py-4 border-b border-[var(--border-subtle)] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs font-mono text-[var(--text-secondary)]">
              <span className="text-[var(--text-primary)] font-medium">https://yzlex.com</span>
              <span aria-hidden="true">·</span>
              <span className="text-[var(--accent-gold)]">{activePreview.modeDescriptor}</span>
            </div>

            {/* Segmented Interactive Mode Controls */}
            <div
              role="tablist"
              aria-label="YZlex Product Capabilities Preview"
              className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-subtle)]"
            >
              {project.previewTabs.map((tab) => {
                const isSelected = tab.id === activeTabId;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    type="button"
                    aria-selected={isSelected}
                    onClick={() => setActiveTabId(tab.id)}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                      isSelected
                        ? 'bg-[var(--accent-emerald)] text-[#0B1012] font-semibold'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Workspace Split View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[var(--border-subtle)]">
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-4">
              <p className="font-mono text-xs text-[var(--accent-emerald)]">
                Bilingual Research &amp; Workflow Input
              </p>
              <p className="font-serif text-xl sm:text-2xl text-[var(--text-primary)] leading-snug">
                &ldquo;{activePreview.queryExample}&rdquo;
              </p>
              <p className="text-sm sm:text-base text-[var(--accent-gold)] font-medium">
                {activePreview.amharicContext}
              </p>
              <p className="pt-2 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                {activePreview.summary}
              </p>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-center divide-y divide-[var(--border-subtle)]">
              {activePreview.structuredOutput.map((row) => (
                <div key={row.label} className="py-3.5 first:pt-0 last:pb-0">
                  <span className="block font-mono text-xs text-[var(--text-secondary)]">
                    {row.label}
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-[var(--text-primary)]">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 8 Verified Platform Capabilities */}
        <div>
          <div className="mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl text-[var(--text-primary)]">
              Verified Platform Capabilities
            </h3>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              Core legal research, analysis, and professional tools unified inside YZlex.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.capabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-6 flex flex-col justify-between hover:border-[var(--accent-emerald)] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-base font-semibold text-[var(--text-primary)]">
                      {cap.title}
                    </h4>
                    {capabilityIcons[cap.iconName]}
                  </div>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5-Stage Case Study Presentation */}
        <div className="pt-8 border-t border-[var(--border-subtle)]">
          <div className="mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl text-[var(--text-primary)]">
              Case Study — From Observation to Execution
            </h3>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              How observing legal research challenges at university evolved into an AI-powered
              platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {project.caseStudy.map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="block font-mono text-xs text-[var(--accent-gold)] mb-2 tabular-nums">
                    {item.step}
                  </span>
                  <h4 className="text-base font-semibold text-[var(--text-primary)] mb-2.5">
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                    {item.content}
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
