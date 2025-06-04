import React from 'react'
// import 'aos/dist/aos.css';

// import { useEffect } from 'react';

export default function Projects() {
  // useEffect(() => {
  //   Aos.init({
  //     duration: 1000, 
  //     once: true      
  //   });
  // }, []);
  return (
    <>
      <section id="projects" className="bg-body-secondary py-5  text-center  d-flex align-items-center justify-content-center">
        <div className="container" data-aos="fade-up">
          <h2 className="display-4 fw-bold mb-3">🎯 Projects</h2>

          <div className="row row-cols-1 row-cols-md-2 g-4" data-aos="fade-up">
            <div className="col" >
              <div className="card text-white position-relative" data-aos="zoom-in-up" style={{ height: '325px', backgroundImage: `url('/assests/images/quickbasket.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="position-absolute top-50 start-50 translate-middle text-center bg-dark bg-opacity-50 p-4 rounded" style={{ width: '90%' }}>
                  <h5 className="card-title">QuickBasket</h5>
                  <p className="card-text">
                    QuickBasket is a user-friendly grocery shopping web app that allows users to browse, add to cart, and checkout items quickly. It streamlines the online grocery experience with a clean UI and smooth navigation.
                  </p>
                  <a href="#" className="btn btn-outline-light mt-3" data-aos="zoom-in" data-aos-delay="400">
                    <i className="fa-brands fa-github fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>
            

          <div className="col" data-aos="fade-left">
              <div className="card text-white position-relative" data-aos="zoom-in-up" style={{ height: '325px', backgroundImage: `url('/assests/images/chating mobile.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
            </div>
            

            <div className="col" data-aos="fade-left">
              <div className="card text-white position-relative" data-aos="zoom-in-up" style={{ height: '325px', backgroundImage: `url('/assests/images/smart-home.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="position-absolute top-50 start-50 translate-middle text-center bg-dark bg-opacity-50 p-4 rounded" style={{ width: '90%' }}>
                  <h5 className="card-title">Smart Home Dashboard</h5>
                  <p className="card-text">
                    Smart Home Dashboard is a comprehensive solution for managing and monitoring smart home devices. It provides real-time data visualization, device control, and automation features to enhance the smart home experience.
                  </p>
                  <a href="#" className="btn btn-outline-light mt-3" data-aos="zoom-in" data-aos-delay="400">
                    <i className="fa-brands fa-github fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>
            


            <div className="col" data-aos="fade-left">
              <div className="card text-white position-relative" data-aos="zoom-in-up" style={{ height: '325px', backgroundImage: `url('/assests/images/to-do.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="position-absolute top-50 start-50 translate-middle text-center bg-dark bg-opacity-50 p-4 rounded" style={{ width: '90%' }}>
                  <h5 className="card-title">To-Do Manager</h5>
                  <p className="card-text">
                    To-Do Manager is a task management application that helps users organize and prioritize their tasks effectively. With features like due dates, reminders, and progress tracking, it boosts productivity and keeps users on top of their to-do lists.
                  </p>
                  <a href="#" className="btn btn-outline-light mt-3" data-aos="zoom-in" data-aos-delay="400">
                    <i className="fa-brands fa-github fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>
            


            <div className="col">
              <div className="card text-white position-relative" data-aos="zoom-in-up" style={{ height: '325px', backgroundImage: `url('/assests/images/Face Attendance.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="position-absolute top-50 start-50 translate-middle text-center bg-dark bg-opacity-50 p-4 rounded" style={{ width: '90%' }}>
                  <h5 className="card-title">Face Attendance System</h5>
                  <p className="card-text">
                    Face Attendance System is an innovative application that uses facial recognition technology to automate attendance tracking. It enhances accuracy and efficiency in attendance management.
                  </p>
                  <a href="#" className="btn btn-outline-light mt-3" data-aos="zoom-in" data-aos-delay="400">
                    <i className="fa-brands fa-github fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>
            


            <div className="col">
              <div className="card text-white position-relative" data-aos="zoom-in-up" style={{ height: '325px', backgroundImage: `url('/assests/images/quickbasket.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
