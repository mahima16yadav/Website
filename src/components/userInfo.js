// ContactUs.js
import React, { useState } from 'react';
import './userInfo.css'; // Import the CSS file

const UserInfo = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    region: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a server)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="number">Phone Number:</label>
          <input
            type="tel"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="region">Region (City/State):</label>
          <input
            type="text"
            id="region"
            name="region"
            value={formData.region}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserInfo;
