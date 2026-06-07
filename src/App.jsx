import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute('data-delay') || 0;
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach((el, i) => {
      el.setAttribute('data-delay', (i % 3) * 80);
      observer.observe(el);
    });

    return () => {
      fadeElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="dot-divider">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Work />
        <div className="dot-divider">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Experience />
        <div className="dot-divider">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Certificates />
        <div className="dot-divider">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Blog />
        <div className="dot-divider">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
