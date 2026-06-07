import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { profile, socials } = portfolioData;
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section id="hero">
      <div className="hero-left">
        {/* <div className="hero-badge" style={{ animationDelay: '0s' }}>
          ✦ {profile.badge}
        </div> */}
        <h1 style={{ animationDelay: '0.1s' }}>
          Bridging<br />
          <span className="accent">Data Science</span><br />
          & Fluid UI Design
        </h1>
        <p className="hero-bio" style={{ animationDelay: '0.2s' }}>
          I'm a <strong>Financial Mathematics & Statistics</strong> undergraduate at the University of Ruhuna, building at the intersection of <strong>AI/ML engineering</strong> and cross-platform mobile development. I turn complex data into elegant, functional experiences.
        </p>
        <div className="hero-pills" style={{ animationDelay: '0.3s' }}>
          {profile.pills.map((pill, idx) => (
            <span key={idx} className="pill">
              {pill}
            </span>
          ))}
        </div>
        <div className="hero-actions" style={{ animationDelay: '0.4s' }}>
          <a href="#work" className="btn-primary">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 12h18M13 6l6 6-6 6" />
            </svg>
            View My Work
          </a>
          <a href="#contact" className="btn-ghost">
            Get in Touch
          </a>
        </div>
        <div className="social-strip" style={{ animationDelay: '0.5s' }}>
          <a href={socials.github} className="social-link" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a href={socials.linkedin} className="social-link" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <a href={socials.medium} className="social-link" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
            </svg>
            Medium
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="photo-frame">
          <div className="photo-bg-card"></div>
          <div className="photo-wrapper">
            <div className="corner corner-tl"></div>
            <div className="corner corner-tr"></div>
            <div className="corner corner-bl"></div>
            <div className="corner corner-br"></div>
            {profile.avatar && !imageError ? (
              <img
                src={profile.avatar}
                alt={profile.name}
                className="profile-image"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: imageLoaded ? 'block' : 'none'
                }}
              />
            ) : null}
            {(!profile.avatar || imageError || !imageLoaded) && (
              <div className="photo-placeholder">
                <div className="avatar-initials">BD</div>
                <div className="avatar-name">BHANUKA DILSHAN</div>
              </div>
            )}
          </div>
          <div className="photo-stats">
            <div className="stat-card">
              <div className="stat-num">{profile.stats.yearsDev}</div>
              <div className="stat-label">Years Dev</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">{profile.stats.projectsCount}</div>
              <div className="stat-label">Projects</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
