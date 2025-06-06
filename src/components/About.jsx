// import React from 'react'

// export default function About() {
//   return (
//     <>
//       <section id="about" className="bg-body-secondary py-5 col-md-12">
//         <div className="container-fluid align-items-center justify-content-center " data-aos="fade-up">
//           <div className="row align-items-center">
//             <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
//               <img src="/assests/images/image.png" alt="no image found" height={400} width={400} className="img-fluid rounded-4 shadow-lg" />
//             </div>
//             <div className="col-md-6 " data-aos="fade-left">
//               <h2 className="text-primary  display-4 fw-bold mb-3 " data-aos="fade-up">About Me 🚀</h2>
//               <p className="lead" data-aos="fade-left" data-aos-delay="200">
//                 Hello! I'm <strong>Daksh Choudhary</strong>, a passionate <span className="text-success">Front-End Developer</span> and <span className="text-warning">I build responsive websites</span> from Greater Noida, India.
//               </p>
//               <p ata-aos="fade-left" data-aos-delay="600">
//                 I love transforming ideas into beautifully crafted interfaces. From intuitive UI/UX designs to efficient code, I thrive on solving real-world problems with clean, scalable solutions.
//               </p>
//               <p ata-aos="fade-left" data-aos-delay="800">
//                 I’ve built <strong>responsive websites</strong>, dynamic web apps, and even <strong>real-time systems</strong> — always with a focus on performance and accessibility.
//               </p>
//               <ul className="list-unstyled" ata-aos="fade-left" data-aos-delay="800">
//                 <li>🧠 Lifelong learner of tech trends & design</li>
//                 <li>🎮 Gamer | ✈️ Travel Lover | 🎥 Visual Thinker</li>
//                 <li>💼 Open to exciting opportunities in Web or Java development</li>
//               </ul>
//               <a href="#contact" className="btn btn-outline-primary mt-3" data-aos="zoom-in" data-aos-delay="400">Let’s Connect</a>
//             </div>
//           </div>
//         </div>

//         <div className="mt-4" data-aos="fade-right" >
//           <span className="badge bg-dark me-2" data-aos="zoom-in" data-aos-delay="20">HTML5</span>
//           <span className="badge bg-dark me-2" data-aos="zoom-in" data-aos-delay="40">CSS3</span>
//           <span className="badge bg-dark me-2" data-aos="zoom-in" data-aos-delay="60">JavaScript</span>
//           <span className="badge bg-dark me-2" data-aos="zoom-in" data-aos-delay="80">React</span>
//           <span className="badge bg-dark me-2" data-aos="zoom-in" data-aos-delay="100">Java</span>
//         </div>

//       </section>

//     </>
//   )
// }



import React from 'react';
// import aboutImg from '../assets/images/image.png'; 

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 text-center display-4 fw-bold mb-4" data-aos="fade-right">About Me 🚀</h2>
        <div className="row align-items-center g-4">
          {/* Left Image */}
          <div className="col-md-5 text-center" data-aos="fade-right">
            {/* <img
              src={aboutImg}
              alt="Daksh Choudhary"
              className="img-fluid rounded shadow"
              style={{ maxHeight: '450px', objectFit: 'cover' }}
            /> */}
            <img src="/assests/images/my_photo.jpg" alt="no image found" style={{ maxHeight: '450px', objectFit: 'cover' }} className="img-fluid rounded-4 shadow-lg" />
          </div>

          {/* Right Content */}
          <div className="col-md-7" data-aos="fade-left">
            {/* <h2 className="fw-bold mb-3">About Me</h2> */}
            {/* <p className="text-muted">
              I'm Daksh Choudhary, a web development enthusiast with strong skills in Frontend technologies. I love building user-friendly, responsive, and dynamic interfaces. I'm constantly exploring modern tools like React and GSAP to improve my craft.
            </p> */}
            <p className="lead" data-aos="fade-left" data-aos-delay="200">
              Hello! I'm <strong>Daksh Choudhary</strong>, <span className="text-success">a Web development enthusiast</span> and <span className="text-warning">I love building user-friendly, responsive, and dynamic interfaces.</span></p>

              <ul className="list-unstyled" ata-aos="fade-left" data-aos-delay="800">
                <li>🧠 Lifelong learner of tech trends & design</li>
                {/* <li>🎮 Gamer | ✈️ Travel Lover | 🎥 Visual Thinker</li> */}
                <li></li>
                <li>💼 Open to exciting opportunities in Web development</li>
              </ul>

            <div className="row mb-3" data-aos="fade-left" data-aos-delay="400">
              <div className="col-sm-6">
                <strong>Name:</strong> <span className="text-muted">Daksh Choudhary</span>
              </div>
              <div className="col-sm-6">
                <strong>DOB:</strong> <span className="text-muted">November 10, 1998</span>
              </div>
              <div className="col-sm-6">
                <strong>Address:</strong> <span className="text-muted">Noida, India</span>
              </div>
              <div className="col-sm-6">
                <strong>Email:</strong>{' '}
                <a href="mailto:dakshchaudhary584@gmail.com" className="text-muted text-decoration-none">
                  dakshchaudhary584@gmail.com
                </a>
              </div>
              <div className="col-sm-6">
                <strong>Phone:</strong>{' '}
                <a href="tel:+9199273269XX" className="text-muted text-decoration-none">
                  +91-99273269XX
                </a>
              </div>
            </div>

            {/* Interests */}
            <div className="d-flex gap-3 flex-wrap mt-3 mb-4" data-aos="zoom-in">
              <span className="badge rounded-pill bg-dark text-white px-3 py-2" data-aos="fade-left" data-aos-delay="200">🎮 Gaming</span>
              <span className="badge rounded-pill bg-dark text-white px-3 py-2" data-aos="fade-left" data-aos-delay="250">✈️ Travel</span>
              <span className="badge rounded-pill bg-dark text-white px-3 py-2" data-aos="fade-left" data-aos-delay="300">🎥 Movies</span>
              <span className="badge rounded-pill bg-dark text-white px-3 py-2" data-aos="fade-left" data-aos-delay="350">💻 Web Dev</span>
            </div>

 <a href="https://www.linkedin.com/in/daksh-choudhary-286a21257/" target='_blank' className="btn btn-outline-primary mt-3" data-aos="zoom-in" data-aos-delay="400">Let’s Connect</a>
            
            {/* <a
              href="/path-to-your-cv.pdf"
              className="btn btn-primary"
              download
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              Download CV
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
