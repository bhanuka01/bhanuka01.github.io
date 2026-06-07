import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { contact } = portfolioData;
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const isSending = status === 'sending';
  const isSuccess = status === 'success';
  const isError   = status === 'error';

  return (
    <section id="contact">
      <div className="section-header fade-up">
        <span className="section-num">04</span>
        <h2>Get in Touch</h2>
        <div className="section-line"></div>
      </div>

      <div className="contact-grid">
        <div className="contact-info fade-up">
          <h3>Let's build something meaningful together.</h3>
          <p>{contact.desc}</p>
          <div className="contact-links">
            <a href={`mailto:${contact.email}`} className="contact-link-item">
              <div className="contact-link-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--blue-bright)" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="contact-link-text">{contact.email}</div>
                <div className="contact-link-sub">Email me directly</div>
              </div>
            </a>

            <a href={contact.linkedin} className="contact-link-item" target="_blank" rel="noopener noreferrer">
              <div className="contact-link-icon">
                <svg viewBox="0 0 24 24" fill="var(--blue-bright)">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div>
                <div className="contact-link-text">LinkedIn</div>
                <div className="contact-link-sub">Connect professionally</div>
              </div>
            </a>

            <a href={contact.github} className="contact-link-item" target="_blank" rel="noopener noreferrer">
              <div className="contact-link-icon">
                <svg viewBox="0 0 24 24" fill="var(--blue-bright)">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
              <div>
                <div className="contact-link-text">GitHub</div>
                <div className="contact-link-sub">Explore my code</div>
              </div>
            </a>
          </div>
        </div>

        <form className="contact-form fade-up" onSubmit={handleSubmit}>
          {/* Web3Forms hidden access key */}
          <input type="hidden" name="access_key" value="99146756-1026-48ad-97a7-900691ffc536" />
          {/* Honeypot spam filter */}
          <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

          <div className="form-row">
            <div className="form-group">
              <label>NAME</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                disabled={isSending || isSuccess}
              />
            </div>
            <div className="form-group">
              <label>EMAIL</label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                disabled={isSending || isSuccess}
              />
            </div>
          </div>
          <div className="form-group">
            <label>SUBJECT</label>
            <input
              type="text"
              name="subject"
              placeholder="What's this about?"
              disabled={isSending || isSuccess}
            />
          </div>
          <div className="form-group">
            <label>MESSAGE</label>
            <textarea
              name="message"
              placeholder="Tell me about your project or idea..."
              required
              disabled={isSending || isSuccess}
            ></textarea>
          </div>

          {isError && (
            <p style={{ color: '#f87171', fontSize: '0.85rem', textAlign: 'center' }}>
              Something went wrong. Please try again.
            </p>
          )}

          <button
            type="submit"
            className="btn-submit"
            id="submitBtn"
            disabled={isSending || isSuccess}
            style={{
              backgroundColor: isSuccess ? '#22c55e' : isError ? '#ef4444' : '',
              transition: 'background-color 0.3s ease',
            }}
          >
            {isSending ? (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  style={{ animation: 'spin 1s linear infinite' }}>
                  <circle cx="12" cy="12" r="10" strokeOpacity="0.3" />
                  <path d="M12 2a10 10 0 0 1 10 10" />
                </svg>
                <span>Sending…</span>
              </>
            ) : isSuccess ? (
              <span>✓ Message Sent!</span>
            ) : (
              <>
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
