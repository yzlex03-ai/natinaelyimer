import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profile';
import { getActiveSocialDirectory } from '../data/portfolioLogic';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = getActiveSocialDirectory();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-primary)] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[var(--border-subtle)]">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-3">
            <a
              href="#home"
              className="inline-flex items-baseline gap-2 font-serif text-2xl text-[var(--text-primary)]"
            >
              <span>
                {profileData.monogram}
                <span className="text-[var(--accent-gold)]">.</span>
              </span>
              <span>{profileData.name}</span>
            </a>
            <p className="font-mono text-xs tracking-widest text-[var(--accent-emerald)]">
              Law × Technology × AI
            </p>
            <p className="text-sm text-[var(--text-secondary)] max-w-sm leading-relaxed">
              Ethiopian law student, founder of YZlex, and technology builder exploring the
              intersection of legal education, artificial intelligence, and digital innovation.
            </p>
          </div>

          {/* Section Navigation */}
          <div className="md:col-span-3 space-y-3">
            <span className="block font-mono text-xs tracking-wider text-[var(--accent-gold)]">
              Navigation
            </span>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Expertise', href: '#expertise' },
                { label: 'Featured Project (YZlex)', href: '#projects' },
                { label: 'Experience & Education', href: '#experience' },
                { label: 'Journey & Philosophy', href: '#journey' },
                { label: 'Insights', href: '#insights' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Profiles */}
          <div className="md:col-span-4 space-y-3">
            <span className="block font-mono text-xs tracking-wider text-[var(--accent-gold)]">
              Verified Profiles &amp; Links
            </span>
            <ul className="space-y-2.5 text-sm">
              {socialLinks.map((item) => {
                const isExternal = item.url.startsWith('http');
                return (
                  <li key={item.id}>
                    <a
                      href={item.url}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--accent-emerald)] transition-colors"
                    >
                      <span>{item.label}:</span>
                      <span className="font-mono text-xs text-[var(--text-primary)]">
                        {item.handle}
                      </span>
                      {isExternal && <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-secondary)] font-mono tabular-nums">
            &copy; {currentYear} {profileData.name}. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:border-[var(--accent-gold)] transition-colors whitespace-nowrap shrink-0"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[var(--accent-gold)]" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};
