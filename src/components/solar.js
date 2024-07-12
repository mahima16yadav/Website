import React, { useState, useEffect } from "react";
import "./solar.css";
// import { useState } from "react";

function SolarEnergy() {
  
  const [contentIndex, setContentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const textContents = [
    {
      title: "Emergency Ambulance",
      text: `Solar panels convert sunlight into electricity. Photovoltaic (PV)
            cells on these panels capture the energy from the sun and convert
            it into electrical power.`,
    },
    {
      title: "Sustainable Energy",
      text: `Sustainable energy comes from natural processes that are
            constantly replenished. This includes sunlight, geothermal heat,
            wind, tides, water, and various forms of biomass.`,
    },
    {
      title: "Future of Power",
      text: `The future of power generation lies in the development of more
            efficient and cost-effective solar panels, wind turbines, and other
            renewable energy technologies.`,
    },
  ];

  const [offset, setOffset] = useState(0);

  const handleShiftLeft = () => {
    setOffset((prevOffset) => Math.min(prevOffset + 344, 0));
  };

  const handleShiftRight = () => {
    setOffset((prevOffset) => Math.max(prevOffset - 344, -344 * 2)); 
  };

  return (
    <div className="container">
      <div className="solar-energy-container">
        <div className="text-content" style={{ transform: `translateX(${offset}px)` }}>
          <h1>{textContents[contentIndex].title}</h1>
          <br />
          <p>{textContents[contentIndex].text}</p>
          <br />
          <button className="learn-more-button">Learn more</button>
        </div>

        <div className="arrows">
          
          <div className="custom-class" onClick={handleShiftLeft}>
            <span>&larr;</span>
          </div>
          <div className="custom-class" onClick={handleShiftRight}>
            <span>&rarr;</span>
          </div>
        </div>
        <div className="image-content">
          <img src="./ambulance2.png" alt="Ambulance" />
        </div>
      </div>
    </div>
  );
}

export default SolarEnergy;