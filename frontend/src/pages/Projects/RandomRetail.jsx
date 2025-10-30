import React, { useEffect } from 'react';
import '../../components/project-showcase.css';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const RandomRetail = () => {
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

  const LIVE_URL="https://random-retail.shop";

  return (
    <div className="min-vh-100 w-100 pt-5">
      <div className="container">
        <div className="d-flex align-items-center gap-3 mt-3 mb-5">
          <h2 className="">
            <span className="fp-head m-0">★ Random Retail</span>
          </h2>
          <div
            className="flex-grow-1 border-top"
            style={{ borderColor: '#325c58ff', opacity: 0.9 }}
          ></div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-md-9 col-lg-8 col-xl-8">

            <img
              src="/randomretail.jpg"
              alt="Random Retail Screenshot"
              className="img-fluid rounded-sm shadow mb-3"
              style={{ maxHeight: '360px', width: '100%', objectFit: 'cover' }}
            />

            <div className="contact-card glassy-onbrand" role="region" aria-label="Random Retail">
              <div className="contact-headings mb-3">
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                  <h2 id="contact-title" className="contact-heading mb-0 fs-5 fw-semibold">
                    Phoenix + Elixir Webstore
                  </h2>

                  <div className="d-flex align-items-center gap-2 ms-auto mt-2 mt-md-0">
                    {LIVE_URL && (
                      <a href={LIVE_URL} target="_blank" rel="noopener noreferrer" className="cmd d-inline-flex align-items-center">
                        <FiExternalLink className="me-2" /> Live
                      </a>
                    )}
                    <a href="https://github.com/CS4140Team45/gregslist" target="_blank" rel="noopener noreferrer" className="cmd d-inline-flex align-items-center">
                      <FaGithub className="me-2" /> Repo
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-sub">
                <p className="text-start">
                  "Random Retail" is an online-shop web application. It was a team project, designed to be a better "craigslist" webstore.
                </p>
                <p className="text-start mt-2">
                  This web-app was created in a team of 4, mocking software engineering practices. We experienced AGILE development. All in all, 
                  Random Retail is suited for posting listings, socializing, and shopping.
                </p>

                <p className="text-start mt-2">My personal contributions to this team project include:</p>
                <ul className="text-start">
                  <li>Github team &amp; repo creation</li>
                  <li>Setting up the base phoenix project</li>
                  <li>Setting up the sqlite3 database</li>
                  <li>Creating the domain and connecting it to the droplet</li>
                  <li>Certifying domain for https, http, etc.</li>
                  <li>Setting up CI/CD</li>
                  <li>Creating the navigation top bar</li>
                  <li>Item creation form (Not including age-restriction/Photo addition)</li>
                  <li>Contact Seller &amp; Messaging &amp; Live Chat room</li>
                  <li>User Settings &amp; Profile</li>
                  <li>Some (not all) UI styling w/ Tailwind CSS</li>
                </ul>
              </div>

              <div className="contact-note">
                <strong className="me-2">Technologies:</strong>
                <div className="d-flex flex-wrap gap-2">
                  <span className="hero-chip">VSCode</span>
                  <span className="hero-chip">Git</span>
                  <span className="hero-chip">Nginx</span>
                  <span className="hero-chip">Phoenix</span>
                  <span className="hero-chip">Elixir</span>
                  <span className="hero-chip">Sqlite3</span>
                  <span className="hero-chip">TailwindCSS</span>
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

export default RandomRetail;