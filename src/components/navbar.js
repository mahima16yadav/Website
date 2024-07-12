// Navbar.js
import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="./logo.png" alt="Company Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
      
      {/* <div className="navbar-login">
        <a href="#login">Log In &rarr;</a>
      </div> */}

    </nav>
  );
};

export default Navbar;
