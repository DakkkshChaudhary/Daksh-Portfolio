import React from 'react'

// import Typed from 'react-typed';
import { ReactTyped } from 'react-typed';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function Hero() {
  return (
    <>

      <section id="hero" className="bg-primary text-white text-center py-5 d-flex align-items-center justify-content-center vh-100" >
        <div className="container-fluid" >
          <div className="row vh-100" data-aos="fade-up" data-aos-delay="100">
            {/* Left Column */}
            <div className="col-md-8 bg-dark text-white d-flex justify-content-center align-items-center p-4" data-aos="fade-up" data-aos-delay="200">
              <div className="d-flex flex-column align-items-center text-center">
                <h1 className="display-4 fw-bold mb-3" data-aos="fade-up" data-aos-delay="300">
                  Hello, I’m Daksh Choudhary 👋
                </h1>

                <h2 className="lead fs-3 text-primary mb-3">
                  <ReactTyped
                    strings={[
                      "I'm a Front-end Developer",
                      "I'm a React.js Developer",
                      "I build responsive websites",
                      "I love clean UI/UX"
                    ]}
                    typeSpeed={80}
                    backSpeed={40}
                    backDelay={1500}
                    loop
                  />
                </h2>

                <a href="#projects" className="btn btn-primary btn-lg mt-2" data-aos="zoom-in" data-aos-delay="600">
                  View My Projects
                </a>
                <a href="www.linkedin.com" className="btn btn-secondary btn-lg mt-2" data-aos="zoom-in" data-aos-delay="600">
                  <i className="fa-brands fa-linkedin"> </i>
                  
                </a>
              </div>
            </div>


            {/* right section */}
            <div className="image-wrapper col-md-4 bg-secondary d-flex justify-content-center align-items-center p-4" data-aos="fade-up" >
              <img src="/assets/images/image.png" alt="no image" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
