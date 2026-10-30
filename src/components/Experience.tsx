import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { timelineItems } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-24 md:py-32 border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <p className="font-mono text-xs tracking-wider text-[var(--accent-gold)] mb-3">
            04. Experience, Education &amp; Leadership
          </p>
          <h2
            id="experience-heading"
            className="font-serif text-3xl sm:text-5xl tracking-tight text-[var(--text-primary)]"
            style={{ textWrap: 'balance' }}
          >
            Academic Foundation &amp; Leadership Timeline
          </h2>
        </div>

        {/* Clean Editorial Timeline Rows */}
        <div className="divide-y divide-[var(--border-subtle)] border-t border-b border-[var(--border-subtle)]">
          {timelineItems.map((item) => (
            <article
              key={item.id}
              className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
            >
              {/* Left Column: Period, Category & Location (Unboxed metadata) */}
              <div className="lg:col-span-4 space-y-1">
                <p className="font-mono text-xs text-[var(--accent-gold)] tabular-nums">
                  {item.period} · {item.location}
                </p>
                <p className="text-xs font-mono text-[var(--text-secondary)]">{item.category}</p>
              </div>

              {/* Right Column: Role, Organization, Description & Highlights */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[var(--text-primary)]">
                    {item.role}{' '}
                    <span className="text-[var(--accent-emerald)]">— {item.organization}</span>
                  </h3>

                  {item.link && (
                    <a
                      href={item.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs text-[var(--accent-gold)] hover:underline whitespace-nowrap shrink-0"
                    >
                      <span>{item.link.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  )}
                </div>

                <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>

                <ul className="space-y-2 pt-2">
                  {item.highlights.map((point) => (
                    <li
                      key={point}
                      className="text-sm text-[var(--text-secondary)] flex items-start gap-2.5"
                    >
                      <span className="font-mono text-xs text-[var(--accent-emerald)] select-none">
                        —
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
