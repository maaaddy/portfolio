import React, { useEffect } from 'react';
import '../../components/project-showcase.css';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const WhiskAway = () => {
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

  const LIVE_URL="https://whiskaway.food";

  return (
    <div className="min-vh-100 w-100 pt-5">
      <div className="container">
        <div className="d-flex align-items-center gap-3 mt-3 mb-5">
          <h2 className="">
            <span className="fp-head m-0">★ WhiskAway</span>
          </h2>
          <div
            className="flex-grow-1 border-top"
            style={{ borderColor: '#325c58ff', opacity: 0.9 }}
          ></div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-md-9 col-lg-8 col-xl-8">

            <img
              src="/whiskawaypic.jpg"
              alt="WhiskAway Screenshot"
              className="img-fluid rounded-sm shadow mb-3"
              style={{ maxHeight: '360px', width: '100%', objectFit: 'cover' }}
            />

            <div className="contact-card glassy-onbrand" role="region" aria-label="WhiskAway">
              <div className="contact-headings mb-3">
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                  <h2 id="contact-title" className="contact-heading mb-0 fs-5 fw-semibold">
                    WhiskAway - MERN Web App
                  </h2>
                  <div className="d-flex align-items-center gap-2 ms-auto mt-2 mt-md-0">
                    {LIVE_URL && (
                      <a href={LIVE_URL} target="_blank" rel="noopener noreferrer" className="cmd d-inline-flex align-items-center">
                        <FiExternalLink className="me-2" /> Live
                      </a>
                    )}
                    <a href="https://github.com/maaaddy/whiskaway2" target="_blank" rel="noopener noreferrer" className="cmd d-inline-flex align-items-center">
                      <FaGithub className="me-2" /> Repo
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-sub">
                <p className="text-start">
                  "WhiskAway" is a full-stack web application built using the MERN stack (MongoDB, Express, React, Node).
                  It's designed to make recipe discovering and sharing a simpler process by enabling users to
                  browse, save, and contribute recipes from various sources. WhiskAway also serves as a social platform,
                  where users can comment and like recipes.
                </p>
                <p className="mt-2 text-start">
                  This web-app is a place where users can create personalized digital cookbooks either alone or with friends,
                  search through recipes with applied filters for dietary needs or ingredient preferences, share individual
                  postings with one another via messaging, and organize recipes for easy access or sharing.
                </p>
                <p className="text-start">
                  WhiskAway features a user-authentication system, encrypted password protection, and uses JWT tokens.
                </p>
              </div>

              <div className="contact-note">
                <strong className="me-2">Technologies:</strong>
                <div className="d-flex flex-wrap gap-2">
                  <span className="hero-chip">React.js</span>
                  <span className="hero-chip">Node.js</span>
                  <span className="hero-chip">Express.js</span>
                  <span className="hero-chip">MongoDB</span>
                  <span className="hero-chip">REST API</span>
                  <span className="hero-chip">Git</span>
                  <span className="hero-chip">VSCode</span>
                  <span className="hero-chip">Tailwind CSS</span>
                  <span className="hero-chip">Nginx</span>
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

export default WhiskAway;