// import React from 'react';
// import './aboutUs.css';

// function About() {
//   return (
//     <div className="About">
//       <main>
//         {/* About Us section */}
//         <section className="about-us">
//             <div classname="head">
//                 <h2>About Us</h2>
//             </div>
          
//           <br></br>
//           <p>At Lifeline Ambulance Services, we're committed to saving lives sustainably.<br></br>
//           From fuel-efficient vehicles to waste reduction, we're pioneering eco-conscious<br></br>
//           practices in emergency medical transportation. Join us in driving toward a<br></br>
//           greener future, one ambulance ride at a time.</p>
//           <br></br>
//           <br></br>
//           <div className="button-container">
//             <button className="contact-button">
//             <a href="/about" className="learn-more">Read more</a>
//             </button>
//           </div>
          
//         </section>
//       </main>
//       {/* <footer className="About-footer">
//         <p>Copyright © 2024 Lifeline Ambulance Services. All rights reserved.</p>
//       </footer> */}
//     </div>
//   );
// }

// export default About;





// import React from 'react';
// import './aboutUs.css';

// function About() {
//   return (
//     <div className="About">
//       <main>
//         {/* About Us section */}
//         <section className="about-us">
//             <div className="head">
//                 <h2>About Us</h2>
//             </div>
//             <p>At Lifeline Ambulance Services, we're committed to saving lives sustainably.<br />
//             From fuel-efficient vehicles to waste reduction, we're pioneering eco-conscious<br />
//             practices in emergency medical transportation. Join us in driving toward a<br />
//             greener future, one ambulance ride at a time.</p>
//             <br />
//             <br />
//             <div className="button-container">
//                 <a href="/about" className="contact-button learn-more">Read more</a>
//             </div>
          
//         </section>
//         <div classname="contents">
//         <h4 className="subtitles"><img src="./dot.png" alt="Dot" className="dot-image" />          Solutions</h4>
//         </div>
//       </main>
//       {/* <footer className="About-footer">
//         <p>Copyright © 2024 Lifeline Ambulance Services. All rights reserved.</p>
//       </footer> */}
//     </div>
//   );
// }

// export default About;

import React from 'react';
import './aboutUs.css';

function About() {
  return (
    <div className="About">
      <main>
        {/* About Us section */}
        <section className="about-us">
          <div className="head">
            <h2>About Us</h2>
          </div>
          <p>
            At Lifeline Ambulance Services, we're committed to saving lives
            sustainably.<br /> From fuel-efficient vehicles to waste reduction, we're
            pioneering eco-conscious<br /> practices in emergency medical
            transportation. Join us in driving toward a<br /> greener future, one
            ambulance ride at a time.
          </p>
          <br />
          <br />
          <div className="button-container">
            <a href="/about" className="contact-button learn-more">
              Read more
            </a>
          </div>
        </section>
        <div classname="contents">
             <h4 className="subtitles"><img src="./dot.png" alt="Dot" className="dot-image" />          Solutions</h4>
        </div>
        {/* Key to a Clean Future section */}
        <section className="key-to-clean-future">
          <div className="content">
            {/* <h4>
              <img src="./dot.png" alt="Dot" className="dot-image" /> Key to a Clean Future
            </h4>  */}
            <div classname="key">
            <h1>Key to clean future</h1>
            </div>
            <p>
              Our commitment to green energy is paving the way for a cleaner,
              healthier planet.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
