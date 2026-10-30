import React, { useState } from 'react';
import { Mail, ArrowUpRight, Copy, Check } from 'lucide-react';
import { profileData } from '../data/profile';
import { getActiveSocialDirectory } from '../data/portfolioLogic';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const activeLinks = getActiveSocialDirectory();

  const handleCopyEmail = async () => {
    setCopied(true);
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(profileData.contact.email);
      }
    } catch {
      // Fallback handled by visual state
    }
    setTimeout(() => setCopied(false), 4000);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 md:py-32 border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Call to Action */}
          <div className="lg:col-span-7 space-y-6">
            <p className="font-mono text-xs tracking-wider text-[var(--accent-gold)]">
              {profileData.contact.sectionLabel}
            </p>

            <h2
              id="contact-heading"
              className="font-serif text-4xl sm:text-6xl tracking-tight text-[var(--text-primary)]"
              style={{ textWrap: 'balance' }}
            >
              {profileData.contact.heading}
            </h2>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl">
              {profileData.contact.description}
            </p>

            {/* Working Mailto & Copy Email Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${profileData.contact.email}?subject=Hello%20Natinael%20%E2%80%94%20Collaboration%20%2F%20Inquiry`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg text-sm font-semibold bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>Email {profileData.contact.email}</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                aria-live="polite"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg text-sm font-mono border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:border-[var(--accent-gold)] transition-colors whitespace-nowrap shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[var(--accent-emerald)]" aria-hidden="true" />
                    <span className="text-[var(--accent-emerald)]">
                      Copied {profileData.contact.email}
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[var(--accent-gold)]" aria-hidden="true" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Verified Channels Directory (Single-Elevation Container with Hairline Dividers) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)] divide-y divide-[var(--border-subtle)] overflow-hidden">
              {activeLinks.map((item) => {
                const isExternal = item.url.startsWith('http');
                return (
                  <a
                    key={item.id}
                    href={item.url}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="group flex items-center justify-between p-5 hover:bg-[var(--bg-primary)]/50 transition-colors"
                  >
                    <div>
                      <span className="block text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-emerald)] transition-colors">
                        {item.label}
                      </span>
                      <span className="block font-mono text-xs text-[var(--text-secondary)] mt-0.5">
                        {item.handle} · {item.description}
                      </span>
                    </div>
                    <ArrowUpRight
                      className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--accent-gold)] transition-colors shrink-0 ml-4"
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
