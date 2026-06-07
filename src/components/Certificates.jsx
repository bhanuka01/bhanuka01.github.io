import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

// Helper component to render beautiful stylized brand logos
function IssuerLogo({ issuer }) {
  const normalized = issuer.toLowerCase();
  
  if (normalized.includes('google')) {
    return (
      <svg className="issuer-svg" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#4285F4' }}>
        <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114A5.99 5.99 0 0 1 8 12.5a5.99 5.99 0 0 1 5.99-6.002c1.478 0 2.82.54 3.865 1.427l3.23-3.23A10.187 10.187 0 0 0 13.99 2 10.5 10.5 0 0 0 3.5 12.5a10.5 10.5 0 0 0 10.49 10.5c5.78 0 10.01-4.056 10.01-10.185 0-.6-.054-1.17-.16-1.53H12.24Z"/>
      </svg>
    );
  }
  if (normalized.includes('aws') || normalized.includes('amazon')) {
    return (
      <svg className="issuer-svg" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#FF9900' }}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.09 14.14c-1.04.53-2.12.75-3.08.75-1.92 0-2.82-1.04-2.82-2.73 0-2.27 1.62-3.41 4.54-3.41h1.36v-.5c0-.98-.44-1.51-1.63-1.51-.97 0-1.92.35-2.61.94l-.77-1.12c.98-.83 2.37-1.22 3.73-1.22 2.34 0 3.58 1.15 3.58 3.29v4.21c0 .94.34 1.39.67 1.74l-.94.94c-.45-.4-.76-1-.97-1.41z"/>
      </svg>
    );
  }
  if (normalized.includes('microsoft')) {
    return (
      <svg className="issuer-svg" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#00A4EF' }}>
        <path d="M1 1h10v10H1V1zm12 0h10v10H13V1zM1 13h10v10H1V13zm13 0h10v10H13V13z"/>
      </svg>
    );
  }
  if (normalized.includes('deeplearning')) {
    return (
      <svg className="issuer-svg" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#007DFF' }}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
      </svg>
    );
  }
  if (normalized.includes('neo4j')) {
    return (
      <svg className="issuer-svg" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#008CC1' }}>
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5a1.5 1.5 0 1 1-1.5-1.5 1.5 1.5 0 0 1 1.5 1.5zm0-4.5a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0z"/>
      </svg>
    );
  }
  if (normalized.includes('kodekloud')) {
    return (
      <svg className="issuer-svg" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#24C1E0' }}>
        <path d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
      </svg>
    );
  }
  if (normalized.includes('astronomer')) {
    return (
      <svg className="issuer-svg" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#E23434' }}>
        <path d="M12 2L2 22h20L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2v-2zm0-6h2v4h-2v-4z"/>
      </svg>
    );
  }
  if (normalized.includes('udemy')) {
    return (
      <svg className="issuer-svg" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#A435F0' }}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
      </svg>
    );
  }
  if (normalized.includes('columbia')) {
    return (
      <svg className="issuer-svg" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#002D62' }}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14h-9v-1.5h9V16zm0-3.5h-9v-1.5h9v1.5zm0-3.5h-9V7.5h9V9z"/>
      </svg>
    );
  }
  if (normalized.includes('kaggle')) {
    return (
      <svg className="issuer-svg" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#20BEFF' }}>
        <path d="M18.8 22.5L11.5 15l7.3-7.5h-3.6l-5.6 5.8V2.5H6v20h3.6v-7.8l5.6 7.8H18.8z"/>
      </svg>
    );
  }
  // Fallback icon for any other issuer
  return (
    <svg className="issuer-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--blue)' }}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}

export default function Certificates() {
  const { certifications } = portfolioData;
  const [showAll, setShowAll] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    if (!showAll) {
      setShowAll(true);
      setTimeout(() => {
        setExpanded(true);
      }, 50);
    } else {
      setExpanded(false);
      setShowAll(false);
    }
  };

  const displayedCertificates = showAll ? certifications : certifications.slice(0, 6);

  return (
    <section id="certificates">
      <div className="section-header fade-up">
        <span className="section-num">03</span>
        <h2>Licenses & Certifications</h2>
        <div className="section-line"></div>
      </div>

      <div className="certificates-grid">
        {displayedCertificates.map((cert, idx) => (
          <div key={idx} className={`cert-card fade-up ${(expanded && idx >= 6) ? 'visible' : ''}`}>
            <div className="cert-header">
              <div className="cert-logo-container">
                <IssuerLogo issuer={cert.issuer} />
              </div>
              <div className="cert-issuer-info">
                <div className="cert-issuer">{cert.issuer}</div>
                <div className="cert-date">Issued {cert.date}</div>
              </div>
            </div>
            
            <h3 className="cert-title">{cert.title}</h3>
            
            {cert.credentialId && (
              <div className="cert-credential">
                <span className="cert-cred-label">Credential ID:</span>
                <code className="cert-cred-value">{cert.credentialId}</code>
              </div>
            )}

            {cert.skills && cert.skills.length > 0 && (
              <div className="cert-skills-group">
                {cert.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="cert-skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {certifications.length > 6 && (
        <div className="cert-actions fade-up">
          <button 
            className="btn-ghost" 
            onClick={handleToggle}
          >
            {showAll ? 'Show Less' : `Show All Certificates (${certifications.length})`}
          </button>
        </div>
      )}
    </section>
  );
}
