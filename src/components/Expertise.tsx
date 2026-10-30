import React from 'react';
import { Scale, Cpu, Code2, ShieldCheck, Rocket } from 'lucide-react';
import { expertiseItems, ExpertiseItem } from '../data/experience';

const iconMap: Record<ExpertiseItem['iconName'], React.ReactNode> = {
  Scale: <Scale className="w-5 h-5 text-[var(--accent-gold)]" aria-hidden="true" />,
  Cpu: <Cpu className="w-5 h-5 text-[var(--accent-emerald)]" aria-hidden="true" />,
  Code2: <Code2 className="w-5 h-5 text-[var(--accent-gold)]" aria-hidden="true" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[var(--accent-emerald)]" aria-hidden="true" />,
  Rocket: <Rocket className="w-5 h-5 text-[var(--accent-gold)]" aria-hidden="true" />,
};

export const Expertise: React.FC = () => {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="py-24 md:py-32 border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]/35"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="font-mono text-xs tracking-wider text-[var(--accent-gold)] mb-3">
              02. What I Do &amp; Explore
            </p>
            <h2
              id="expertise-heading"
              className="font-serif text-3xl sm:text-5xl tracking-tight text-[var(--text-primary)]"
              style={{ textWrap: 'balance' }}
            >
              Areas of Work &amp; Technical Focus
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-md">
            Disciplines I actively study, explore, and connect to build practical digital products.
          </p>
        </div>

        {/* 5 Expertise Cards Grid (Single-Elevation Cards + Unboxed Metadata with · separators) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseItems.map((item, idx) => (
            <article
              key={item.id}
              className={`group rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-7 flex flex-col justify-between transition-transform duration-150 hover:-translate-y-0.5 hover:border-[var(--accent-emerald)] ${
                idx === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs text-[var(--accent-gold)] tabular-nums">
                    {item.number}
                  </span>
                  {iconMap[item.iconName]}
                </div>

                <h3 className="font-serif text-2xl text-[var(--text-primary)] mb-3">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base leading-relaxed text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </div>

              {/* Unboxed Metadata with Typographic Separators (Zero-Pill compliance) */}
              <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-[var(--text-secondary)]">
                {item.focusAreas.map((area, areaIdx) => (
                  <React.Fragment key={area}>
                    {areaIdx > 0 && <span aria-hidden="true">·</span>}
                    <span>{area}</span>
                  </React.Fragment>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
