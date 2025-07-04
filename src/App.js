import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
// import Hero from "./components/Hero";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import Experience from "./components/Experience";
import Qualifications from "./components/Qualifications";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ScrollProgress from "./components/ScrollProgress";
// import WarpParticles from "./components/WarpParticles";
// import FallingIcons from "./components/FallingIcons";

function App() {
  useEffect(() => {
    // AOS.init({ duration: 1000, once: true });
     AOS.init({
    duration: 1000,    
    once: false,        
    mirror: true         
  });
  }, []);

  return (
    <>
    {/* <WarpParticles /> */}
      <MyNavbar />
      {/* <FallingIcons /> */}
      < ScrollProgress/>
      <Home/>
      <About />
      <Projects />
      <Skills />

      
      <Experience />
      <Qualifications />
      {/* <Certifications /> */}
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
