import React from 'react';
import './contact.css';

function ContactUs() {
  return (
    <div className="contact-us">
      <div className="contact-info">
        <div classname="contact-us">
          <h1>Contact Us</h1>
          <p>We are here to help you make a first move to greener choice.</p>
        </div>
        <div className="contact-details">
          <div>
            <label htmlFor="email">Email</label>
            <p>We will reply within 2 working days</p>
            <p>hello@flow.com</p>
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <p>We are available Monday-Friday from 8 AM until 5 PM</p>
            <p>(239) 555-0108</p>
          </div>
          <div>
            <label htmlFor="address">HQ Office</label>
            <p>
              3891 Ranchview Dr. Richardson, California 62639
            </p>
          </div>
        </div>
      </div>
      <div className="contact-form">
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
      </div>
      <div className="other-sections">
        {/* Add other sections here, like navigation, resources, etc. */}
      </div>
    </div>
  );
}

export default ContactUs;
