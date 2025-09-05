import React, { useEffect, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import '../Home.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import ProjectShowcase from "../components/ProjectShowcase";

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

      <section id="education" className="section text-center" ref={skillsRef}>
        <div className="container">
          <h2 className="section-title">Education & Certifications</h2>

          <div className="row justify-content-center text-start">
            <div className="col-lg-5">
              <h3 className="h5 mt-3 mb-3">Certifications</h3>
              <ul className="list-unstyled mb-0">
                <li className="mb-4">
                  <strong>Scrum Fundamentals Certified — SCRUMstudy</strong><br />
                  <small className="text-muted d-block">Issued July 2025 • No Expiration</small>
                  <small className="text-muted d-block">
                    Relevant Skills: Scrum framework, Agile methodologies, sprint planning, backlog management, cross-functional collaboration
                  </small>
                </li>

                <li className="mb-4">
                  <strong>AWS Certified Cloud Practitioner (In Progress)</strong><br />
                  <small className="text-muted d-block">Expected September 2025</small>
                  <small className="text-muted d-block">
                    Relevant Skills: AWS EC2, S3, Lambda; cloud security; load balancing; cost optimization; cloud architecture principles
                  </small>
                </li>

                <li className="mb-4">
                  <strong>Introduction to Large Language Models — IBM SkillsBuild</strong><br />
                  <small className="text-muted d-block">Issued March 2025</small>
                  <small className="text-muted d-block">
                    Relevant Skills: Large language models, prompt engineering, NLP, ethical AI practices
                  </small>
                </li>
              </ul>
            </div>

            <div className="col-lg-5 mt-5 mt-lg-0">
              <h3 className="h5 mb-3 mt-3">Education</h3>
              <ul className="list-unstyled mb-0">
                <li className="mb-4">
                  <strong>Plymouth State University — Plymouth, NH</strong><br />
                  <small className="text-muted d-block">
                    B.S. in Computer Science, Minor in Cybersecurity • Cumulative GPA: 3.58/4.0
                  </small>
                  <small className="text-muted d-block">Graduated May 2025</small>
                  <small className="text-muted d-block">
                    Relevant Coursework: Software Engineering; Operating Systems; Systems Programming in C/C++; Systems Analysis and Design; Data Structures and Intermediate Programming; Database Management Systems; Algorithm Analysis
                  </small>
                  <small className="text-muted d-block">
                    Honors: University Honors Program, TRIO Scholars Program
                  </small>
                </li>

                <li className="mb-0">
                  <strong>Pinkerton Academy — Derry, NH</strong><br />
                  <small className="text-muted d-block">High School Diploma • Graduated 2021</small>
                  <small className="text-muted d-block">
                    VEX Robotics Team Captain (Team 241D): Coordinated competitions, performed community service, collaborated on programming, robot building, documentation, and design
                  </small>
                </li>
              </ul>
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
            image: "./to_do.jpeg",
            github: "https://github.com/maaaddy/car",
            write: "/projects/arduino-car",
          },
        ]}
      />

      <section id="writings" className="section text-center">
        <div className="container">
            <h2 className="section-title">Writings</h2>
            <p>Take a look at the articles I've written on CS topics!</p>
            <div className="writing-card">
            <img src="/mern-stack.png" alt="MERN Stack Article" className="writing-thumbnail" />
            <div className="writing-info">
                <h4>Mastering the MERN Stack: A Tutorial for Beginners</h4>
                <p>Information you need to know to get started with MongoDB, Express, React, and Node.js - with a tutorial.</p>
                <a href="https://www.linkedin.com/pulse/mastering-mern-stack-tutorial-beginners-madison-conway-fkvve" target="_blank" rel="noreferrer" className="writing-link">Read More →</a>
            </div>
            </div>

            <div className="writing-card">
            <img src="/sorting-algorithms.png" alt="Sorting Algorithms Article" className="writing-thumbnail" />
            <div className="writing-info">
                <h4>Sorting Algorithms: What They Are & When to Use Them</h4>
                <p>A beginner-friendly explanation of various sorting algorithms, time-complexities, and how to choose between them.</p>
                <a href="https://www.linkedin.com/pulse/sorting-algorithms-what-when-use-them-madison-conway-wyybe" target="_blank" rel="noreferrer" className="writing-link">Read More →</a>
            </div>
            </div>

            <div className="writing-card">
            <img src="/what-is-react.png" alt="React Article" className="writing-thumbnail" />
            <div className="writing-info">
                <h4>What is ReactJS?</h4>
                <p>Exploring the fundamentals of React: A clear introduction to what React is, why it's popular, and how it changes the way we build websites.</p>
                <a href="https://www.linkedin.com/pulse/what-reactjs-madison-conway-jwime" target="_blank" rel="noreferrer" className="writing-link">Read More →</a>
            </div>
            </div>

            <div className="writing-card">
            <img src="/agile.png" alt="Agile Development Article" className="writing-thumbnail" />
            <div className="writing-info">
                <h4>What is Agile Development?</h4>
                <p>Introducing Agile development, going over the phases, and looking into what types of frameworks and tools are used in the industry. </p>
                <a href="https://www.linkedin.com/pulse/what-agile-development-madison-conway-u7qhe" target="_blank" rel="noreferrer" className="writing-link">Read More →</a>
            </div>
            </div>
        </div>
      </section>


      <section id="contact" className="section text-center">
        <div className="container">
            <img
            src="/madison2.jpg"
            alt="Madison Conway"
            style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: '1.5rem'
            }}
            />
            <p style={{ color: '#2b4832' }}>Madison Conway • Based in New England</p>
            <h2 className="section-title">Contact Me</h2>
            
            <p className="section-content mb-2">I’m always open to new opportunities, collaborations, and connections!</p>
            <a
            href="/Madison_Conway_Resume_2025.pdf"
            download
            className="btn btn-success mt-3"
            style={{ padding: '10px 20px', fontWeight: '500', fontSize: '1rem' }}
            >
            Download My Resume
            </a>

            <div className="social-icons mt-4">
            <a href="mailto:maddylconway@gmail.com" target="_blank" rel="noreferrer" className="icon-link">
                <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/in/madison-conway-88aa84236/" target="_blank" rel="noreferrer" className="icon-link">
                <FaLinkedin />
            </a>
            <a href="https://github.com/maaaddy" target="_blank" rel="noreferrer" className="icon-link">
                <FaGithub />
            </a>
            </div>
        </div>
      </section>
      <p className='m-3 text-center' style={{ color: '#2b4832' }}>Designed & built by Madison Conway • © 2025</p>
    </main>
  );
};

export default Home;