import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import BodyComponent from './components/body';
import About from './components/aboutUs';
import ContactUs from './components/contact';
// import Partners from './components/partners';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <BodyComponent/>
      <About/>
      <ContactUs/>
      {/* <Partners/> */}
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     {/* Navigation bar */}
    //     <nav>
    //       <ul>
    //         <li>
    //           <a href="/">Home</a>
    //         </li>
    //         <li>
    //           <a href="/about">About Us</a>
    //         </li>
    //         <li>
    //           <a href="/pricing">Pricing</a>
    //         </li>
    //         <li>
    //           <a href="/contact">Contact Us</a>
    //         </li>
    //         <li>
    //           <a href="/login">Log In</a>
    //         </li>
    //       </ul>
    //     </nav>

    //     {/* Hero section with title, subtitle and button */}
    //     <div className="hero">
    //       <h1>Future of Care</h1>
    //       <h2>A Sustainable Vision for Ambulance Services</h2>
    //       <p>"Join Our Vision for Enhanced Emergency Care: Embracing Futuristic Solutions for Ambulance Fleet Management, Patient Care, and Service Optimization."</p>
    //       <button>Get in touch</button>
    //     </div>
    //   </header>
    // </div>
  );
}

export default App;
