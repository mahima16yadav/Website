import React from 'react';
import './contact.css';

function ContactUs() {
  return (
    <div className="contact-us">
      <div className="contact-info">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>We are here to help you make a first move to greener choice.</p>
        </div>
        <div className="contact-details">
          <div className="contact-column">
            <img src="./email.jpeg" alt="Email Icon" className="icon" />
            <label>Email</label>
            <p>We will reply within 2 working days</p>
            <br/>
            <br/>
            <a href="/mail" className="e-mail">
              hello@flow.com
            </a>
            
          </div>
          <div className="contact-column">
            <img src="./call.png" alt="Phone Icon" className="icon" />
            <label>Phone</label>
            <p>We are available Monday-Friday from<br/> 8 AM until 5 PM</p>
            <br/>
            <p>(239) 555-0108</p>
          </div>
          <div className="contact-column">
            <img src="./HQ.png" alt="HQ Office Icon" className="icon" />
            <br/>
            <label>HQ Office</label>
            <p>Visit us in out office</p>
            <br/>
            <br/>
            <p>3891 Ranchview Dr.Richardson, <br />California 62639</p>
          </div>
        </div>
      </div>
      {/* <div className="contact-form">
        <h2>Get in touch</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div> */}
       
     </div> 
  );
}

export default ContactUs;
