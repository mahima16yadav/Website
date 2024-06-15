import React from 'react';
import './emergency.css';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Book all your emergency services from home</h1>
        <p>
          Download the app to manage your projects, keep track of the progress
          and complete tasks without procrastinating. Stay on track and complete on time!
        </p>
        <br/>
        <br/>
        <p>Get the App</p>
        <div className="app-badges">
          <img src="./google play.jpeg" alt="Google Play Badge" />
          <img src="./app store.jpeg" alt="App Store Badge" />
        </div>
      </div>
      <div className="home-images">
        <img className="ambulance-image" src="./ambulance3.js" alt="Ambulance" />
        <img className="app-preview" src="./phone.jpeg" alt="App Preview" />
      </div>
    </div>
  );
}

export default Home;
