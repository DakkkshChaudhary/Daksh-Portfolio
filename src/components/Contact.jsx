import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Contact = () => {
  // useEffect(() => {
  //   AOS.init({ duration: 1000 });
  //   const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  //   tooltipTriggerList.forEach(
  //     (tooltip) => new window.bootstrap.Tooltip(tooltip)
  //   );
  // }, []);

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 text-center display-4 fw-bold mb-4" data-aos="fade-down">📬 Contact Me</h2>

        <div className="row g-4">
          {/* Contact Form */}
          <div className="col-md-6" data-aos="fade-right">
            <form className="bg-white p-4 rounded shadow-sm">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Your Name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Your Email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100" data-aos="zoom-in">Send Message</button>
            </form>
          </div>

          {/* Info Section */}
          <div className="col-md-6" data-aos="fade-left">
            <div className="row text-center mb-4 gap-1">
              <div className="col-md-4">
                <i className="fas fa-map-marker-alt fa-2x text-primary mb-2"></i>
                <h6>Location</h6>
                <p>Greater Noida, India</p>
              </div>
              <div className="col-md-4">
                <i className="fas fa-envelope fa-2x text-primary mb-2"></i>
                <h6>Email</h6>
                <p>dakshchaudhary584@gmail.com</p>
              </div>
              <div className="col-md-4">
                <i className="fas fa-phone-alt fa-2x text-primary mb-2"></i>
                <h6>Phone</h6>
                <p>+91 9927326959</p>
              </div>
            </div>

           
            <div className="text-center">
              <div className="d-flex justify-content-center gap-4 mb-3">
                <a href="https://linkedin.com/in/daksh-choudhary-286a21257/" target="_blank" rel="noreferrer" className="text-dark" data-bs-toggle="tooltip" title="LinkedIn">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="https://github.com/DakkkshChaudhary" target="_blank" rel="noreferrer" className="text-dark" data-bs-toggle="tooltip" title="GitHub">
                  <i className="fab fa-github fa-2x"></i>
                </a>
                <a href="mailto:dakshchaudhary584@gmail.com" className="text-dark" data-bs-toggle="tooltip" title="Email">
                  <i className="fas fa-envelope fa-2x"></i>
                </a>
              </div>
              {/* <a href="/cv.pdf" className="btn btn-outline-dark me-2" download>
                <i className="fas fa-file-download me-2"></i>Download CV
              </a> */}
              {/* <a href="https://calendly.com/yourusername" className="btn btn-outline-primary" target="_blank">
                <i className="fas fa-calendar-alt me-2"></i>Schedule a Call
              </a> */}
            </div>
          </div>

          {/* Google Map */}
          <div className="col-12" data-aos="fade-up">
            {/* <iframe
              title="location-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.428178509306!2d77.44354187422104!3d28.58936578604195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceef2c3da8ab5%3A0xb8ae0edb7952465a!2sMayfair%20Residency!5e1!3m2!1sen!2sin!4v1749210405403!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded shadow-sm"
            ></iframe> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
