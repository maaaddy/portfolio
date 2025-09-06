import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import './sidebar.css';

const SideBar = ({
  github = 'https://github.com/maaaddy',
  linkedin = 'https://www.linkedin.com/in/madison-conway-88aa84236/',
  email = 'maddylconway@gmail.com',
  side = 'left',
}) => {
  const sideStyle =
    side === 'right' ? { right: '18px', left: 'auto' } : { left: '18px' };

  return (
    <aside
      className="social-rail"
      style={sideStyle}
      aria-label="Social links"
    >
      <ul className="list-unstyled m-0 p-0 d-flex flex-column align-items-center gap-3">
        <li>
          <a
            className="rail-icon"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub aria-hidden="true" />
            <span className="visually-hidden">GitHub</span>
          </a>
        </li>
        <li>
          <a
            className="rail-icon"
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedin aria-hidden="true" />
            <span className="visually-hidden">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            className="rail-icon"
            href={email}
            aria-label="Email"
            title="Email me"
          >
            <FiMail aria-hidden="true" />
            <span className="visually-hidden">Email</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;