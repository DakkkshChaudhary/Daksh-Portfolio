import React from 'react'

export default function Projects() {
  return (
    <>
      <section id="projects" className="bg-body-secondary py-5  text-center  d-flex align-items-center justify-content-center">
        <div className="container" data-aos="fade-up">
          <h2 className="display-4 fw-bold mb-3">🎯 Projects</h2>

          <div className="row row-cols-1 row-cols-md-2 g-4" data-aos="fade-up">
            <div className="col">
              <div className="card" data-aos="fade-right">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">QuickBasket</h5>
                  <p className="card-text">QuickBasket is a user-friendly grocery shopping web app that allows users to browse, add to cart, and checkout items quickly. It streamlines the online grocery experience with a clean UI and smooth navigation.</p>
                  <a href="https://github.com/DakkkshChaudhary/Ecommerce-project" className="btn btn-outline-secondary" data-aos="zoom-in" data-aos-delay="400"><i className="fa-brands fa-github fa-3x"></i></a>
                </div>
              </div>
            </div>
            {/* <div className="col">
              <div className="card " data-aos="fade-left">
                <img src="/assests/images/image.png" className="card-img-top " alt="..." />
                <div className="card-body">
                  <h5 className="card-title">ChatLoop</h5>
                  <p className="card-text">ChatLoop is a real-time chat application that allows users to communicate seamlessly. With features like group chats, file sharing, and message notifications, it enhances online collaboration.</p>
                  <a href="#" className="btn btn-outline-secondary" data-aos="zoom-in" data-aos-delay="400"><i className="fa-brands fa-github fa-3x"></i></a>
                </div>
              </div>
            </div> */}

            {/* <div className="col">
              <div className="card text-white position-relative" data-aos="fade-left" style={{ height: '400px', backgroundImage: `url('/assests/images/image.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="position-absolute top-50 start-50 translate-middle text-center bg-dark bg-opacity-50 p-4 rounded" style={{ width: '90%' }}>
                  <h5 className="card-title">ChatLoop</h5>
                  <p className="card-text">
                    ChatLoop is a real-time chat application that allows users to communicate seamlessly. With features like group chats, file sharing, and message notifications, it enhances online collaboration.
                  </p>
                  <a href="#" className="btn btn-outline-light mt-3" data-aos="zoom-in" data-aos-delay="400">
                    <i className="fa-brands fa-github fa-2x"></i>
                  </a>
                </div>
              </div>
            </div> */}

            <div className="col" data-aos="fade-right">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-outline-secondary" data-aos="zoom-in" data-aos-delay="400"><i className="fa-brands fa-github fa-3x"></i></a>
                </div>
              </div>
            </div>
            <div className="col" data-aos="fade-left">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <a href="#" className="btn btn-outline-secondary" data-aos="zoom-in" data-aos-delay="400"><i className="fa-brands fa-github fa-3x"></i></a>
                </div>
              </div>
            </div>


            <div className="col" data-aos="fade-right">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-outline-secondary" data-aos="zoom-in" data-aos-delay="400"><i className="fa-brands fa-github fa-3x"></i></a>
                </div>
              </div>
            </div>
            <div className="col" data-aos="fade-left">
              <div className="card">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <a href="#" className="btn btn-outline-secondary" data-aos="zoom-in" data-aos-delay="400"><i className="fa-brands fa-github fa-3x"></i></a>
                </div>
              </div>
            </div>
          </div>



          {/* <ul>
            <li>✈️ Airline Management System</li>
            <li>🎯 Real-Time Face Attendance System</li>
            <li>🔥 Hotstar Clone Bootcamp Project</li>
            
            ⭐ 10+ Projects Completed
              ⏱ 1000+ Hours of Coding
            💡 Always Learning Something New
          </ul> */}
        </div>
      </section>

    </>
  )
}
