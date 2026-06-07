import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'work', 'experience', 'certificates', 'blog', 'contact'];
      let current = 'hero';
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = sectionId;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav>
      <a href="#hero" className="nav-logo">
        <span></span>
        {portfolioData.profile.name}
      </a>
      <div className="nav-right">
        <ul className="nav-links">
          <li>
            <a
              href="#work"
              style={{ color: activeSection === 'work' ? 'var(--blue-bright)' : '' }}
            >
              work
            </a>
          </li>
          <li>
            <a
              href="#experience"
              style={{ color: activeSection === 'experience' ? 'var(--blue-bright)' : '' }}
            >
              experience
            </a>
          </li>
          <li>
            <a
              href="#certificates"
              style={{ color: activeSection === 'certificates' ? 'var(--blue-bright)' : '' }}
            >
              certificates
            </a>
          </li>
          <li>
            <a
              href="#blog"
              style={{ color: activeSection === 'blog' ? 'var(--blue-bright)' : '' }}
            >
              writing
            </a>
          </li>
          <li>
            <a
              href="#contact"
              style={{ color: activeSection === 'contact' ? 'var(--blue-bright)' : '' }}
            >
              contact
            </a>
          </li>
        </ul>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? (
            <svg className="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          ) : (
            <svg className="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
