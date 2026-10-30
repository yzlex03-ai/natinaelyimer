import React from 'react';
import { journeySteps } from '../data/experience';
import { profileData } from '../data/profile';

export const Journey: React.FC = () => {
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="py-24 md:py-32 border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <p className="font-mono text-xs tracking-wider text-[var(--accent-gold)] mb-3">
            {profileData.philosophy.sectionLabel}
          </p>
          <h2
            id="journey-heading"
            className="font-serif text-3xl sm:text-5xl tracking-tight text-[var(--text-primary)]"
            style={{ textWrap: 'balance' }}
          >
            {profileData.philosophy.heading}
          </h2>
        </div>

        {/* 3 Interconnected Themes Progression */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {journeySteps.map((step, index) => (
            <div
              key={step.number}
              className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-7 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline justify-between mb-6">
                  <span className="font-serif text-4xl text-[var(--accent-gold)] tabular-nums">
                    {step.number}
                  </span>
                  <span className="font-mono text-xs text-[var(--text-secondary)] tabular-nums">
                    Stage {index + 1} of 3
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[var(--text-primary)] mb-3">
                  {step.title}
                </h3>

                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Unboxed Keywords with · separator */}
              <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-[var(--accent-emerald)]">
                {step.keywords.map((kw, kwIdx) => (
                  <React.Fragment key={kw}>
                    {kwIdx > 0 && (
                      <span className="text-[var(--text-secondary)]" aria-hidden="true">
                        ·
                      </span>
                    )}
                    <span>{kw}</span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Personal Philosophy Statement */}
        <div className="mt-14 rounded-2xl border border-[var(--border-accent)] bg-[var(--bg-secondary)] p-8 sm:p-12 relative overflow-hidden">
          <div className="tibeb-divider mb-8" aria-hidden="true" />
          <div className="max-w-4xl mx-auto text-center space-y-5">
            <blockquote
              className="font-serif text-2xl sm:text-4xl leading-snug text-[var(--text-primary)]"
              style={{ textWrap: 'balance' }}
            >
              &ldquo;{profileData.philosophy.quote}&rdquo;
            </blockquote>
            <p className="font-mono text-xs tracking-widest text-[var(--accent-emerald)]">
              — {profileData.name}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
