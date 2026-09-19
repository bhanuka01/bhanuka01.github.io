import { portfolioData } from '../data/portfolioData';

function ProjectIcon({ title }) {
  const isMobile = title.toLowerCase().includes('exam') || title.toLowerCase().includes('mobile');

  if (isMobile) {
    return (
      <svg className="project-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="3" />
        <path d="M12 18h.01" />
        <path d="M9 5h6" />
      </svg>
    );
  }

  return (
    <svg className="project-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <circle cx="6" cy="7" r="1" fill="currentColor" />
      <circle cx="10" cy="7" r="1" fill="currentColor" />
      <circle cx="14" cy="7" r="1" fill="currentColor" />
    </svg>
  );
}

export default function Work() {
  return (
    <section id="work" className="section-container">
      <div className="section-header fade-up">
        <div className="section-tag-row">
          <span className="section-num">01</span>
          <span className="section-divider-dot">/</span>
          <span className="section-category">Portfolio</span>
        </div>
        <h2 className="section-heading">
          Selected <span className="serif-title">Works</span>
        </h2>
        <div className="section-rule"></div>
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
            <div className="project-top">
              <div className="theme-icon-box">
                <ProjectIcon title={project.title} />
              </div>
              <span className="project-arrow-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </span>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.desc}</p>

            <div className="tag-group">
              {project.tags.map((tag, tIdx) => (
                <span key={tIdx} className="monochrome-tag">
                  {tag.label}
                </span>
              ))}
            </div>

            <div className="project-card-footer">
              <span className="project-link-label">Explore Project</span>
              <span className="project-link-line"></span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
