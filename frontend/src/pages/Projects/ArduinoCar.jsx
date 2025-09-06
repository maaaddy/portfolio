import React, { useEffect } from 'react';
import '../../components/project-showcase.css';
import { FaGithub } from 'react-icons/fa';

const ArduinoCar = () => {
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
            <span className="fp-head m-0">★ Arduino Car</span>
          </h2>
          <div
            className="flex-grow-1 border-top"
            style={{ borderColor: '#325c58ff', opacity: 0.9 }}
          ></div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-md-9 col-lg-8 col-xl-8">

            <video
              src="/arduino.mp4"
              className="img-fluid rounded-sm shadow mb-3"
              style={{ maxHeight: '360px', width: '100%', objectFit: 'cover' }}
              autoPlay
              muted
              loop
              playsInline
              controls
            />

            <div className="contact-card glassy-onbrand" role="region" aria-label="Arduino Car">
              <div className="contact-headings mb-3">
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                  <h2 id="contact-title" className="contact-heading mb-0 fs-5 fw-semibold">
                    Team Arduino Project
                  </h2>

                  <a
                    href="https://github.com/maaaddy/car"
                    target="_blank"
                    rel="noreferrer"
                    className="cmd mt-2 mt-md-0"
                    aria-label="View Arduino Car on GitHub"
                  >
                    <FaGithub className="me-2" /> Repo
                  </a>
                </div>
              </div>

              <div className="contact-sub">
                <p className="text-start">
                  This project was effectively creating "Red light, Green light" out of Arduino parts.
                  We had a focused team of 3.
                </p>
                <p className="mt-2 text-start">
                  "Red light, Green light" is a game where a player or object can move forward towards a
                  finish line when the stop light is green, but when the light is red it has to stop, or
                  the player will lose. If the player progresses to the finish line, only making moves when the
                  light is green, they win.
                </p>
                <p className="text-start">
                  Our team created a game board for "Red light, Green light" and also built a working arduino car
                  which connected to our phones via bluetooth. Ultimately, through this project we were able to
                  move the car via bluetooth and play Red light, Green light with the board that we created.
                </p>
                <p className="text-start mb-1">My personal contributions to this team project include:</p>
                <ul className="text-start">
                  <li>Making the car (build, code, connecting to app &amp; phone)</li>
                  <li>Game board features (LED display)</li>
                </ul>
              </div>

              <div className="contact-note">
                <strong className="me-2">Technologies:</strong>
                <div className="d-flex flex-wrap gap-2">
                  <span className="hero-chip">Arduino IDE</span>
                  <span className="hero-chip">Arduino Programming</span>
                  <span className="hero-chip">Arduino UNO</span>
                  <span className="hero-chip">Bluetooth reciever</span>
                  <span className="hero-chip">Dabble.io Phone App</span>
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

export default ArduinoCar;