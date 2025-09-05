import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Topbar.css';
import { HashLink } from 'react-router-hash-link';

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
            <HashLink smooth to="/#about" className="nav-link">About</HashLink>
          </li>
          <li className="nav-item">
            <HashLink smooth to="/#skills" className="nav-link">Skills</HashLink>
          </li>
          <li className="nav-item">
            <HashLink smooth to="/#education" className="nav-link">Education</HashLink>
          </li>
          <li className="nav-item">
            <HashLink smooth to="/#projects" className="nav-link">Projects</HashLink>
          </li>
          <li className="nav-item">
            <HashLink smooth to="/#writings" className="nav-link">Writings</HashLink>
          </li>
          <li className="nav-item">
            <HashLink smooth to="/#contact" className="nav-link">Contact</HashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Topbar;
