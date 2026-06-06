import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Leadership() {
  const { leadership } = portfolioData;

  return (
    <section id="leadership">
      <div className="section-header fade-up">
        <span className="section-num">02</span>
        <h2>Leadership & Community</h2>
        <div className="section-line"></div>
      </div>

      <div className="leadership-grid">
        <div className="leadership-main fade-up">
          <a href={leadership.org.link} target="_blank" rel="noopener noreferrer" className="org-badge">
            <div className="org-icon">{leadership.org.icon}</div>
            <div>
              <div className="org-name">{leadership.org.name}</div>
              <div className="org-sub">{leadership.org.sub}</div>
            </div>
          </a>
          <div className="leadership-title">{leadership.title}</div>
          <p className="leadership-desc">{leadership.desc}</p>
          <div className="leadership-roles">
            {leadership.roles.map((role, idx) => (
              <div key={idx} className="role-item">
                <div className="role-dot" style={{ backgroundColor: role.color }}></div>
                <span className="role-name">{role.name}</span>
                <span className="role-period">{role.period}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="leadership-side">
          {leadership.impact.map((item, idx) => (
            <div key={idx} className="impact-card fade-up">
              <div className="impact-num">{item.num}</div>
              <div className="impact-label">{item.label}</div>
            </div>
          ))}

          <div className="skills-visual fade-up">
            <div className="skills-title">Core Expertise</div>
            {leadership.expertise.map((skill, idx) => (
              <div key={idx} className="skill-bar">
                <div className="skill-bar-header">
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </div>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: skill.level }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
