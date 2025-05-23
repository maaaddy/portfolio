import React from 'react';
import '../../Home.css';

const ToDo = () => {
  return (
    <div style={{ backgroundColor: '#f0f4f1', minHeight: '100vh', width: '100%' }}>
      <div className="container section" style={{ backgroundColor: 'transparent' }}>
        <h1 className="section-title">To Do</h1>

        <div className="row g-5 align-items-start">
          <div className="col-12 col-md-7 text-start">
            <h5 className="mb-3 proj-label"><strong>MERN Stack Web App</strong></h5>
            <p>
              "To-Do" is a web application designed to make reminders an easier process by enabling users to browse, save, create, and edit their notes.
            </p>
            <p className="mt-2">
              This web-app was designed as a virtual bulletin board. The idea is to have a hub to sort out any tasks you may have.
            </p>
            <p>
              To Do was a solo-project that I did, relatively early on, to see where I stood in developing MERN stacks.
              This project taught me a lot! I learned how to use mongoose, how to post/set/delete, and how to 
              effectively use a MERN stack in general. Creating pop-ups was also a new thing for myself, (at the time that I made this)
              project. It's awesome to see how far I've grown since.
            </p>
            <hr />
            <p className="proj-label2"><strong>Technologies:</strong> JavaScript, Git, VSCode, React, Node.js, Express.js, and MongoDB.</p>
          </div>

          <div className="col-12 col-md-5 d-flex flex-column align-items-center">
            <img 
              src="/to_do.jpeg" 
              alt="ToDo Screenshot" 
              className="img-fluid rounded mb-4" 
              style={{ maxWidth: '100%' }} 
            />
            <a 
              href="https://github.com/maaaddy/todo" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-outline-success w-100 text-center"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;