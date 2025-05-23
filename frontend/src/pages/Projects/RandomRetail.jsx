import React from 'react';
import '../../Home.css';

const RandomRetail = () => {
  return (
    <div style={{ backgroundColor: '#f0f4f1', width: '100%' }}>
      <div className="container section" style={{ backgroundColor: 'transparent' }}>
        <h1 className="section-title">Random Retail</h1>

        <div className="row g-5 align-items-start">
          <div className="col-12 col-md-7 text-start">
            <h5 className="mb-3 proj-label"><strong>Phoenix + Elixir Webstore</strong></h5>
            <p>
              "Random Retail" is an online-shop web application. It was a team project, designed to be a better "craigslist" webstore.
            </p>
            <p className="mt-2">
              This web-app was created in a team of 4, mocking software engineering practices. We experienced AGILE development. All in all, 
              Random Retail is suited for posting listings, socializing, and shopping.
            </p>
            <p>
              My personal contributions to this team project include:
              <ul>
                <li>Github team & repo creation</li>
                <li>Setting up the base phoenix project</li>
                <li>Setting up the sqlite3 database</li>
                <li>Creating the domain and connecting it to the droplet</li>
                <li>Certifying domain for https, http, etc.</li>
                <li>Setting up CI/CD</li>
                <li>Creating the navigation top bar</li>
                <li>Item creation form (Not including age-restriction/Photo addition)</li>
                <li>Contact Seller & Messaging & Live Chat room</li>
                <li>User Settings & Profile</li>
                <li>Some (not all) UI styling w/ Tailwind CSS</li>
              </ul>
            </p>
            <hr />
            <p className="proj-label2"><strong>Technologies:</strong> VSCode, Git, Nginx, Phoenix, Elixir, Sqlite3, and TailwindCSS.</p>
          </div>

          <div className="col-12 col-md-5 d-flex flex-column align-items-center">
            <img 
              src="/randomretail.jpg" 
              alt="WhiskAway Screenshot" 
              className="img-fluid rounded mb-4" 
              style={{ maxWidth: '100%' }} 
            />
            <a 
              href="https://randomretail.shop" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-success mb-3 w-100 text-center"
            >
              View Hosted Project
            </a>
            <a 
              href="https://github.com/CS4140Team45/gregslist" 
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

export default RandomRetail;