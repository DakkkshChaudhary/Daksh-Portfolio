import React from 'react'

export default function Contact() {
  return (
    <>
      <section id="contact" className="py-5 bg-light">
      <div className="container" data-aos="fade-up">
        <h2 className="text-center mb-5 text-center display-4 fw-bold mb-4" data-aos="fade-right">📬 Contact Me</h2>
        {/* <h2 className="text-center fw-bold mb-5">📬 Contact Me</h2> */}

        <div className="row g-4">
          <div className="col-md-5" data-aos="fade-right">
            <div className="bg-white p-4 rounded shadow-sm h-100">
              <h5 className="mb-3">Get in touch</h5>
              <p><i className="fas fa-map-marker-alt me-2 text-primary"></i> Noida, India</p>
              <p><i className="fas fa-envelope me-2 text-primary"></i> dakshchaudhary584@gmail.com</p>
              <p><i className="fas fa-phone-alt me-2 text-primary"></i> +91 99273269XX</p>
              <div className="mt-3">
                <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="text-dark me-3" data-aos="zoom-in">
                  <i className="fab fa-github fa-2x"></i>
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="text-dark me-3" data-aos="zoom-in">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="mailto:dakshchaudhary584@gmail.com" className="text-dark" data-aos="zoom-in">
                  <i className="fas fa-envelope fa-2x"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-7" data-aos="fade-left">
            <form className="bg-white p-4 rounded shadow-sm">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" className="form-control" placeholder="Your name" required />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className="form-control" placeholder="Your email" required />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" className="form-control" rows="4" placeholder="Your message..." required></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100" data-aos="zoom-in">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
