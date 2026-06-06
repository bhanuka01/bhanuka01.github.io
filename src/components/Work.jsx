import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Work() {
  return (
    <section id="work">
      <div className="section-header fade-up">
        <span className="section-num">01</span>
        <h2>Experience & Projects</h2>
        <div className="section-line"></div>
      </div>

      <div className="projects-grid">
        {portfolioData.projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card fade-up"
          >
            <div className="project-icon">{project.icon}</div>
            <div className="project-title">{project.title}</div>
            <p className="project-desc">{project.desc}</p>
            <div className="tag-group">
              {project.tags.map((tag, tIdx) => (
                <span key={tIdx} className={`tag ${tag.color}`}>
                  {tag.label}
                </span>
              ))}
            </div>
            <span className="project-link">
              View Project →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
