import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Scale, Cpu, Shield } from 'lucide-react';
import { profileData } from '../data/profile';

export const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const showGenuinePhoto = Boolean(profileData.avatarUrl) && !imageError;

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden bg-architectural-grid"
    >
      {/* Subtle Ambient Radial Light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-36 right-0 w-[520px] h-[520px] rounded-full opacity-15 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, var(--accent-emerald) 0%, var(--accent-gold) 48%, transparent 75%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Split-Screen Hero Row with items-stretch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Editorial Identity & Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Small Introductory Label (Unboxed clean typography per Zero-Pill rule) */}
            <p className="font-mono text-xs tracking-[0.18em] text-[var(--accent-gold)]">
              {profileData.hero.eyebrow}
            </p>

            {/* Main Title & Primary Headline */}
            <div className="space-y-3">
              <p className="text-sm sm:text-base font-semibold tracking-wide text-[var(--text-secondary)]">
                {profileData.hero.title}
              </p>
              <h1
                id="hero-title"
                className="font-serif text-4xl sm:text-5xl lg:text-[58px] leading-[1.08] tracking-tight text-[var(--text-primary)] max-w-2xl"
                style={{ textWrap: 'balance' }}
              >
                {profileData.hero.headline}
              </h1>
            </div>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)] max-w-2xl">
              {profileData.hero.description}
            </p>

            {/* Professional Identity Line (No thick left border) */}
            <p className="font-mono text-xs sm:text-sm text-[var(--accent-emerald)] pt-1">
              {profileData.hero.identityLine}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href={profileData.hero.primaryCta.href}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg text-sm font-semibold bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
              >
                <span>{profileData.hero.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={profileData.hero.secondaryCta.href}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg text-sm font-medium border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:border-[var(--accent-gold)] transition-colors whitespace-nowrap shrink-0"
              >
                <span>{profileData.hero.secondaryCta.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[var(--accent-gold)]" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Intersection Visual Composition */}
          <div className="lg:col-span-5 flex">
            <div className="w-full rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-6 sm:p-8 flex flex-col justify-between">
              {/* Top Minimal Header */}
              <div className="flex items-center justify-between gap-2 pb-4 border-b border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)]">
                <span className="whitespace-nowrap">Law · AI · Systems</span>
                <span className="text-[var(--accent-gold)] whitespace-nowrap">{profileData.domain}</span>
              </div>

              {/* Centerpiece: Genuine Photo (when configured) OR Bespoke NY Monogram & Node Matrix */}
              <div className="relative flex flex-col items-center justify-center my-6">
                <svg
                  className="w-full h-56 sm:h-64"
                  viewBox="0 0 400 240"
                  fill="none"
                  role="img"
                  aria-label="Diagram connecting Ethiopian Law, Applied AI, and Web and Cybersecurity around Natinael Yimer's NY monogram"
                >
                  {/* Subtle Orbit Rings */}
                  <circle
                    cx="200"
                    cy="120"
                    r="90"
                    stroke="var(--border-subtle)"
                    strokeDasharray="4 4"
                  />
                  <circle
                    cx="200"
                    cy="120"
                    r="64"
                    stroke="var(--border-accent)"
                    strokeWidth="1"
                  />

                  {/* Symmetrical Connection Lines from Center (200, 120) */}
                  <line
                    x1="200"
                    y1="120"
                    x2="76"
                    y2="37"
                    stroke="var(--accent-emerald)"
                    strokeOpacity="0.6"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="200"
                    y1="120"
                    x2="324"
                    y2="37"
                    stroke="var(--accent-gold)"
                    strokeOpacity="0.6"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="200"
                    y1="120"
                    x2="200"
                    y2="215"
                    stroke="var(--accent-emerald)"
                    strokeOpacity="0.6"
                    strokeWidth="1.5"
                  />

                  {/* Node 1: Ethiopian Law */}
                  <g transform="translate(20, 20)">
                    <rect
                      width="112"
                      height="34"
                      rx="6"
                      fill="var(--bg-primary)"
                      stroke="var(--border-accent)"
                    />
                    <text
                      x="56"
                      y="21"
                      textAnchor="middle"
                      fill="var(--text-primary)"
                      fontFamily="JetBrains Mono, monospace"
                      fontSize="11"
                    >
                      Ethiopian Law
                    </text>
                  </g>

                  {/* Node 2: Applied AI */}
                  <g transform="translate(268, 20)">
                    <rect
                      width="112"
                      height="34"
                      rx="6"
                      fill="var(--bg-primary)"
                      stroke="var(--border-accent)"
                    />
                    <text
                      x="56"
                      y="21"
                      textAnchor="middle"
                      fill="var(--text-primary)"
                      fontFamily="JetBrains Mono, monospace"
                      fontSize="11"
                    >
                      Applied AI
                    </text>
                  </g>

                  {/* Node 3: Web & Cybersecurity */}
                  <g transform="translate(120, 198)">
                    <rect
                      width="160"
                      height="34"
                      rx="6"
                      fill="var(--bg-primary)"
                      stroke="var(--border-subtle)"
                    />
                    <text
                      x="80"
                      y="21"
                      textAnchor="middle"
                      fill="var(--text-primary)"
                      fontFamily="JetBrains Mono, monospace"
                      fontSize="11"
                    >
                      Web &amp; Cybersecurity
                    </text>
                  </g>
                </svg>

                {/* Central Monogram or Genuine Profile Photo */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {showGenuinePhoto ? (
                    <img
                      src={profileData.avatarUrl!}
                      alt={profileData.avatarAlt}
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                      className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover border border-[var(--accent-gold)]"
                    />
                  ) : (
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl border border-[var(--border-accent)] bg-[var(--bg-primary)] flex flex-col items-center justify-center">
                      <span className="font-serif text-4xl sm:text-5xl tracking-tight text-[var(--text-primary)]">
                        {profileData.monogram}
                        <span className="text-[var(--accent-gold)]">.</span>
                      </span>
                      <span className="mt-1 font-mono text-[10px] tracking-widest text-[var(--accent-emerald)]">
                        Founder
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Domain Strip separated by hairlines (No nested cards) */}
              <div className="pt-5 border-t border-[var(--border-subtle)] grid grid-cols-3 divide-x divide-[var(--border-subtle)] text-center">
                <div className="px-2">
                  <Scale
                    className="w-4 h-4 mx-auto mb-1.5 text-[var(--accent-gold)]"
                    aria-hidden="true"
                  />
                  <span className="block text-xs font-medium text-[var(--text-primary)]">
                    LegalTech
                  </span>
                </div>
                <div className="px-2">
                  <Cpu
                    className="w-4 h-4 mx-auto mb-1.5 text-[var(--accent-emerald)]"
                    aria-hidden="true"
                  />
                  <span className="block text-xs font-medium text-[var(--text-primary)]">
                    AI Systems
                  </span>
                </div>
                <div className="px-2">
                  <Shield
                    className="w-4 h-4 mx-auto mb-1.5 text-[var(--text-secondary)]"
                    aria-hidden="true"
                  />
                  <span className="block text-xs font-medium text-[var(--text-primary)]">
                    Cybersecurity
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Key Credentials Row Below the Hero Split */}
        <div className="mt-12 pt-8 border-t border-[var(--border-subtle)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <span className="block font-mono text-xs text-[var(--text-secondary)]">
              Flagship Venture
            </span>
            <a
              href="https://yzlex.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent-emerald)] transition-colors"
            >
              <span>Founder &amp; CEO of YZlex</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[var(--accent-gold)]" aria-hidden="true" />
            </a>
          </div>

          <div>
            <span className="block font-mono text-xs text-[var(--text-secondary)]">
              Academic Study
            </span>
            <span className="mt-1 block text-sm font-semibold text-[var(--text-primary)]">
              {profileData.academic.currentStatusLabel} · {profileData.academic.institution}
            </span>
          </div>

          <div>
            <span className="block font-mono text-xs text-[var(--text-secondary)]">
              Campus Leadership
            </span>
            <span className="mt-1 block text-sm font-semibold text-[var(--text-primary)]">
              FALAS Ethiopia Campus Ambassador
            </span>
          </div>

          <div>
            <span className="block font-mono text-xs text-[var(--text-secondary)]">
              Location &amp; Focus
            </span>
            <span className="mt-1 block text-sm font-semibold text-[var(--text-primary)]">
              {profileData.location} · Law, AI &amp; Digital Innovation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
