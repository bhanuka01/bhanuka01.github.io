import { portfolioData } from '../data/portfolioData';

export default function Blog() {
  return (
    <section id="blog" className="section-container">
      <div className="section-header fade-up">
        <div className="section-tag-row">
          <span className="section-num">03</span>
          <span className="section-divider-dot">/</span>
          <span className="section-category">Editorial</span>
        </div>
        <h2 className="section-heading">
          Writing <span className="serif-title">&amp; Insights</span>
        </h2>
        <div className="section-rule"></div>
      </div>

      <div className="articles-list fade-up">
        {portfolioData.articles.map((article, idx) => {
          const displayNum = String(idx + 1).padStart(2, '0');
          return (
            <a
              key={idx}
              href={article.link}
              className="article-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="article-num">{displayNum}</span>
              <div className="article-content">
                <h3 className="article-title">{article.title}</h3>
                <div className="article-meta">{article.date}</div>
              </div>
              <span className="monochrome-tag">{article.tag}</span>
              <span className="article-arrow-box">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </span>
            </a>
          );
        })}
      </div>

      <div className="section-bottom-action fade-up">
        <a
          href={portfolioData.socials.medium}
          className="btn-ghost"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Read all publications on Medium</span>
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </a>
      </div>
    </section>
  );
}
