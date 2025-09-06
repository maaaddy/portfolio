import React, { useEffect } from 'react';
import '../../components/project-showcase.css';
import { FaGithub } from 'react-icons/fa';

const AiWriting = () => {
    useEffect(() => {
    let rafId;
    const root = document.documentElement;

    const onMove = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        root.style.setProperty('--lx', `${e.clientX}px`);
        root.style.setProperty('--ly', `${e.clientY}px`);
      });
    };

    window.addEventListener('pointermove', onMove);
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="min-vh-100 w-100 pt-5">
      <div className="container">
        <div className="d-flex align-items-center gap-3 mt-3 mb-5">
          <h2 className="">
            <span className="fp-head m-0">★ AI Writing Assistant</span>
          </h2>
          <div
            className="flex-grow-1 border-top"
            style={{ borderColor: '#325c58ff', opacity: 0.9 }}
          ></div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-md-9 col-lg-8 col-xl-8">

            <img
              src="/writing.jpg"
              alt="AI Writing Screenshot"
              className="img-fluid rounded-sm shadow mb-3"
              style={{ maxHeight: '360px', width: '100%', objectFit: 'cover' }}
            />

            <div className="contact-card glassy-onbrand" role="region" aria-label="Contact">
              <div className="contact-headings mb-3">
                <div className="d-flex justify-content-between align-items-center">
                    <h2 id="contact-title" className="contact-heading mb-0 fs-5 fw-semibold">
                    Javascript / LLM Project
                    </h2>
                    <a
                    href="https://github.com/maaaddy/AI-Writing-Assist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cmd"
                    aria-label="View on GitHub"
                    >
                    <FaGithub className="me-2" /> Repo
                    </a>
                </div>
              </div>

              <div className="contact-sub">
                <p className="text-start">
                  AI Writing Assistant was a solo-project. The goal? To learn to train a LLM and use that training for something!
                  This project taught me a lot!
                </p>
                <p className="text-start">
                  I made this web application for myself to mirror my writing style. This would enable myself to draft up a skeleton 
                  for any professional content I create. The most important part? I wouldn't lose my own personal touch!
                </p>
                <p className="mt-2 text-start">
                  To do this, I trained a LLM to write in my writing style to communicate more efficiently in professional settings.
                </p>

                <p className="text-start">Here’s what I learned:</p>
                <ul className="text-start">
                  <li>
                    Finding good, high-quality examples of your own writing is important. I used emails, articles I wrote, and LinkedIn posts.
                  </li>
                  <li>
                    Cleaning the dataset (removing signatures, private info, names, formatting noise) significantly improved output quality.
                  </li>
                  <li>
                    Fine-tunes have seemingly endless opportunities. Training an AI model can be very useful!
                  </li>
                </ul>
              </div>

              <div className="contact-note">
                <strong className="me-2">Technologies:</strong>
                <div className="d-flex flex-wrap gap-2">
                  <span className="hero-chip">JavaScript</span>
                  <span className="hero-chip">Git</span>
                  <span className="hero-chip">VSCode</span>
                  <span className="hero-chip">React</span>
                  <span className="hero-chip">Node.js</span>
                  <span className="hero-chip">Tailwind</span>
                  <span className="hero-chip">OpenAI</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      <footer className="site-footer mt-5" role="contentinfo">
        <div className="container">
          <p className="footer-text">Designed &amp; Built by Madison Conway</p>
        </div>
      </footer>
    </div>
  );
};

export default AiWriting;