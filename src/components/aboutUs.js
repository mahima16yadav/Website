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
            sustainably.<br /> From fuel-efficient vehicles to waste reduction, we're
            pioneering eco-conscious<br /> practices in emergency medical
            transportation. Join us in driving toward a<br /> greener future, one
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
        <br/><br/>
        <br/><br/><br/><br/>
        <div classname="contents">
             <h4 className="subtitles"><img src="./dot.png" alt="Dot" className="dot-image" />          Solutions</h4>
        </div>
        <br/>
          <div className="content">
            <div classname="key">
              <h1>Key to clean future</h1>
            </div>
            <br/>
            <p>
              Our commitment to green energy is paving the way for a cleaner,
              healthier planet.
            </p>
          </div>
      </main>
    </div>
  );
}

export default About;
