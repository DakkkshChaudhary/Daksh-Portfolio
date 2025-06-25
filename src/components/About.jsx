import React from 'react';

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
            <img src="/assests/images/my_photo.jpg" alt="Daksh Choudhary Image" style={{ maxHeight: '450px', objectFit: 'cover' }} className="img-fluid rounded-4 shadow-lg" />
          </div>

          {/* Right Content */}
          <div className="col-md-7" data-aos="fade-left">
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
                <a href="tel:+919927326959" className="text-muted text-decoration-none">
                  +91-9927326959
                </a>
              </div>
            </div>

        
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
