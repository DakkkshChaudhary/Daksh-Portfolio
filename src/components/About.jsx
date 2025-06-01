import React from 'react'

export default function About() {
  return (
    <>
      {/* <section id="about" className="py-5 bg-light">
        <div className="container-fluid" data-aos="fade-right">
          <div className='row vh-100'>
            <div className="col-md-12 bg-secondary text-white d-flex justify-content-center  p-4" data-aos="fade-left">
              <h2 className='p-2' data-aos="fade-down" >About Me</h2>
              <p className='lead p-2' data-aos="fade-right">
                I'm a passionate web developer with experience in React, Bootstrap, and Java.
                I love creating beautiful and responsive websites and solving real-world problems.
              </p>
              
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid" data-aos="fade-up">
        <div className="row vh-100">
          <div className="col-md-6 bg-dark text-white d-flex justify-content-center align-items-center p-4" data-aos="fade-left"></div>
        </div>
      </div> */}




      <section id="about" className="bg-light py-5">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
              <img src="/assets/images/image.png" alt="no image found" className="img-fluid rounded-4 shadow-lg" />
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <h2 className="fw-bold mb-3 text-primary" data-aos="fade-up">About Me 🚀</h2>
              <p className="lead" data-aos="fade-left" data-aos-delay="200">
                Hello! I'm <strong>Daksh Choudhary</strong>, a passionate <span className="text-success">Front-End Developer</span> and <span className="text-warning">I build responsive websites</span> from Greater Noida, India.
              </p>
              <p ata-aos="fade-left" data-aos-delay="600">
                I love transforming ideas into beautifully crafted interfaces. From intuitive UI/UX designs to efficient code, I thrive on solving real-world problems with clean, scalable solutions.
              </p>
              <p ata-aos="fade-left" data-aos-delay="800">
                I’ve built <strong>responsive websites</strong>, dynamic web apps, and even <strong>real-time systems</strong> — always with a focus on performance and accessibility.
              </p>
              <ul className="list-unstyled" ata-aos="fade-left" data-aos-delay="800">
                <li>🧠 Lifelong learner of tech trends & design</li>
                <li>🎮 Gamer | ✈️ Travel Lover | 🎥 Visual Thinker</li>
                <li>💼 Open to exciting opportunities in Web or Java development</li>
              </ul>
              <a href="#contact" className="btn btn-outline-primary mt-3" data-aos="zoom-in" data-aos-delay="400">Let’s Connect</a>
            </div>
          </div>
        </div>

        <div className="mt-4" data-aos="fade-right" >
          <span className="badge bg-dark me-2" data-aos="zoom-in" data-aos-delay="20">HTML5</span>
          <span className="badge bg-dark me-2" data-aos="zoom-in" data-aos-delay="40">CSS3</span>
          <span className="badge bg-dark me-2" data-aos="zoom-in" data-aos-delay="60">JavaScript</span>
          <span className="badge bg-dark me-2" data-aos="zoom-in" data-aos-delay="80">React</span>
          <span className="badge bg-dark me-2" data-aos="zoom-in" data-aos-delay="100">Java</span>
        </div>

      </section>

    </>
  )
}
