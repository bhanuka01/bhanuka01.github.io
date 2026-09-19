import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experiences, education } = portfolioData;

  return (
    <section id="experience" className="section-container">
      <div className="section-header fade-up">
        <div className="section-tag-row">
          <span className="section-num">02</span>
          <span className="section-divider-dot">/</span>
          <span className="section-category">Trajectory</span>
        </div>
        <h2 className="section-heading">
          Experience <span className="serif-title">&amp; Education</span>
        </h2>
        <div className="section-rule"></div>
      </div>

      <div className="exp-edu-grid">
        {/* Left Column: Experience */}
        <div className="exp-column">
          <div className="column-title fade-up">
            <div className="theme-icon-box sm">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <h3>Professional Experience</h3>
          </div>

          <div className="experience-container">
            {experiences.map((exp, expIdx) => (
              <div key={expIdx} className="experience-item fade-up">
                <div className="exp-org-header">
                  <div className="exp-org-info">
                    <div className="theme-icon-box">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="exp-company">{exp.company}</h4>
                      <div className="exp-meta">
                        <span>{exp.location}</span>
                        <span className="separator">•</span>
                        <span>{exp.type}</span>
                        <span className="separator">•</span>
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="exp-timeline">
                  {exp.roles.map((role, roleIdx) => (
                    <div key={roleIdx} className="timeline-node">
                      <div className="timeline-connector">
                        <div className="timeline-dot"></div>
                        {roleIdx < exp.roles.length - 1 && <div className="timeline-line"></div>}
                      </div>
                      <div className="timeline-content">
                        <div className="role-header">
                          <h5 className="role-title">{role.title}</h5>
                          <span className="role-date">{role.period} · {role.duration}</span>
                        </div>
                        <div className="role-skills">
                          {role.skills.map((skill, sIdx) => (
                            <span key={sIdx} className="monochrome-tag sm">{skill}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Education */}
        <div className="edu-column">
          <div className="column-title fade-up">
            <div className="theme-icon-box sm">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
              </svg>
            </div>
            <h3>Academic Background</h3>
          </div>

          <div className="education-container">
            {education.map((edu, eduIdx) => (
              <div key={eduIdx} className="education-item fade-up">
                <div className="edu-header">
                  <div className="theme-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="edu-institution">{edu.institution}</h4>
                    <div className="edu-degree">{edu.degree}</div>
                    <div className="edu-period">{edu.period}</div>
                  </div>
                </div>
                {edu.skills && edu.skills.length > 0 && (
                  <div className="edu-skills">
                    <div className="edu-skills-label">Core Competencies</div>
                    <div className="edu-skills-group">
                      {edu.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="monochrome-tag sm">{skill}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
