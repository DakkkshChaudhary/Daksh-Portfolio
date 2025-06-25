
// src/components/FallingIcons.jsx
import React, { useEffect } from 'react';
// import './FallingIcons.css';

const ICONS = ["💻", "⚙️", "🌐", "🎯", "🧠", "🔥", "🖥️", "🚀"];

const FallingIcons = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const icon = document.createElement('div');
      icon.classList.add('falling-icon');
      icon.textContent = ICONS[Math.floor(Math.random() * ICONS.length)];
      icon.style.left = `${Math.random() * 100}vw`;
      icon.style.fontSize = `${Math.random() * 20 + 20}px`;

      document.body.appendChild(icon);

      setTimeout(() => {
        icon.remove();
      }, 5000);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return null; // Nothing visible, icons are added dynamically
};

export default FallingIcons;
