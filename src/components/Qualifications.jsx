// components/Qualification.js
import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { motion } from "framer-motion";

export default function Qualification() {
  React.useEffect(() => {
    // AOS.init({ duration: 1000 });
    AOS.init({
        duration: 1000,     
        once: false,        
        mirror: true         
      });
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const timelineData = [
    {
      title: "Master of Computer Applications",
      subtitle: "G L Bajaj Institute, Greater Noida",
      year: "2022 - 2024",
      icon: "🎓",
    },
    {
      title: "Bachelor of Science (PCM)",
      subtitle: "Rohilkhand University",
      year: "2019 - 2022",
      icon: "📘",
    },
    {
      title: "Intermediate",
      subtitle: "CBSE Board",
      year: "2018 - 2019",
      icon: "🏫",
    },
    {
      title: "High School",
      subtitle: "CBSE Board",
      year: "2016 - 2017",
      icon: "📖",
    },
  ];

  return (
    // <section id="qualification" className="py-5 bg-light">
    // <section id="qualification" className="bg-light py-5  text-center  d-flex align-items-center justify-content-center">
    <section id="qualification" className="bg-light py-5  text-center   align-items-center justify-content-center">

      <div className="container">
        <h2 className="text-center mb-5 text-center display-4 fw-bold mb-4" data-aos="fade-right">⏱ Qualifications</h2>
        <div className="position-relative border-start border-3 border-primary ms-4">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className="position-relative mb-5"
              data-aos="fade-up"
              // data-aos-delay={index * 100}
              // data-aos-duration="600"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div
                className="position-absolute top-0 start-0 translate-middle bg-primary text-white rounded-circle"
                style={{
                  width: "40px",
                  height: "40px",
                  textAlign: "center",
                  lineHeight: "40px",
                  fontSize: "20px",
                }}
              >
                {item.icon}
              </div>
              {/* <div className="ms-5">
                <h5>{item.title}</h5>
                <p className="mb-1 text-muted">{item.subtitle}</p>
                <small className="text-secondary">{item.year}</small>
              </div> */}


              <div className="ms-5 bg-white p-3 rounded timeline-card shadow-sm">
      <h5>{item.title}</h5>
      <p className="mb-1 text-muted">{item.subtitle}</p>
      <small className="text-secondary">{item.year}</small>
    </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
