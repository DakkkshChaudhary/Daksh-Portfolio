import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollWidth(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      height: '4px',
      width: `${scrollWidth}%`,
      backgroundColor: '#0d6efd',
      zIndex: 9999,
      transition: 'width 0.25s ease-out',
    //   boxShadow: '0 0 4px rgb(254, 249, 249)',
      background: 'linear-gradient(to right,rgb(71, 141, 247), #6610f2)',
    }} />
  );
};

export default ScrollProgress;
