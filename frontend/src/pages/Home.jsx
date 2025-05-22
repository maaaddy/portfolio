import React, { useEffect, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import '../Home.css';

const skills = [
  'React', 'JavaScript', 'Tailwind', 'MongoDB', 'SQL', 
  'Express.js', 'Node.js', 'Phoenix', 'Elixir', 'HTML', 'CSS', 'PHP',
  'C', 'C++', 'Java', 'Python', 'Dart', 'Flutter', 'MariaDB', 'Linux', 'Nginx'
];

const skillToIcon = {
  React: 'react.png',
  JavaScript: 'javascript.png',
  Tailwind: 'tailwind.png',
  MongoDB: 'mongodb.png',
  SQL: 'sql.png',
  'Express.js': 'express.png',
  'Node.js': 'node.png',
  Phoenix: 'phoenix.png',
  Elixir: 'elixir.png',
  HTML: 'html.png',
  CSS: 'css.png',
  PHP: 'php.png',
  C: 'c.png',
  'C++': 'c++.png',
  Java: 'java.png',
  Python: 'python.png',
  Dart: 'dart.png',
  Flutter: 'flutter.png',
  MariaDB: 'mariadb.png',
  Linux: 'linux.png',
  Nginx: 'nginx.png'
};

const Home = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            document.querySelectorAll('.skill-item').forEach(el => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
  }, []);

  return (
    <main>
      <section id="hero" className="hero-editorial text-center d-flex align-items-center justify-content-center">
        <div className="container">
          <img
            src="/madison.jpg"
            alt="Madison Conway"
            className="hero-image rounded-circle mb-4"
            style={{ width: '240px', height: '240px', objectFit: 'cover', objectPosition: 'center' }}
          />
          <h1 className="hero-title">Hi, I'm Madison Conway.</h1>
          <p className="hero-subtitle">
            <span style={{ color: '#7aa88e', fontWeight: 'bold' }}>
              <Typewriter
                words={[
                  'Aspiring Software Engineer',
                  'Full-Stack Developer',
                  'Passionate Problem Solver',
                  'Based in New England'
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
          </p>
          <div className="hero-buttons d-flex justify-content-center gap-3 mt-4">
            <a href="#about" className="btn btn-success btn-lg px-4">Education</a>
            <a href="#projects" className="btn btn-outline-success btn-lg px-4">My Projects</a>
          </div>
        </div>
      </section>

      <section id="about" className="section text-center">
        <div className="container">
          <h2 className="section-title">About Myself</h2>
          <p className="section-content">
            I’m a Computer Science graduate from Plymouth State University with a minor in Cybersecurity.
            I'm super passionate about technology, dedicated to helping others, and I am always ready to take 
            on a new challenge. 
          </p> 
          <br />
          <img src="/hat.jpeg" alt="Madison Conway" className="about-image mb-4 mx-4" style={{ width: '240px', height: '240px', objectFit: 'cover', objectPosition: 'center' }} />
          <img src="/psu.jpg" alt="Madison Conway" className="about-image mb-4 mx-4" style={{ width: '240px', height: '240px', objectFit: 'cover', objectPosition: 'center' }} />
          <img src="/snowboard.jpg" alt="Madison Conway" className="about-image mb-4 mx-4" style={{ width: '240px', height: '240px', objectFit: 'cover', objectPosition: 'center' }} />
          <br />
          <p className="section-content">
            Looking past coding and expanding my Software Engineering knowledge, some of
            my hobbies include painting, drawing, and sketching. I also snowboard and love to experience nature! 
            Through everything, I'm always pursuing my passion for creativity and art, which is where I believe I found my love for 
            designing software!
          </p>
        </div>
      </section>

      <section id="skills" className="section text-center" ref={skillsRef}>
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <img 
                src={`/${skillToIcon[skill]}`} 
                alt={skill} 
                style={{ width: '64px', height: '64px' }}
                />
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section text-center">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="project-list">
            <div className="project-item">
              <h3 className="project-title">WhiskAway</h3>
              <p className="project-description">MERN stack recipe web-app with auth, API integration, and Nginx deployment.</p>
              <a href="https://whiskaway.food" target="_blank" rel="noreferrer" className="project-link">View Project</a>
            </div>
            <div className="project-item">
              <h3 className="project-title">ToDo</h3>
              <p className="project-description">Task managing, virtual bulletin board web-app built with MERN stack.</p>
            </div>
            <div className="project-item">
              <h3 className="project-title">Random Retail</h3>
              <p className="project-description">Team project - Phoenix + Elixir marketplace web-app styled with Tailwind.</p>
              <a href="https://randomretail.shop" target="_blank" rel="noreferrer" className="project-link">View Project</a>
            </div>
            <div className="project-item">
              <h3 className="project-title">Arduino Car</h3>
              <p className="project-description">Bluetooth-controlled car built with Arduino and phone integration for controller.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section bg-light text-center">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>
          <p className="section-content">Let's connect about opportunities or collaborations.</p>
          <div className="contact-buttons mt-3">
            <a href="mailto:maddylconway@gmail.com" className="btn btn-outline-dark me-3">Email</a>
            <a href="https://www.linkedin.com/in/madison-conway-88aa84236/" className="btn btn-outline-success me-3" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/maaaddy" className="btn btn-outline-dark" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;