import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { socials } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-text">
        © {currentYear} Bhanuka Dilshan · Built with precision
      </div>
      <div className="footer-links">
        <a href={socials.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={socials.medium} target="_blank" rel="noopener noreferrer">Medium</a>
        <a href="https://www.math.ruh.ac.lk/adss" target="_blank" rel="noopener noreferrer">ADSS</a>
      </div>
    </footer>
  );
}
