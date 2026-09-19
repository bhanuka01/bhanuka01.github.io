import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

// Secure access key loaded from environment variables with safe fallback
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '99146756-1026-48ad-97a7-900691ffc536';

export default function Contact() {
  const { contact } = portfolioData;
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [resultMessage, setResultMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');
    setResultMessage('Dispatching message…');

    const form = e.target;
    const formData = new FormData(form);

    // Append access_key and identifier securely
    formData.append('access_key', ACCESS_KEY);
    formData.append('from_name', 'Bhanuka Dilshan Portfolio');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setResultMessage(data.message || 'Message Transmitted Successfully ✓');
        form.reset();
        setTimeout(() => {
          setStatus('idle');
          setResultMessage('');
        }, 6000);
      } else {
        setStatus('error');
        setResultMessage(data.message || 'Unable to send message. Please try emailing directly.');
        setTimeout(() => {
          setStatus('idle');
          setResultMessage('');
        }, 5000);
      }
    } catch {
      setStatus('error');
      setResultMessage('Network error. Please try emailing directly.');
      setTimeout(() => {
        setStatus('idle');
        setResultMessage('');
      }, 5000);
    }
  };

  const isSending = status === 'sending';
  const isSuccess = status === 'success';
  const isError   = status === 'error';

  return (
    <section id="contact" className="section-container">
      <div className="section-header fade-up">
        <div className="section-tag-row">
          <span className="section-num">05</span>
          <span className="section-divider-dot">/</span>
          <span className="section-category">Inquiry</span>
        </div>
        <h2 className="section-heading">
          Get in <span className="serif-title">Touch</span>
        </h2>
        <div className="section-rule"></div>
      </div>

      <div className="contact-grid">
        <div className="contact-info fade-up">
          <h3 className="contact-headline">
            Let&apos;s build something <span className="serif-accent">exceptional</span> together.
          </h3>
          <p className="contact-desc">{contact.desc}</p>
          
          <div className="contact-links">
            <a href={`mailto:${contact.email}`} className="contact-card">
              <div className="theme-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="contact-details">
                <span className="contact-primary">{contact.email}</span>
                <span className="contact-secondary">Direct Email</span>
              </div>
              <span className="contact-arrow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </span>
            </a>

            <a href={contact.linkedin} className="contact-card" target="_blank" rel="noopener noreferrer">
              <div className="theme-icon-box">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div className="contact-details">
                <span className="contact-primary">LinkedIn</span>
                <span className="contact-secondary">Professional Network</span>
              </div>
              <span className="contact-arrow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </span>
            </a>

            <a href={contact.github} className="contact-card" target="_blank" rel="noopener noreferrer">
              <div className="theme-icon-box">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
              <div className="contact-details">
                <span className="contact-primary">GitHub</span>
                <span className="contact-secondary">Open Source Repositories</span>
              </div>
              <span className="contact-arrow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        <form className="contact-form fade-up" onSubmit={handleSubmit}>
          {/* Honeypot spam protection (bots fill hidden inputs; Web3Forms drops them) */}
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">NAME</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Ada Lovelace"
                required
                maxLength={100}
                disabled={isSending || isSuccess}
                autoComplete="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">EMAIL</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="ada@example.com"
                required
                maxLength={120}
                disabled={isSending || isSuccess}
                autoComplete="email"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">SUBJECT</label>
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="Collaboration or Inquiry"
              maxLength={150}
              disabled={isSending || isSuccess}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">MESSAGE</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your project, idea, or initiative..."
              required
              maxLength={3000}
              disabled={isSending || isSuccess}
            ></textarea>
          </div>

          {isError && (
            <p className="form-error-msg" role="alert">
              {resultMessage || 'Unable to send message. Please try emailing directly.'}
            </p>
          )}

          {isSuccess && (
            <p className="form-success-msg" role="status">
              {resultMessage || 'Message Transmitted Successfully ✓'}
            </p>
          )}

          <button
            type="submit"
            className={`btn-primary submit-btn ${isSuccess ? 'success' : ''}`}
            disabled={isSending || isSuccess}
          >
            {isSending ? (
              <>
                <svg className="spin-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                  <path d="M12 2a10 10 0 0 1 10 10" />
                </svg>
                <span>Dispatching message…</span>
              </>
            ) : isSuccess ? (
              <span>Message Transmitted Successfully ✓</span>
            ) : (
              <>
                <span>Send Message</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
