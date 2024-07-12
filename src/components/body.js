import React from "react";
import "./body.css";

const BodyComponent = () => {
  return (
    <div className="body-container">
      <div className="content">
        <br></br>
        <br></br>
        <br></br>
        <h4 className="subtitle">
          <img src="./dot.png" alt="Dot" className="dot-image" /> Future of Care
        </h4><br/>
        <div className="text">
          <h1 className="title">A Sustainable Vision</h1>
          <h1 className="title">for Ambulance</h1>
          <h1 className="title">Services</h1>
        </div>
        <br />
        <p className="description">
          "Join Our Vision for Enhanced Emergency Care: Embracing Futuristic
          Solutions<br></br>
          for Ambulance Fleet Management, Patient Care, and Service
          Optimization."
        </p>
      </div>

      <div className="images">
        <img
          src="./ambulance.jpeg"
          alt="Ambulance"
          className="ambulance-image"
        />
        <img src="./doctor.jpeg" alt="Doctor" className="doctor-image" />
      </div>
      <div className="button-container">
        <button className="contacts-buttons">Get in touch</button>
      </div>
    </div>
  );
};

export default BodyComponent;
