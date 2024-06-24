import React, { useState } from 'react';
import './faq.css';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is green energy?',
      answer: ''
    },
    {
      question: 'How does green energy benefit the environment?',
      answer: ''
    },
    {
      question: 'What green energy solutions does your company offer?',
      answer: 'We provide a range of green energy solutions, including solar power systems, wind turbines, energy-efficient appliances, and smart home technologies to enhance energy sustainability.'
    },
    {
      question: 'What support services do you offer after installing green energy solutions?',
      answer: ''
    },
    {
      question: 'How do solar panels work?',
      answer: ''
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="left-content">
        <div className="faq-header">
          <span className="faq-dot"></span>
          <h1><img src="./dot.png" alt="Dot" className="dot-image" />      FAQ</h1>
        </div>
        <h2>Answers to the<br/> frequently asked<br/> questions.</h2>
        <div className="faq-contact-icon"><img src="./circle.jpeg" alt="circle"/></div>
        <div className="faq-contact">
          
          <div className="faq-contact-info">
            <h3>Still have questions?</h3>
            <p>For assistance, please visit our <a href="#">Contact Us</a> page or call our customer<br/> support hotline at <strong>(671) 555-0110</strong>. Our dedicated team is ready to help<br/> you on your journey to a greener, more sustainable future.</p>
          </div>
        </div>
      </div>
      <div className="right-content">
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h3>{faq.question}</h3>
                <span>{activeIndex === index ? '—' : '+'}</span>
              </div>
              {activeIndex === index && <div className="faq-answer"><p>{faq.answer}</p></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
