import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');

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

  return (
    <nav>
      <a href="#hero" className="nav-logo">
        <span></span>
        {portfolioData.profile.name}
      </a>
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
    </nav>
  );
}
