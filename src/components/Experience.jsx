import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experiences, education } = portfolioData;

  return (
    <section id="experience">
      <div className="section-header fade-up">
        <span className="section-num">02</span>
        <h2>Experience & Education</h2>
        <div className="section-line"></div>
      </div>

      <div className="exp-edu-grid">
        {/* Left Column: Experience */}
        <div className="exp-column">
          <div className="column-title fade-up">
            <span className="column-icon">💼</span>
            <h3>Professional Experience</h3>
          </div>
          
          <div className="experience-container">
            {experiences.map((exp, expIdx) => (
              <div key={expIdx} className="experience-item fade-up">
                <div className="exp-org-header">
                  <div className="exp-org-info">
                    <div className="exp-org-icon">🎓</div>
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
                            <span key={sIdx} className="tag blue">{skill}</span>
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
            <span className="column-icon">🏫</span>
            <h3>Education</h3>
          </div>

          <div className="education-container">
            {education.map((edu, eduIdx) => (
              <div key={eduIdx} className="education-item fade-up">
                <div className="edu-header">
                  <div className="edu-icon">🏫</div>
                  <div>
                    <h4 className="edu-institution">{edu.institution}</h4>
                    <div className="edu-degree">{edu.degree}</div>
                    <div className="edu-period">{edu.period}</div>
                  </div>
                </div>
                {edu.skills && edu.skills.length > 0 && (
                  <div className="edu-skills">
                    <div className="edu-skills-label">Core Skills:</div>
                    <div className="edu-skills-group">
                      {edu.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="tag blue">{skill}</span>
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
