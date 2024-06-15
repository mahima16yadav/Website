import React from 'react';
import './flow.css';

function Flow() {
  return (
    <div className="App">
      <footer className="footer">
        <div className="container">
          <div className="brand">
            <div className="logo"></div>
            <h1>Flow</h1>
            <br/>
            <div className="newsletter">
              <h2>Your Source for Green Energy Updates</h2>
              <p>Stay in the loop with our Green Horizon newsletter, where we deliver bite-sized<br />insights into the latest green energy solutions.</p>
              <div className="subscribe">
                <input type="email" placeholder="Your e-mail..." />
                <button>Get in touch</button>
              </div>
            </div>
          </div>
          <div className="links">
            <div className="column">
              <h3>Platform</h3>
              <ul>
                <li><a href="#">Solutions</a></li>
                <li><a href="#">How it works</a></li>
                <li><a href="#">Pricing</a></li>
              </ul>
            </div>
            <div className="column">
              <h3>Company</h3>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Our Mission</a></li>
                <li><a href="#">Careers <span className="hiring">HIRING</span></a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="column">
              <h3>Resources</h3>
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>© 2024 Flow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Flow;
