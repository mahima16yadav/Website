import React from 'react';
import './pricing.css';

function Pricing() {
  return (
    <div className="pricing-container">
      <h1>Pricing</h1>
      <p className="description">
        Our pricing plans are simple and designed to cater to households and companies of various
        sizes. Choose a plan that suits your needs and budget.
      </p>
      <div className="pricing-card">
        <div className="pricing-left">
          <p className="enterprise">Enterprise</p>
          <h2>Custom</h2>
          <p className="tailored">Tailored for businesses with significant energy demands</p>
          <button className="contact-button">Contact us →</button>
        </div>
        <div className="pricing-right">
          <h3>What’s included</h3>
          <ul>
            <li>
              <span className="check-icon">✔</span> Customizable subscription options
            </li>
            <li>
              <span className="check-icon">✔</span> Dedicated technical support and assistance
            </li>
            <li>
              <span className="check-icon">✔</span> Advanced analytics and 24/7 priority support
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
