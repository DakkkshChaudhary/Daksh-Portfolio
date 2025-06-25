import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import ReactTooltip from 'react-tooltip';
import { Tooltip } from "react-tooltip";

import SkillCircle from './SkillCircle';

const categories = {
  Frontend: [
    { skill: 'HTML', percentage: 95, color: '#e44d26' },
    { skill: 'CSS', percentage: 90, color: '#264de4' },
    { skill: 'JavaScript', percentage: 85, color: '#f0db4f' },
    { skill: 'TypeScript', percentage: 75, color: '#007acc' },
    { skill: 'Next.js', percentage: 80, color: '#000000' },
    // { skill: 'Vue.js', percentage: 70, color: '#42b883' },
    { skill: 'jQuery', percentage: 70, color: '#42b883' },
    { skill: 'React.js', percentage: 80, color: '#61dafb' },
    { skill: 'Tailwind CSS', percentage: 80, color: '#06b6d4' },
    { skill: 'Bootstrap', percentage: 85, color: '#563d7c' },
    { skill: 'GSAP', percentage: 75, color: '#cc6699' },
    // { skill: 'Framer Motion', percentage: 70, color: '#007acc' },
    { skill: 'JSON', percentage: 70, color: '#0170fe' },
    // { skill: '', percentage: 70, color: '#319795' },
  ],
  Backend: [
    { skill: 'Node.js', percentage: 70, color: '#8cc84b' },
    { skill: 'Express.js', percentage: 65, color: '#00758f' },
    // { skill: 'Node.js', percentage: 75, color: '#007acc' },
    { skill: 'MongoDB', percentage: 60, color: '#47a248' },
    { skill: 'MySQL', percentage: 70, color: '#00758f' },
    { skill: 'NestJS', percentage: 65, color: '#336791' },
    { skill: 'Socket.IO', percentage: 70, color: '#e10098' },
    { skill: 'WebSockets', percentage: 65, color: '#ffca28' },
  ],
  Tools: [
    { skill: 'Git', percentage: 80, color: '#f1502f' },
    { skill: 'GitHub', percentage: 80, color: '#181717' },
    { skill: 'Figma', percentage: 70, color: '#f24e1e' },
    { skill: 'VS Code', percentage: 85, color: '#007acc' },
    { skill: 'NPM', percentage: 80, color: '#ff6c37' },
    { skill: 'GitHub Pages', percentage: 75, color: '#2496ed' },
    { skill: 'Netlify', percentage: 70, color: '#326ce5' },
    { skill: 'Vercel', percentage: 70, color: '#c21325' },
    // { skill: '', percentage: 70, color: '#c21325' },
  ]
};

const SkillTabs = () => {
  const [activeTab, setActiveTab] = useState('Frontend');

  return (
    <div>
      <div className="d-flex justify-content-center mb-4 gap-3">
        {Object.keys(categories).map((tab) => (
          <button
            key={tab}
            className={`btn ${activeTab === tab ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Skill Circles */}
      <div className="row justify-content-center">
        {categories[activeTab].map((item, index) => (
          <motion.div
            key={index}
            className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div data-tip={`${item.skill}: Used in major projects`} data-for={`tip-${item.skill}`}>
              <SkillCircle {...item} />
              <Tooltip id={`tip-${item.skill}`} place="top" effect="solid" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillTabs;
