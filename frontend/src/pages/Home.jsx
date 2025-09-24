import React, { useEffect, useRef, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import '../Home.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPaperclip, FaGraduationCap, FaPalette, FaSnowflake, FaLaptop } from 'react-icons/fa';
import ProjectShowcase from "../components/ProjectShowcase";
import { FiExternalLink } from 'react-icons/fi';


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


  const [copied, setCopied] = useState(false);
  const copyEmail = () => {
    navigator.clipboard.writeText('maddylconway@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    });
  };


  return (
    <main>
      <section id="hero" className="hero-wrap">
        <div className="container">
          <div className="hero-center">
            <p className="hero-kicker">Software • UX • Web</p>
            <h1 className="hero-title">Hi, I'm Madison Conway.</h1>

            <p className="hero-type">
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
            </p>

            <div className="hero-avatar">
        <img src="/madison.jpg" alt="Madison Conway" />
      </div>
            <div className="palette">
              <div className="palette-head">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="palette-path">madison@portfolio: ~</span>
              </div>

              <div className="prompt">
                <span className="blip" aria-hidden="true"></span>
                <span className="caret">$</span>
                <span>Type a command or choose below…</span>
              </div>

              <div className="commands">
                <a className="cmd" href="#projects">open projects</a>
                <a className="cmd" href="/Madison_Conway.pdf" download>download resume</a>
                <a className="cmd" href="#skills">show skills</a>
                <a className="cmd" href="#education">view education</a>
                <a className="cmd" href="#contact">contact me</a>
              </div>
            </div>

            <div className="hero-stats">
              <span className="hero-chip">Driven</span>
              <span className="hero-chip">Team Player</span>
              <span className="hero-chip">Agile Mindset</span>
              <span className="hero-chip">Dedicated</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-wrap">
        <div className="container">
          <div className="d-flex align-items-center gap-3 mb-5">
          <div className="flex-grow-1 border-top" style={{ borderColor: '#325c58ff', opacity: 0.9 }}></div>
          <h2 className=""><span className="fp-head m-0">About myself ★</span></h2>
        </div>

          <div className="about-timeline">
            <article className="milestone">
              <div className="m-marker"><FaGraduationCap /></div>
              <p className="m-kicker">Origin</p>
              <h3 className="m-title">PSU • CS + Cybersecurity</h3>
              <p className="m-body">
                I’m a Computer Science graduate from Plymouth State University with a minor in Cybersecurity.
                I'm super passionate about technology, dedicated to helping others, and I am always ready to take on a new challenge.
              </p>
              <ul className="m-tags">
                <li>Curious</li><li>Dedicated</li><li>Team player</li>
              </ul>
            </article>

            <article className="milestone">
              <div className="m-marker"><FaPalette /></div>
              <p className="m-kicker">Creative Spark</p>
              <h3 className="m-title">Art + Design Mindset</h3>
              <p className="m-body">
                Looking past coding, and expanding my Software Engineering knowledge, some of my hobbies include
                painting, drawing, and sketching. This is where I believe I found my love for designing software.
              </p>
              <ul className="m-tags">
                <li>Sketching</li><li>Painting</li><li>Visual thinking</li>
              </ul>
            </article>

            <article className="milestone">
              <div className="m-marker"><FaSnowflake /></div>
              <p className="m-kicker">Inspiration</p>
              <h3 className="m-title">Snowboarding & Nature</h3>
              <p className="m-body">
                I also snowboard and I love to experience nature! I think this is what continues to keep me inspired. Through everything, I'm always pursuing my passions!
              </p>
              <ul className="m-tags">
                <li>Flow state</li><li>Balance</li><li>Curiosity</li>
              </ul>
            </article>

            <article className="milestone">
              <div className="m-marker"><FaLaptop /></div>
              <p className="m-kicker">Today</p>
              <h3 className="m-title">Building & Collaborating</h3>
              <p className="m-body">
                I’m focused on building software that’s useful and thoughtful, with a strong eye for UX.
                Always ready for the next challenge.
              </p>
              <ul className="m-tags">
                <li>Frontend/UX</li><li>React</li><li>Teamwork</li>
              </ul>
            </article>
          </div>

          <div className="about-photos">
            <div className="about-photo">
              <img src="/hat.jpeg" alt="Madison Conway" />
            </div>
            <div className="about-photo">
              <img src="/psu.jpg" alt="Plymouth State University" />
            </div>
            <div className="about-photo">
              <img src="/snowboard.jpg" alt="Snowboarding" />
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills-wrap text-center" ref={skillsRef}>
        <div className="container">
          <div className="d-flex align-items-center gap-3 mb-5">
          <h2 className=""><span className="fp-head m-0">★ What have I worked with?</span></h2>
          <div className="flex-grow-1 border-top" style={{ borderColor: '#325c58ff', opacity: 0.9 }}></div>
        </div>

          <div className="skills-card">
            <p className="skills-kicker">Technical Skills</p>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <img
                    src={`/${skillToIcon[skill]}`}
                    alt={skill}
                    aria-hidden={false}
                  />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="edu-wrap">
        <div className="container">
          <div className="d-flex align-items-center gap-3 mb-5">
          <div className="flex-grow-1 border-top" style={{ borderColor: '#325c58ff', opacity: 0.9 }}></div>
          <h2 className=""><span className="fp-head m-0">Education ★</span></h2>
        </div>

          <div className="edu-grid">
            <div className="edu-card">
              <p className="edu-kicker">Credentials</p>
              <h3 className="edu-title">Certifications</h3>

              <div className="edu-item">
                <strong>Scrum Fundamentals Certified — SCRUMstudy</strong>
                <small className="edu-meta">Issued July 2025 • No Expiration</small>
                <ul className="edu-tags">
                  <li>Scrum framework</li><li>Agile methodologies</li><li>Sprint planning</li>
                  <li>Backlog mgmt</li><li>Collaboration</li>
                </ul>
              </div>

              <div className="edu-divider" />

              <div className="edu-item">
                <strong>AWS Certified Cloud Practitioner (In Progress)</strong>
                <small className="edu-meta">Expected September 2025</small>
                <ul className="edu-tags">
                  <li>EC2</li><li>S3</li><li>Lambda</li><li>Security</li>
                  <li>Cost optimization</li><li>Cloud architecture</li>
                </ul>
              </div>

              <div className="edu-divider" />

              <div className="edu-item">
                <strong>Introduction to Large Language Models — IBM SkillsBuild</strong>
                <small className="edu-meta">Issued March 2025</small>
                <ul className="edu-tags">
                  <li>Large language models</li><li>Prompt engineering</li><li>NLP</li><li>Ethical AI</li>
                </ul>
              </div>
            </div>

            <div className="edu-card">
              <p className="edu-kicker">Academic</p>
              <h3 className="edu-title">Education</h3>

              <div className="edu-item">
                <strong>Plymouth State University — Plymouth, NH</strong>
                <small className="edu-meta">
                  B.S. in Computer Science, Minor in Cybersecurity • May 2025
                </small>
                <small className="edu-meta">GPA 3.58/4.0</small>
                <ul className="edu-tags">
                  <li>Software Engineering</li><li>Operating Systems</li><li>Systems Programming</li>
                  <li>Systems Analysis & Design</li><li>Data Structures</li>
                  <li>DBMS</li><li>Algorithm Analysis</li>
                </ul>
                <div className="edu-divider" />
                <small className="edu-meta">Honor Societies</small>
                <ul className="edu-tags">
                  <li>University Honors Program</li><li>TRIO Scholars</li>
                </ul>
              </div>

              <div className="edu-divider" />

              <div className="edu-item">
                <strong>Pinkerton Academy — Derry, NH</strong>
                <small className="edu-meta">High School Diploma • Graduated 2021</small>
                <ul className="edu-tags">
                  <li>VEX Robotics Captain (241D)</li>
                  <li>Programming & building</li>
                  <li>Competition & documentation</li>
                  <li>Community service & Fundraising</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectShowcase
        projects={[
          {
            title: "WhiskAway",
            description:
              "A social recipe web app with user authentication, recipe saving, and recipe sharing. MERN stack, API integrations, and Nginx deploy.",
            tech: ["Javascript", "React", "Express", "MongoDB", "Node", "Nginx", "Tailwind"],
            image: "./whiskawaypic.jpg",
            github: "https://github.com/maaaddy/whiskaway2",
            link: "https://whiskaway.food",
            write: "/projects/whiskaway",
          },
          {
            title: "AI Writing Assist",
            description:
              "Fine-tuned a LLM to mirror my writing style in order to more efficiently communicate in professional settings. Ensures that my writing stays authentic.",
            tech: ["Javascript", "React", "Node", "OpenAI", "Tailwind"],
            image: "./writing.jpg",
            github: "https://github.com/maaaddy/AI-Writing-Assist",
            write: "/projects/aiwriting",
          },
          {
            title: "Random Retail",
            description:
              "Team-built marketplace in Phoenix + Elixir. Features user/seller chat with Tailwind styling and Nginx deployment.",
            tech: ["Phoenix", "Elixir", "Tailwind", "Nginx"],
            image: "./randomretail.jpg",
            github: "https://github.com/CS4140Team45/gregslist",
            link: "https://randomretail.shop",
            write: "/projects/random-retail",
          },
          {
            title: "To Do - Bulletin Board",
            description:
              "Task manager / bulletin board built on the MERN stack with drag-n-drop niceties.",
            tech: ["Javascript", "MongoDB", "Express", "React", "Node"],
            image: "./to_do.jpeg",
            github: "https://github.com/maaaddy/todo",
            write: "/projects/todo",
          },
          {
            title: "Arduino Car",
            description:
              "Created a bluetooth-controlled car using Arduino, with motor control and phone integration. Used to play 'Red Light, Green Light.'",
            tech: ["Arduino", "Bluetooth", "C+"],
            image: "./car.jpg",
            github: "https://github.com/maaaddy/car",
            write: "/projects/arduino-car",
          },
        ]}
      />

      <section id="writings" className="writings-wrap">
        <div className="container">
                <div className="d-flex align-items-center gap-3 mb-5">
                <div className="flex-grow-1 border-top" style={{ borderColor: '#325c58ff', opacity: 0.9 }}></div>
                <h2 className=""><span className="fp-head m-0">Things I've written ★</span></h2>
              </div>

          <div className="w-grid">
            {/* MERN */}
            <article className="w-card">
              <div className="w-thumb">
                <img src="/mern-stack.png" alt="MERN Stack article" />
              </div>
              <div className="w-body">
                <p className="w-kicker">Tutorial</p>
                <h3 className="w-title">Mastering the MERN Stack: A Tutorial for Beginners</h3>
                <p className="w-excerpt">Information you need to know to get started with MongoDB, Express, React, and Node.js ~ with a tutorial.</p>
                <div className="w-actions">
                  <a className="w-read" href="https://www.linkedin.com/pulse/mastering-mern-stack-tutorial-beginners-madison-conway-fkvve" target="_blank" rel="noreferrer">
                    Read <FiExternalLink />
                  </a>
                </div>
              </div>
            </article>

            <article className="w-card">
              <div className="w-thumb">
                <img src="/sorting-algorithms.png" alt="Sorting Algorithms article" />
              </div>
              <div className="w-body">
                <p className="w-kicker">CS Basics</p>
                <h3 className="w-title">Sorting Algorithms: What They Are & When to Use Them</h3>
                <p className="w-excerpt">A beginner-friendly explanation of various sorting algorithms, time complexities, and how to choose between them.</p>
                <div className="w-actions">
                  <a className="w-read" href="https://www.linkedin.com/pulse/sorting-algorithms-what-when-use-them-madison-conway-wyybe" target="_blank" rel="noreferrer">
                    Read <FiExternalLink />
                  </a>
                </div>
              </div>
            </article>

            <article className="w-card">
              <div className="w-thumb">
                <img src="/what-is-react.png" alt="React article" />
              </div>
              <div className="w-body">
                <p className="w-kicker">Frontend</p>
                <h3 className="w-title">What is ReactJS?</h3>
                <p className="w-excerpt">Exploring the fundamentals of React: what React is, why it's popular, and how it changes the way we build websites.</p>
                <div className="w-actions">
                  <a className="w-read" href="https://www.linkedin.com/pulse/what-reactjs-madison-conway-jwime" target="_blank" rel="noreferrer">
                    Read <FiExternalLink />
                  </a>
                </div>
              </div>
            </article>

            <article className="w-card">
              <div className="w-thumb">
                <img src="/agile.png" alt="Agile Development article" />
              </div>
              <div className="w-body">
                <p className="w-kicker">Process</p>
                <h3 className="w-title">What is Agile Development?</h3>
                <p className="w-excerpt">Introducing Agile development, phases, and a quick look at frameworks and tools used in the industry.</p>
                <div className="w-actions">
                  <a className="w-read" href="https://www.linkedin.com/pulse/what-agile-development-madison-conway-u7qhe" target="_blank" rel="noreferrer">
                    Read <FiExternalLink />
                  </a>
                </div>
              </div>
            </article>

            <article className="w-card">
              <div className="w-thumb">
                <img src="/data_structures.jpg" alt="Data Structures article" />
              </div>
              <div className="w-body">
                <p className="w-kicker">CS Basics</p>
                <h3 className="w-title">Data Structures & Algorithms</h3>
                <p className="w-excerpt">How data structures and algorithms work together to make programs efficient / why choosing correctly is important.</p>
                <div className="w-actions">
                  <a className="w-read" href="https://www.linkedin.com/pulse/data-structures-algorithms-madison-conway-r477e" target="_blank" rel="noreferrer">
                    Read <FiExternalLink />
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="writings-wrap" aria-labelledby="contact-title">
        <div className="container">
          <div className="d-flex align-items-center gap-3 mb-5">
            <h2 className=""><span className="fp-head m-0">★ Let's get in touch</span></h2>
            <div className="flex-grow-1 border-top" style={{ borderColor: '#325c58ff', opacity: 0.9 }}></div>
          </div>
          <div className="contact-card glassy-onbrand" role="region" aria-label="Contact">
            <div className="contact-top">
              <img className="contact-avatar" src="/madison2.jpg" alt="Madison Conway smiling" loading="lazy" />

              <div className="contact-headings">
                <h2 id="contact-title" className="contact-heading">Let’s connect</h2>
                <p className="contact-sub">
                  I’m always open to new opportunities, collaborations, and connections!
                </p>
              </div>
            </div>

            <div className="contact-cta">
              <a
                className="btn btn-ghost"
                href="/Madison_Conway.pdf"
                download
              >
                <FaPaperclip style={{ marginRight: 8 }} /> Download Resume
              </a>

              <a className="btn btn-ghost" href="mailto:maddylconway@gmail.com">
                <FaEnvelope style={{ marginRight: 8 }} /> Email Me
              </a>

              <a className="btn btn-ghost" href="https://www.linkedin.com/in/madison-conway-88aa84236/" target="_blank" rel="noreferrer">
                <FaLinkedin style={{ marginRight: 8 }} /> LinkedIn
              </a>
              <a className="btn btn-ghost" href="https://github.com/maaaddy" target="_blank" rel="noreferrer">
                <FaGithub style={{ marginRight: 8 }} /> GitHub
              </a>
            </div>
            <p className="contact-note">Based in New England • Remote-friendly</p>
          </div>
        </div>
      </section>

      <footer className="site-footer" role="contentinfo">
        <div className="container">
          <p className="footer-text">Designed &amp; Built by Madison Conway</p>
        </div>
      </footer>

    </main>
  );
};

export default Home;