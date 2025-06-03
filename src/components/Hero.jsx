import React from 'react'

// import Typed from 'react-typed';
import { ReactTyped } from 'react-typed';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function Hero() {
  return (
    <>
      <section id="hero" className="bg-body-secondary text-white text-center py-5 d-flex align-items-center justify-content-center col-md-12">
        <div className="container-fluid">
          <div className="row vh-100" data-aos="fade-up" data-aos-delay="100">
            <div className=" bg-dark text-white d-flex justify-content-center align-items-center p-4" data-aos="fade-up" data-aos-delay="200">

              <div className="d-flex flex-column align-items-center text-center">

                <h1 className="display-4 fw-bold mb-3" data-aos="fade-up" data-aos-delay="300">
                  Hello, I’m Daksh Choudhary 👋
                </h1>

                <h2 className="lead fs-4 text-primary mb-3">
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

                <div className="d-flex flex-wrap gap-4 justify-content-center mt-4">
                  <a href="https://www.linkedin.com" className="btn btn-secondary" data-aos="zoom-in" data-aos-delay="600">
                    <i className="fa-brands fa-github fa-2x"></i>
                  </a>
                  <a href="https://www.linkedin.com" className="btn btn-secondary" data-aos="zoom-in" data-aos-delay="600">
                    <i className="fa-brands fa-twitter fa-2x"></i>
                  </a>
                  <a href="https://www.linkedin.com" className="btn btn-secondary" data-aos="zoom-in" data-aos-delay="600">
                    <i className="fa-brands fa-instagram fa-2x"></i>
                  </a>
                  <a href="https://www.linkedin.com" className="btn btn-secondary" data-aos="zoom-in" data-aos-delay="600">
                    <i className="fa-brands fa-facebook fa-2x"></i>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <section id="hero" className="bg-body-secondary text-white text-center py-5 d-flex align-items-center justify-content-center vh-100 overflow-hidden">
  <div className="container-fluid">
    <div className="row" data-aos="fade-up" data-aos-delay="100">
      <div className="col-12 bg-dark text-white d-flex flex-column justify-content-center align-items-center p-4" data-aos="fade-up" data-aos-delay="200">
        
        <h1 className="display-4 fw-bold mb-3" data-aos="fade-up" data-aos-delay="300">
          Hello, I’m Daksh Choudhary 👋
        </h1>

        <h2 className="lead fs-4 text-primary mb-3">
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

        
        <div className="d-flex flex-wrap gap-3 justify-content-center mt-4">
          <a href="https://github.com" className="btn btn-secondary rounded-circle" data-aos="zoom-in" data-aos-delay="600">
            <i className="fa-brands fa-github fs-4"></i>
          </a>
          <a href="https://twitter.com" className="btn btn-secondary rounded-circle" data-aos="zoom-in" data-aos-delay="600">
            <i className="fa-brands fa-twitter fs-4"></i>
          </a>
          <a href="https://instagram.com" className="btn btn-secondary rounded-circle" data-aos="zoom-in" data-aos-delay="600">
            <i className="fa-brands fa-instagram fs-4"></i>
          </a>
          <a href="https://facebook.com" className="btn btn-secondary rounded-circle" data-aos="zoom-in" data-aos-delay="600">
            <i className="fa-brands fa-facebook fs-4"></i>
          </a>
        </div>

      </div>
    </div>
  </div>
</section>
 */}

    </>
  )
}

{/* right section */ }
{/* <div className="image-wrapper col-md-4 bg-secondary d-flex justify-content-center align-items-center p-4" data-aos="fade-up" >
              <img src="/assests/images/image.png" alt="no image" className="img-fluid" />
            </div> */}
