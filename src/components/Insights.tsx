import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { insightTopics, verifiedInsights } from '../data/experience';
import { filterInsightsByTopic } from '../data/portfolioLogic';

export const Insights: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>('All');
  const filteredPosts = filterInsightsByTopic(selectedTopic, verifiedInsights);

  return (
    <section
      id="insights"
      aria-labelledby="insights-heading"
      className="py-24 md:py-32 border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <p className="font-mono text-xs tracking-wider text-[var(--accent-gold)] mb-3">
              06. Insights &amp; Writing
            </p>
            <h2
              id="insights-heading"
              className="font-serif text-3xl sm:text-5xl tracking-tight text-[var(--text-primary)]"
              style={{ textWrap: 'balance' }}
            >
              Notes on Law, AI &amp; Building YZlex
            </h2>
          </div>

          <a
            href="https://www.linkedin.com/in/natinael-yimer-121b81320/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs text-[var(--accent-emerald)] hover:underline whitespace-nowrap shrink-0"
          >
            <span>Follow Updates on LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div
          className="inline-flex flex-wrap items-center gap-1 p-1 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] mb-10"
          role="group"
          aria-label="Filter insights by topic"
        >
          {insightTopics.map((topic) => {
            const active = selectedTopic === topic;
            return (
              <button
                key={topic}
                type="button"
                onClick={() => setSelectedTopic(topic)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                  active
                    ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] font-semibold'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {topic}
              </button>
            );
          })}
        </div>

        {/* Featured Verified LinkedIn Posts + Reusable Card Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-7 flex flex-col justify-between hover:border-[var(--accent-gold)] transition-colors"
            >
              <div>
                {/* Unboxed Metadata Kicker */}
                <p className="font-mono text-xs text-[var(--accent-emerald)] mb-3">
                  {post.category} <span className="text-[var(--text-secondary)]">·</span>{' '}
                  <span className="text-[var(--text-secondary)]">{post.source}</span>
                </p>

                <h3 className="font-serif text-2xl text-[var(--text-primary)] mb-3 leading-snug">
                  {post.title}
                </h3>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {post.summary}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[var(--border-subtle)] space-y-4">
                {/* Unboxed Tag List */}
                <p className="text-xs font-mono text-[var(--text-secondary)]">
                  {post.tags.join(' · ')}
                </p>

                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--accent-gold)] hover:text-[var(--accent-emerald)] transition-colors whitespace-nowrap"
                >
                  <span>Read Post on LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}

          {/* Invitation Card for Ongoing Writing & Updates */}
          <div className="rounded-2xl border border-dashed border-[var(--border-accent)] bg-[var(--bg-primary)]/60 p-7 flex flex-col justify-between">
            <div>
              <p className="font-mono text-xs text-[var(--accent-gold)] mb-3">Ongoing Dispatches</p>
              <h3 className="font-serif text-2xl text-[var(--text-primary)] mb-3 leading-snug">
                Follow My Journey Building LegalTech in Ethiopia
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                I regularly share product milestones, reflections on Ethiopian law and artificial
                intelligence, and lessons learned while building YZlex on LinkedIn.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-[var(--border-subtle)]">
              <a
                href="https://www.linkedin.com/in/natinael-yimer-121b81320/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--accent-emerald)] transition-colors whitespace-nowrap"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--accent-emerald)]" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
