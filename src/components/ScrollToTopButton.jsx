
// import React, { useState, useEffect } from 'react';

// const ScrollToTopButton = () => {
//   const [visible, setVisible] = useState(false);

//   // Show button when scroll Y is greater than 300px
//   useEffect(() => {
//     const toggleVisibility = () => {
//       setVisible(window.scrollY > 300);
//     };

//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   };

//   return (
//     <button
//       className={`btn btn-primary rounded-circle position-fixed`}
//       onClick={scrollToTop}
//       style={{
//         bottom: "30px",
//         right: "30px",
//         display: visible ? "inline-block" : "none",
//         zIndex: 999
//       }}
//       aria-label="Scroll to top"
//     >
//       <i className="fas fa-arrow-up"></i>
//     </button>
//   );
// };

// export default ScrollToTopButton;


// components/ScrollToTopButton.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="btn btn-primary rounded-circle position-fixed"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          style={{
            bottom: "30px",
            right: "30px",
            zIndex: 999
          }}
          aria-label="Scroll to top"
        >
          <i className="fas fa-arrow-up"></i>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
