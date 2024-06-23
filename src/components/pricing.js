import React from 'react';
import './pricing.css';

const PricingSection = () => {
  return (
    <div className="pricing-section">
      <h1 className="pricing-title">Pricing</h1>
      <p className="pricing-subtitle">
        Our pricing plans are simple and designed to cater to households and companies of various<br/>sizes. Choose a plan that suits your needs and budget.
      </p>
      <div className="pricing-container">
        <div className="pricing-card">
          <h3 className="plan-name">Enterprise</h3><br/>
          <h2 className="plan-price">Custom</h2><br/>
          <p className="plan-description">
            Tailored for businesses with significant energy demands
          </p><br/>
          <button className="contact-button">Contact us  &rarr;</button>
        </div>
        <div className="included-features">
          <h3>What’s included</h3>
          <ul>
            <li><span className="feature-check">&#x2713;</span> Customizable subscription options</li>
            <li><span className="feature-check">&#x2713;</span> Dedicated technical support and assistance</li>
            <li><span className="feature-check">&#x2713;</span> Advanced analytics and 24/7 priority support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
