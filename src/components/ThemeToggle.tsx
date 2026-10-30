import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { PortfolioTheme } from '../data/portfolioLogic';

interface ThemeToggleProps {
  theme: PortfolioTheme;
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={theme === 'dark' ? 'Switch to Warm Ivory light theme' : 'Switch to Dark theme'}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:border-[var(--accent-gold)] transition-colors duration-150 shrink-0"
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-[var(--accent-gold)]" aria-hidden="true" />
      ) : (
        <Moon className="w-4 h-4 text-[var(--text-primary)]" aria-hidden="true" />
      )}
    </button>
  );
};
