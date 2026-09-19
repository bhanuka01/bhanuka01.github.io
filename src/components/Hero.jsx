import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { profile, socials } = portfolioData;
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-left">
        <div className="status-badge fade-up">
          <span className="status-dot"></span>
          <span className="status-text">{profile.badge}</span>
        </div>

        <h1 className="hero-title fade-up">
          Bridging <span className="serif-accent">Data Science</span>
          <br />
          <span className="hero-amp">&amp;</span> <span className="serif-accent">Fluid UI</span> Design
        </h1>

        <p className="hero-bio fade-up">
          I'm a <span className="text-highlight">Financial Mathematics &amp; Statistics</span> undergraduate at the University of Ruhuna, engineering at the intersection of <span className="text-highlight">AI/ML systems</span> and modern, cross-platform mobile architectures. I turn mathematical complexity into calm, fluid user experiences.
        </p>

        <div className="hero-pills fade-up">
          {profile.pills.map((pill, idx) => (
            <span key={idx} className="theme-pill">
              {pill}
            </span>
          ))}
        </div>

        <div className="hero-actions fade-up">
          <a href="#work" className="btn-primary">
            <span>Selected Work</span>
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
          <a href="#contact" className="btn-ghost">
            <span>Get in Touch</span>
          </a>
        </div>

        <div className="social-strip fade-up">
          <a href={socials.github} className="social-pill" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </a>
          <a href={socials.linkedin} className="social-pill" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span>LinkedIn</span>
          </a>
          <a href={socials.medium} className="social-pill" target="_blank" rel="noopener noreferrer" aria-label="Medium">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
            </svg>
            <span>Medium</span>
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="portrait-card">
          <div className="portrait-frame">
            <div className="bracket bracket-tl"></div>
            <div className="bracket bracket-tr"></div>
            <div className="bracket bracket-bl"></div>
            <div className="bracket bracket-br"></div>
            
            {profile.avatar && !imageError ? (
              <img
                src={profile.avatar}
                alt={profile.name}
                className="profile-photo"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                style={{
                  display: imageLoaded ? 'block' : 'none'
                }}
              />
            ) : null}

            {(!profile.avatar || imageError || !imageLoaded) && (
              <div className="portrait-fallback">
                <div className="fallback-monogram">BD</div>
                <div className="fallback-label">{profile.name}</div>
              </div>
            )}

            <div className="portrait-glass-overlay"></div>
          </div>

          <div className="portrait-stats">
            <div className="stat-capsule">
              <span className="stat-value">{profile.stats.yearsDev}</span>
              <span className="stat-caption">Years Experience</span>
            </div>
            <div className="stat-capsule">
              <span className="stat-value">{profile.stats.projectsCount}</span>
              <span className="stat-caption">Major Builds</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
