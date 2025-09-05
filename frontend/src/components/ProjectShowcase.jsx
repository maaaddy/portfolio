import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";
import "./project-showcase.css";

const ProjectCard = ({ project, index }) => {
  const left = index % 2 === 1; // even: content left, image right

  return (
    <article className={`fp-card ${left ? "layout-left" : "layout-right"}`}>
      <div className={`row align-items-center ${left ? "" : "flex-row-reverse"}`}>
        <div className="col-md-6 position-relative">
          <p className="fp-kicker mb-1">Featured Project</p>
          <h3 className="fp-title mb-2">{project.title}</h3>

          <div className="fp-desc">
            <p className="mb-0">{project.description}</p>
          </div>

          <ul className="fp-tech d-flex flex-wrap gap-3 list-unstyled mb-2">
            {project.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>

          <div className="fp-links d-flex gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" aria-label="Open project">
                <FiExternalLink />
              </a>
            )}
          </div>
        </div>

        <div className="col-md-6 mt-4 mt-md-0 position-relative">
          <a
            className="fp-shot d-block"
            href={project.write || "#"}
            target={project.link || project.github ? "_blank" : "_self"}
            rel="noreferrer"
            aria-label={`${project.title} preview`}
          >
            <img className="fp-img" src={project.image} alt={`${project.title} preview`} />
            <span className="fp-shot-overlay" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default function ProjectShowcase({ projects }) {
  return (
    <section className="fp-wrap" id="projects">
      <div className="container">
        <div className="d-flex align-items-center gap-3 mb-5">
          <h2 className=""><span className="fp-head m-0">★ Some things I've built</span></h2>
          <div className="flex-grow-1 border-top" style={{ borderColor: '#325c58ff', opacity: 0.9 }}></div>
        </div>

        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
