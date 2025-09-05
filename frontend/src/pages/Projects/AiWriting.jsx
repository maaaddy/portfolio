import React from 'react';
import '../../Home.css';
import { FaGithub } from 'react-icons/fa';

const AiWriting = () => {
  return (
    <div className="bg-light min-vh-100 w-100 py-5">
      <div className="container section">
        <h1 className="section-title">AI Writing Assistant</h1>

        <div className="col-12 col-md-8 mx-auto text-center">
          <img
            src="/writing.jpg"
            alt="AI Writing Screenshot"
            className="img-fluid rounded shadow mb-3"
          />

          <a href="https://github.com/maaaddy/AI-Writing-Assist" target="_blank" rel="noreferrer" className="icon-link">
            <FaGithub />
          </a>

          <hr className="mb-4" />

          <h5 className="mb-3 proj-label text-start"><strong>MERN Stack Web App</strong></h5>

          <p className="text-start">
            AI Writing Assistant was a solo-project. The goal? To learn to train a LLM and use that training for something!
            This project taught me a lot!
          </p>
          <p className="text-start">
            I made this web application for myself to mirror my writing style. This would enable myself to draft up a skeleton 
            for any professional content I create. The most important part? I wouldn't lose my own personal touch!
          </p>
          <p className="mt-2 text-start">
            To do this, I trained a LLM to write in my writing style to communicate more efficiently in professional settings.
          </p>

          <p className="text-start">Here’s what I learned:</p>
          <ul className="text-start">
            <li>
              Finding good, high-quality examples of your own writing is important. I used emails, articles I wrote, and LinkedIn posts.
            </li>
            <li>
              Cleaning the dataset (removing signatures, private info, names, formatting noise) significantly improved output quality.
            </li>
            <li>
              Fine-tunes have seemingly endless opportunities. Training an AI model can be very useful!
            </li>
          </ul>

          <p className="proj-label2 mt-3 text-start"><strong>Technologies:</strong> JavaScript, Git, VSCode, React, Node.js, Tailwind, OpenAI.</p>
        </div>
      </div>
    </div>
  );
};

export default AiWriting;