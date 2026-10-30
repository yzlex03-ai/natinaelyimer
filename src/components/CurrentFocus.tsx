import React from 'react';
import { profileData } from '../data/profile';

export const CurrentFocus: React.FC = () => {
  return (
    <section
      id="current-focus"
      aria-labelledby="focus-heading"
      className="py-24 md:py-32 border-t border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="font-mono text-xs tracking-wider text-[var(--accent-gold)] mb-3">
              {profileData.currentFocus.sectionLabel}
            </p>
            <h2
              id="focus-heading"
              className="font-serif text-3xl sm:text-5xl tracking-tight text-[var(--text-primary)]"
              style={{ textWrap: 'balance' }}
            >
              {profileData.currentFocus.heading}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-md">
            {profileData.currentFocus.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {profileData.currentFocus.items.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-7 flex flex-col justify-between"
            >
              <div>
                {/* Unboxed metadata header */}
                <p className="font-mono text-xs text-[var(--accent-gold)] mb-4">
                  {item.tag} <span className="text-[var(--text-secondary)]">·</span>{' '}
                  <span className="text-[var(--accent-emerald)]">{item.status}</span>
                </p>

                <h3 className="font-serif text-2xl text-[var(--text-primary)] mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
