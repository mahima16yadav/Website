// // BodyComponent.jsx
// import React from 'react';
// import './body.css';
// // import ambulanceImage from './Assests/ambulance.jpeg';
// // import doctorImage from './Assests/doctor.jpeg';

// const BodyComponent = () => {
//     return (
//         <div className="body-container">
//             <h1 class="future-of-care">Future of Care</h1>
//             <div className="content">
//                 <h4 className="subtitle">Future of Care</h4>
//                 <h1 className="title">A Sustainable Vision</h1>
//                 <h1 className="title">for Ambulance</h1>
//                 <h1 className="title">Services</h1>
//                 <p className="description">"Join Our Vision for Enhanced Emergency Care: Embracing Futuristic Solutions for Ambulance Fleet Management, Patient Care, and Service Optimization."</p>
//             </div>

//             <div className="images">
//                 <img src="./ambulance.jpeg" alt="Ambulance" className="ambulance-image" />
//                 <img src="./doctor.jpeg" alt="Doctor" className="doctor-image" />
//             </div>
//             <div className="button-container">
//                 <button className="contact-button">Get in touch</button>
//             </div>
//         </div>
//     );
// };

// export default BodyComponent;


import React from 'react';
import './body.css';
// import dotImage from './Assets/dot.png'; // Path to your dot image

const BodyComponent = () => {
    return (
        <div className="body-container">
            {/* <h1 className="future-of-care">Future of Care</h1> */}
            <div className="content">
                <br></br>
                <br></br>
                <br></br>
                <h4 className="subtitle"><img src="./dot.png" alt="Dot" className="dot-image" />          Future of Care</h4>
                <h1 className="title">A Sustainable Vision</h1>
                <h1 className="title">for Ambulance</h1>
                <h1 className="title">Services</h1>
                <p className="description">"Join Our Vision for Enhanced Emergency Care: Embracing Futuristic Solutions<br></br>
                for Ambulance Fleet Management, Patient Care, and Service Optimization."</p>
            </div>

            <div className="images">
                <img src="./ambulance.jpeg" alt="Ambulance" className="ambulance-image" />
                <img src="./doctor.jpeg" alt="Doctor" className="doctor-image" />
            </div>
            <div className="button-container">
                <button className="contact-button">Get in touch</button>
            </div>
        </div>
    );
};

export default BodyComponent;
