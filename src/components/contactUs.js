import React from 'react';
import './contactUs.css';

const ContactUs = () => {
    return (
        <div className="contact-us">
            <h1>Contact us</h1>
            <p>We are here to help you make a first move to greener choice.</p>
            <div className="contact-methods">
                <div className="contact-method">
                    <span className="icon">📧</span>
                    <h2>Email</h2>
                    <p>We will reply within 2 working days</p>
                    <div classname="link"><a href="mailto:hello@fflow.com">hello@fflow.com</a></div>
                </div>
                <div className="contact-method">
                    <span className="icon">📞</span>
                    <h2>Phone</h2>
                    <p>We are available Monday-Friday from 8 AM until 5 PM</p>
                    <a href="tel:+12395550108">(239) 555-0108</a>
                </div>
                <div className="contact-method">
                    <span className="icon">📍</span>
                    <h2>HQ Office</h2>
                    <p>Visit us in our office</p>
                    <address>
                        3891 Ranchview Dr. Richardson,<br />
                        California 62639
                    </address>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
