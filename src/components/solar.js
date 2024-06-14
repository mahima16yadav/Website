import React from 'react';
import './aboutUs.css';

function About() {
  return (
    <div className="About">
      <main>
        {/* About Us section */}
        <section className="about-us">
          <div className="head">
            <h2>About Us</h2>
          </div>
          <p>
            At Lifeline Ambulance Services, we're committed to saving lives
            sustainably. From fuel-efficient vehicles to waste reduction, we're
            pioneering eco-conscious practices in emergency medical
            transportation. Join us in driving toward a greener future, one
            ambulance ride at a time.
          </p>
          <br />
          <br />
          <div className="button-container">
            <a href="/about" className="contact-button learn-more">
              Read more
            </a>
          </div>
        </section>
        {/* Key to a Clean Future section */}
        <section className="key-to-clean-future">
          <div className="content">
            <h4>
              <img src="./dot.png" alt="Dot" className="dot-image" /> Key to a Clean Future
            </h4>
            <p>
              Our commitment to green energy is paving the way for a cleaner,
              healthier planet.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
