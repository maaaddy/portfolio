import React from 'react';
import '../../Home.css';

const WhiskAway = () => {
  return (
    <div style={{ backgroundColor: '#f0f4f1', width: '100%' }}>
      <div className="container section" style={{ backgroundColor: 'transparent' }}>
        <h1 className="section-title">WhiskAway</h1>

        <div className="row g-5 align-items-start">
          <div className="col-12 col-md-7 text-start">
            <h5 className="mb-3 proj-label"><strong>MERN Stack Web App</strong></h5>
            <p>
              "WhiskAway" is a full-stack web application built using the MERN stack (MongoDB, Express, React, Node).
              It's designed to make recipe discovering and sharing a simpler process by enabling users to
              browse, save, and contribute recipes from various sources. WhiskAway also serves as a social platform,
              where users can comment and like recipes.
            </p>
            <p className="mt-2">
              This web-app is a place where users can create personalized digital cookbooks either alone or with friends,
              search through recipes with applied filters for dietary needs or ingredient preferences, share individual
              postings with one another via messaging, and organize recipes for easy access or sharing.
            </p>
            <p>
              WhiskAway features a user-authentication system, encrypted password protection, and uses JWT tokens.
            </p>
            <hr />
            <p className="proj-label2"><strong>Technologies:</strong> React.js, Node.js, Express.js, Nginx, MongoDB, Git, REST API, VSCode, Tailwind CSS</p>
          </div>

          <div className="col-12 col-md-5 d-flex flex-column align-items-center">
            <img 
              src="/whiskaway_pic.jpg" 
              alt="WhiskAway Screenshot" 
              className="img-fluid rounded mb-4" 
              style={{ maxWidth: '100%' }} 
            />
            <a 
              href="https://whiskaway.food" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-success mb-3 w-100 text-center"
            >
              View Hosted Project
            </a>
            <a 
              href="https://github.com/maaaddy/whiskaway2" 
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

export default WhiskAway;