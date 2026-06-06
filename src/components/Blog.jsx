import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Blog() {
  return (
    <section id="blog">
      <div className="section-header fade-up">
        <span className="section-num">03</span>
        <h2>Writing & Articles</h2>
        <div className="section-line"></div>
      </div>

      <div className="articles-list fade-up">
        {portfolioData.articles.map((article, idx) => {
          const displayNum = String(idx + 1).padStart(2, '0');
          return (
            <a key={idx} href={article.link} className="article-item" target="_blank" rel="noopener noreferrer">
              <span className="article-num">{displayNum}</span>
              <div className="article-content">
                <div className="article-title">{article.title}</div>
                <div className="article-meta">{article.date}</div>
              </div>
              <span className="article-tag">{article.tag}</span>
              <span className="article-arrow">→</span>
            </a>
          );
        })}
      </div>

      <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
        <a
          href={portfolioData.socials.medium}
          className="btn-ghost"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', fontSize: '0.85rem' }}
        >
          All articles on Medium
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
        </a>
      </div>
    </section>
  );
}
