import React from 'react';
import './pricing.css';

const PricingSection = () => {
  return (
    <div className="pricing-section">
      <h1>Pricing</h1>
      <p>
        Our pricing plans are simple and designed to cater to households and companies of various sizes. Choose a plan that suits your needs and budget.
      </p>
      <div className="pricing-cards">
        <div className="pricing-card">
          <h2>Basic</h2>
          <p className="price">$59 <span>per month</span></p>
          <p>For small households or businesses with moderate energy consumption</p>
          <button className="get-started">Get started</button>
          <ul>
            <li>Fixed amount of renewable energy supply</li>
            <li>Installation support for chosen energy type</li>
            <li>Basic customer support included</li>
          </ul>
        </div>
        <div className="pricing-card">
          <h2>Basic</h2>
          <p className="price">$59 <span>per month</span></p>
          <p>For small households or businesses with moderate energy consumption</p>
          <button className="get-started">Get started</button>
          <ul>
            <li>Fixed amount of renewable energy supply</li>
            <li>Installation support for chosen energy type</li>
            <li>Basic customer support included</li>
          </ul>
        </div>
        <div className="pricing-card popular">
          <h2>Enterprise</h2>
          <p className="price">$59 <span>per month</span></p>
          <p>Tailored for businesses with significant energy demands</p>
          <button className="contact-us">Contact us</button>
          <ul>
            <li>Customizable subscription options</li>
            <li>Dedicated technical support and assistance</li>
            <li>Advanced analytics and 24/7 priority support</li>
          </ul>
        </div>
        <div className="pricing-card">
          <h2>Basic</h2>
          <p className="price">$59 <span>per month</span></p>
          <p>For small households or businesses with moderate energy consumption</p>
          <button className="get-started">Get started</button>
          <ul>
            <li>Fixed amount of renewable energy supply</li>
            <li>Installation support for chosen energy type</li>
            <li>Basic customer support included</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
