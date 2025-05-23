import React from 'react';
import '../../Home.css';

const ArduinoCar = () => {
  return (
    <div style={{ backgroundColor: '#f0f4f1', minHeight: '100vh', width: '100%' }}>
      <div className="container section" style={{ backgroundColor: 'transparent' }}>
        <h1 className="section-title">Arduino Car</h1>

        <div className="row g-5 align-items-start">
          <div className="col-12 col-md-7 text-start">
            <h5 className="mb-3 proj-label"><strong>Team Arduino Project</strong></h5>
            <p>
              This project was effectively creating "Red light, Green light", out of Arduino parts.
              We had a focused team of 3.
            </p>
            <p className="mt-2">
              "Red light, Green light" is a game where a player or object can move forward towards a 
              finish line when the stop light is green, but when the light is red it has to stop, or 
              the player will lose. If the player progresses to the finish line, only making moves when the 
              light is green, they win.
            </p>
            <p>
              Our team created a game board for "Red light, Green light" and also built a working arduino car 
              which connected to our phones via bluetooth. Ultimately, through this project we were able to 
              move the car via bluetooth and play Red light, Green light with the board that we created. 
            </p>
            <p>
              My personal contributions to this team project include:
              <ul>
                <li>Making the car (build, code, connecting to app & phone)</li>
                <li>Game board features (LED display)</li>
              </ul>
            </p>
            <hr />
            <p className="proj-label2"><strong>Technologies:</strong> Arduino IDE, Arduino Programming, Arduino UNO, Bluetooth reciever, Dabble.io Phone App.</p>
          </div>

          <div className="col-12 col-md-5 d-flex flex-column align-items-center">
            <video 
            src="/arduino.mp4" 
            className="img-fluid rounded mb-4"
            style={{ maxWidth: '100%' }}
            autoPlay 
            muted 
            loop 
            playsInline
            controls={true}
            />

            <a 
              href="https://github.com/maaaddy/car" 
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

export default ArduinoCar;