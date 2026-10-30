import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Expertise } from './components/Expertise';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Journey } from './components/Journey';
import { Insights } from './components/Insights';
import { CurrentFocus } from './components/CurrentFocus';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import {
  PortfolioTheme,
  resolveInitialTheme,
  getNextTheme,
} from './data/portfolioLogic';

export default function App() {
  const [theme, setTheme] = useState<PortfolioTheme>(() => {
    if (typeof window !== 'undefined') {
      return resolveInitialTheme(window.localStorage.getItem('ny-portfolio-theme'));
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    window.localStorage.setItem('ny-portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => getNextTheme(prev));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[#78B99B] selection:text-[#0B1012]">
      {/* Skip to main content link for keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#78B99B] focus:text-[#0B1012] focus:font-semibold"
      >
        Skip to main content
      </a>

      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main id="main-content" className="flex-grow">
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <Experience />
        <Journey />
        <Insights />
        <CurrentFocus />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
