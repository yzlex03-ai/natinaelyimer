import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { profileData } from '../data/profile';
import { PortfolioTheme } from '../data/portfolioLogic';

interface NavbarProps {
  theme: PortfolioTheme;
  onToggleTheme: () => void;
}

interface NavItem {
  label: string;
  href: string;
  sectionId: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home', sectionId: 'home' },
  { label: 'About', href: '#about', sectionId: 'about' },
  { label: 'Expertise', href: '#expertise', sectionId: 'expertise' },
  { label: 'Projects', href: '#projects', sectionId: 'projects' },
  { label: 'Journey', href: '#journey', sectionId: 'journey' },
  { label: 'Insights', href: '#insights', sectionId: 'insights' },
  { label: 'Contact', href: '#contact', sectionId: 'contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPos = window.scrollY + 180;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].sectionId);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled
          ? 'bg-[var(--bg-primary)]/95 backdrop-blur-md border-b border-[var(--border-subtle)] py-3.5'
          : 'bg-[var(--bg-primary)]/80 backdrop-blur-sm border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#home"
          className="font-serif text-lg sm:text-xl font-medium tracking-tight text-[var(--text-primary)] whitespace-nowrap shrink-0 hover:text-[var(--accent-gold)] transition-colors"
          aria-label={`${profileData.name} Home`}
        >
          NY<span className="text-[var(--accent-gold)]">.</span>{' '}
          <span className="font-sans text-sm sm:text-base font-semibold tracking-normal ml-1">
            {profileData.name}
          </span>
        </a>

        {/* Zone 2: Clean Typography Navigation Links */}
        <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => {
            const isActive = activeSection === item.sectionId;
            return (
              <a
                key={item.sectionId}
                href={item.href}
                className={`text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 py-1 border-b-2 ${
                  isActive
                    ? 'text-[var(--text-primary)] border-[var(--accent-gold)]'
                    : 'text-[var(--text-secondary)] border-transparent hover:text-[var(--text-primary)]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Theme Toggle & Primary Contact Action */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-wide bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-2.5 shrink-0">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-primary)]"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="lg:hidden bg-[var(--bg-primary)] border-b border-[var(--border-subtle)] px-4 pt-4 pb-6 shadow-xl"
        >
          <nav aria-label="Mobile Section Links" className="flex flex-col divide-y divide-[var(--border-subtle)]">
            {navItems.map((item) => {
              const isActive = activeSection === item.sectionId;
              return (
                <a
                  key={item.sectionId}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-3 px-2 text-base font-medium flex items-center justify-between ${
                    isActive
                      ? 'text-[var(--accent-emerald)] font-semibold'
                      : 'text-[var(--text-primary)]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="font-mono text-xs text-[var(--accent-gold)]">Active</span>
                  )}
                </a>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-[var(--text-primary)] text-[var(--bg-primary)] whitespace-nowrap"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="https://yzlex.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-medium border border-[var(--border-accent)] text-[var(--text-primary)] whitespace-nowrap"
            >
              <span>Visit YZlex</span>
              <ArrowUpRight className="w-4 h-4 text-[var(--accent-gold)]" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
