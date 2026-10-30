import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profile';

export const About: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const hasPhoto = Boolean(profileData.avatarUrl) && !imgError;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 md:py-32 border-t border-[var(--border-subtle)] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="font-mono text-xs tracking-wider text-[var(--accent-gold)] mb-3">
            {profileData.about.sectionLabel}
          </p>
          <h2
            id="about-heading"
            className="font-serif text-3xl sm:text-5xl tracking-tight text-[var(--text-primary)]"
            style={{ textWrap: 'balance' }}
          >
            {profileData.about.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Profile Identity Container (Single Elevation) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-6 sm:p-8">
              <div className="tibeb-divider mb-8" aria-hidden="true" />

              {/* Profile Portrait or Elegant NY Monogram */}
              <div className="flex flex-col items-center text-center pb-7 border-b border-[var(--border-subtle)]">
                {hasPhoto ? (
                  <img
                    src={profileData.avatarUrl!}
                    alt={profileData.avatarAlt}
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-32 h-32 rounded-2xl object-cover border border-[var(--accent-gold)] mb-4"
                  />
                ) : (
                  <div
                    className="w-24 h-24 rounded-2xl border border-[var(--border-accent)] bg-[var(--bg-primary)] flex items-center justify-center mb-4"
                    aria-label="NY Monogram"
                  >
                    <span className="font-serif text-4xl text-[var(--text-primary)]">
                      {profileData.monogram}
                      <span className="text-[var(--accent-gold)]">.</span>
                    </span>
                  </div>
                )}

                <h3 className="font-serif text-2xl text-[var(--text-primary)]">
                  {profileData.name}
                </h3>
                <p className="mt-1 font-mono text-xs text-[var(--accent-emerald)]">
                  Founder &amp; CEO of YZlex · {profileData.academic.currentStatusLabel}
                </p>
              </div>

              {/* Verified Attributes List */}
              <dl className="divide-y divide-[var(--border-subtle)] text-sm">
                <div className="py-3.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                  <dt className="font-mono text-xs text-[var(--text-secondary)]">Venture</dt>
                  <dd className="font-medium text-[var(--text-primary)] sm:text-right">
                    Founder &amp; CEO, YZlex
                  </dd>
                </div>

                <div className="py-3.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                  <dt className="font-mono text-xs text-[var(--text-secondary)]">Education</dt>
                  <dd className="font-medium text-[var(--text-primary)] sm:text-right">
                    {profileData.academic.degree} · {profileData.academic.institution}
                  </dd>
                </div>

                <div className="py-3.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                  <dt className="font-mono text-xs text-[var(--text-secondary)]">Academic Status</dt>
                  <dd className="font-mono text-xs text-[var(--accent-emerald)] sm:text-right tabular-nums">
                    {profileData.academic.currentStatusLabel} ({profileData.academic.period})
                  </dd>
                </div>

                <div className="py-3.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                  <dt className="font-mono text-xs text-[var(--text-secondary)]">Leadership</dt>
                  <dd className="font-medium text-[var(--text-primary)] sm:text-right">
                    FALAS Ethiopia Campus Ambassador
                  </dd>
                </div>

                <div className="py-3.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                  <dt className="font-mono text-xs text-[var(--text-secondary)]">Location</dt>
                  <dd className="font-medium text-[var(--text-primary)] sm:text-right">
                    {profileData.location}
                  </dd>
                </div>
              </dl>

              {/* Verified Reference Links */}
              <div className="pt-5 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-4">
                <a
                  href="https://yzlex.com/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--accent-gold)] hover:underline whitespace-nowrap"
                >
                  <span>YZlex About Page</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
                <span className="text-[var(--text-secondary)]" aria-hidden="true">
                  ·
                </span>
                <a
                  href="https://www.linkedin.com/in/natinael-yimer-121b81320/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--accent-emerald)] hover:underline whitespace-nowrap"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Biography Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-5 text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
              {profileData.about.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={
                    index === 0
                      ? 'text-xl sm:text-2xl font-normal text-[var(--text-primary)] leading-snug'
                      : ''
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key Differentiator Callout (All-around subtle hairline border, no thick left bar) */}
            <div className="mt-8 p-6 rounded-2xl border border-[var(--border-accent)] bg-[var(--bg-secondary)]">
              <p className="font-mono text-xs tracking-wider text-[var(--accent-gold)] mb-2">
                Professional Differentiator
              </p>
              <p className="text-base sm:text-lg text-[var(--text-primary)] font-medium leading-relaxed">
                Studying the legal system from the inside while building technology intended to
                improve how Ethiopian legal knowledge is searched, understood, and applied.
              </p>
            </div>

            {/* 4 Core Pillars Hairline Grid */}
            <div className="pt-6 border-t border-[var(--border-subtle)] grid grid-cols-1 sm:grid-cols-2 gap-6">
              {profileData.about.corePillars.map((pillar) => (
                <div key={pillar.label}>
                  <span className="block font-mono text-xs text-[var(--text-secondary)]">
                    {pillar.label}
                  </span>
                  <span className="mt-1 block text-sm sm:text-base font-semibold text-[var(--text-primary)]">
                    {pillar.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
