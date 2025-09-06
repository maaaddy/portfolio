import React, { useEffect } from 'react';
import '../../components/project-showcase.css';
import { FaGithub } from 'react-icons/fa';

const ToDo = () => {
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
            <span className="fp-head m-0">★ To Do</span>
          </h2>
          <div
            className="flex-grow-1 border-top"
            style={{ borderColor: '#325c58ff', opacity: 0.9 }}
          ></div>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-md-9 col-lg-8 col-xl-8">

            <img
              src="/to_do.jpeg"
              alt="ToDo Screenshot"
              className="img-fluid rounded-sm shadow mb-3"
              style={{ maxHeight: '360px', width: '100%', objectFit: 'cover' }}
            />

            <div className="contact-card glassy-onbrand" role="region" aria-label="To Do">
              <div className="contact-headings mb-3">
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                  <h2 id="contact-title" className="contact-heading mb-0 fs-5 fw-semibold">
                    MERN Stack Web App
                  </h2>

                  <a
                    href="https://github.com/maaaddy/todo"
                    target="_blank"
                    rel="noreferrer"
                    className="cmd mt-2 mt-md-0"
                    aria-label="View To Do on GitHub"
                  >
                    <FaGithub className="me-2" /> Repo
                  </a>
                </div>
              </div>

              <div className="contact-sub">
                <p className="text-start">
                  "To-Do" is a web application designed to make reminders an easier process by enabling users to browse, save, create, and edit their notes.
                </p>
                <p className="mt-2 text-start">
                  This web-app was designed as a virtual bulletin board. The idea is to have a hub to sort out any tasks you may have.
                </p>
                <p className="text-start">
                  To Do was a solo-project that I did relatively early on to see where I stood in developing MERN stacks.
                  This project taught me a lot! I learned how to use mongoose, how to post/set/delete, and how to 
                  effectively use a MERN stack in general. Creating pop-ups was also a new thing for myself, (at the time that I made this)
                  project. It's awesome to see how far I've grown since.
                </p>
              </div>

              <div className="contact-note">
                <strong className="me-2">Technologies:</strong>
                <div className="d-flex flex-wrap gap-2">
                  <span className="hero-chip">JavaScript</span>
                  <span className="hero-chip">Git</span>
                  <span className="hero-chip">VSCode</span>
                  <span className="hero-chip">React</span>
                  <span className="hero-chip">Node.js</span>
                  <span className="hero-chip">Express.js</span>
                  <span className="hero-chip">MongoDB</span>
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

export default ToDo;