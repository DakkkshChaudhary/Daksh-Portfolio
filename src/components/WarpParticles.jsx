import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const WarpParticles = () => {
  const init = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={init}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "#000000" },
        particles: {
          number: { value: 70 },
          color: { value: "#00fffc" },
          shape: { type: "circle" },
          opacity: { value: 0.2 },
          size: { value: { min: 1, max: 4 } },
          move: {
            enable: true,
            speed: 2,
            direction: "bottom",
            outMode: "out"
          }
        },
      }}
    />
  );
};

export default WarpParticles;
