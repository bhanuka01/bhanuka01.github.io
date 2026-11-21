import { portfolioData } from '../data/portfolioData';

function ProjectIcon({ title }) {
  const lower = title.toLowerCase();
  const isMobile = lower.includes('exam') || lower.includes('mobile');
  const isAnalytics = lower.includes('forecast') || lower.includes('dashboard') || lower.includes('cse');

  if (isMobile) {
    return (
      <svg className="project-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="0" />
        <path d="M12 18h.01" />
        <path d="M9 5h6" />
      </svg>
    );
  }

  if (isAnalytics) {
    return (
      <svg className="project-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3v18h18" />
        <path d="M7 15l4-4 3 3 6-7" />
        <path d="M16 7h4v4" />
      </svg>
    );
  }

  return (
    <svg className="project-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="3" width="20" height="14" rx="0" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <circle cx="6" cy="7" r="1" fill="currentColor" />
      <circle cx="10" cy="7" r="1" fill="currentColor" />
      <circle cx="14" cy="7" r="1" fill="currentColor" />
    </svg>
  );
}

function ActionIcon({ type }) {
  if (type === 'playstore') {
    return (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
      </svg>
    );
  }

  if (type === 'github') {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    );
  }

  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M7 17L17 7M17 7H7M17 7V17" />
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
          <article key={idx} className="project-card fade-up">
            <div className="project-top">
              <div className="theme-icon-box">
                <ProjectIcon title={project.title} />
              </div>
              {project.metric && (
                <span className="project-metric-badge">
                  <span className="project-metric-dot" aria-hidden="true"></span>
                  {project.metric}
                </span>
              )}
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
              {project.actions.map((action, aIdx) => {
                const isPrimary = action.type === 'site';
                return (
                  <a
                    key={aIdx}
                    href={action.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`project-action-btn ${isPrimary ? 'project-action-primary' : 'project-action-secondary'}`}
                    aria-label={`${project.title} — ${action.label}`}
                  >
                    {!isPrimary && <ActionIcon type={action.type} />}
                    <span>{action.label}</span>
                    {isPrimary && <ActionIcon type={action.type} />}
                  </a>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
