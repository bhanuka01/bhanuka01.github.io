import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { socials } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-left">
          <span className="footer-copyright">
            &copy; {currentYear} {portfolioData.profile.name}
          </span>
          <span className="footer-sep">&bull;</span>
          <span className="footer-tagline">Crafted with intentional minimalism</span>
        </div>

        <div className="footer-links">
          <a href={socials.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={socials.medium} target="_blank" rel="noopener noreferrer">Medium</a>
          <a href="#hero" className="footer-top-link">
            <span>Top</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
