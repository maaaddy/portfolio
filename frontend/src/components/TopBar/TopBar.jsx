import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Topbar.css';

const Topbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top topbar px-4">
      <a className="navbar-brand" href="/">
        Madison Conway
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#topbarNav"
        aria-controls="topbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="topbarNav">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills">Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#resume">Resume</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Topbar;
