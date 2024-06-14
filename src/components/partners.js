import React from 'react';
import './partners.css';
// import AcmeCorp from './acme.png';
// import Quantum from './quantum.png';
// import EchoValley from './echovalley.png';
// import Celestial from './celestial.png';
// import Pulse from './pulse.png';
// import Ape from './ape.png';

function Partners() {
  return (
    <div className="partners">
      <h4>Partners That Trusted Us</h4>
      <div className="partner-logos">
        <img src="./acme.png" alt="AcmeCorp Logo" /><h4>Acme Crop</h4>
        <img src="./quantum.png" alt="Quantum Logo" /><h4>Quantum</h4>
        <img src="./echo.png" alt="EchoValley Logo" /><h4>Echo Valley</h4>
        <img src="./celestial.jpeg"alt="Celestial Logo" /><h4>Celestial</h4>
        <img src="./pulse.png" alt="Pulse Logo" /><h4>PULSE</h4>
        <img src="./apex.png" alt="Ape Logo" /><h4>Apex</h4>
      </div>
    </div>
  );
}

export default Partners;
