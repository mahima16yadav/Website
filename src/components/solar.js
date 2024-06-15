import React from 'react';
import './solar.css';

function SolarEnergy() {
  return (
    <div className="solar-energy-container">
      <div className="text-content">
        <h1>Solar Energy</h1>
        <br/><br/>
        <p>
          Solar panels convert sunlight into electricity. Photovoltaic (PV)<br/>
          cells on these panels capture the energy from the sun and convert<br/> it
          into electrical power.
        </p>
        <br/>
        <br/>
        <button className="learn-more-button">Learn more</button>
        <br/><br/>
        <br/><br/>
        <div className="arrows">
          <span>&larr;</span>
          <span>&rarr;</span>
        </div>
      </div>
      <div className="image-content">
        <img src="./ambulance2.png" alt="Ambulance"/>
      </div>
    </div>
  );
}

export default SolarEnergy;
