// import React from 'react'
// import SkillCircle from './SkillCircle'

// export default function Skills() {
//   return (
//     <>
    
//     <section id="skills" className="py-5 bg-light">
//                 <div className="container" data-aos="fade-up">
//                     <h2>Skills</h2>
//                 </div>
//             </section>

//             <div class="container overflow-hidden text-center">
//                 <div class="row gy-5">
//                     <div class="col-6 bg-primary-subtle shadow p-3 mb-5 bg-body-tertiary rounded">
//                         <div class="p-3">C</div>
//                     </div>
//                     <div class="col-6 bg-light shadow p-3 mb-5 bg-body-tertiary rounded opacity-100 border border-success p-2 mb-2 border-opacity-25">
//                         <div class="p-3">Java</div>
//                     </div>
//                     <div class="col-6 bg-light shadow p-3 mb-5 bg-body-tertiary rounded">
//                         <div class="p-3">SQL</div>
//                     </div>
//                     <div class="col-6 bg-light shadow p-3 mb-5 bg-body-tertiary rounded">
//                         <div class="p-3">HTML5</div>
//                     </div>
//                     <div class="col-6 bg-light shadow p-3 mb-5 bg-body-tertiary rounded">
//                         <div class="p-3">CSS</div>
//                     </div>
//                     <div class="col-6 bg-light shadow p-3 mb-5 bg-body-tertiary rounded">
//                         <div class="p-3">JavaScript</div>
//                     </div>
//                     <div class="col-6 bg-light shadow p-3 mb-5 bg-body-tertiary rounded">
//                         <div class="p-3">React.js</div>
//                     </div>
//                     <div class="col-6 bg-light shadow p-3 mb-5 bg-body-tertiary rounded">
//                         <div class="p-3">BootStrap</div>
//                     </div>
//                     <div class="col-6 bg-light shadow p-3 mb-5 bg-body-tertiary rounded">
//                         <div class="p-3">Redux.js</div>
//                     </div>
//                     <div class="col-6 bg-light">
//                         <div class="p-3">Express.js</div>
//                     </div>
//                     <div class="col-6 bg-light shadow p-3 mb-5 bg-body-tertiary rounded">
//                         <div class="p-3">MongoDB</div>
//                     </div>
//                 </div>
//             </div>
//     </>
//   )
// }







// pages/Skills.js
import React from "react";
import SkillCircle from "../components/SkillCircle";

const Skills = () => {
  const skills = [
    { name: "HTML", level: 95, color: "#e44d26" },
    { name: "CSS", level: 90, color: "#264de4" },
    { name: "JavaScript", level: 80, color: "#f0db4f" },
    { name: "React.js", level: 75, color: "#61dafb" },
    { name: "MySQL", level: 70, color: "#00758f" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map((skill, i) => (
        <SkillCircle
          key={i}
          skill={skill.name}
          percentage={skill.level}
          color={skill.color}
        />
      ))}
    </div>
  );
};

export default Skills;
