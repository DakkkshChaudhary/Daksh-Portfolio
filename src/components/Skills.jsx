import React from 'react'
import SkillCircle from './SkillCircle'

export default function Skills() {
    return (
        <>
        {/* data-aos-duration="1200" data-aos-delay="200" */}
            <section id="skills" className="bg-body-secondary py-5" >
                <div className="container " data-aos="fade-up" >
                    <h2 className="text-center display-4 fw-bold mb-4 ">Skills 🖥</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="d-flex flex-wrap justify-content-center gap-4">
                                <div data-aos="fade-right" className="d-flex flex-wrap justify-content-center ">
                                    <SkillCircle skill="HTML" percentage={95} color="#e44d26" />
                                    <SkillCircle skill="CSS" percentage={90} color="#264de4" />
                                    <SkillCircle skill="JavaScript" percentage={80} color="#f0db4f" />
                                    <SkillCircle skill="TypeScript" percentage={60} color="#3178c6" />
                                    <SkillCircle skill="React.js" percentage={75} color="#61dafb" />
                                </div>
                                <div data-aos="fade-right" className="d-flex flex-wrap justify-content-center ">
                                    <SkillCircle skill="Redux.js" percentage={70} color="#764abc" />
                                    <SkillCircle skill="Bootstrap" percentage={70} color="#00758f" />
                                    <SkillCircle skill="Express.js" percentage={70} color="#00758f" />
                                    <SkillCircle skill="Node.js" percentage={65} color="#8cc84b" />
                                    <SkillCircle skill="MongoDB" percentage={60} color="#47a248" />
                                </div>
                                <div data-aos="fade-right" className="d-flex flex-wrap justify-content-center ">
                                    <SkillCircle skill="Bootstrap" percentage={85} color="#563d7c" />
                                    <SkillCircle skill="Tailwind CSS" percentage={80} color="#06b6d4" />
                                    <SkillCircle skill="Core-Java" percentage={70} color="#f89820" />
                                    <SkillCircle skill="C" percentage={70} color="#f89820" />
                                    <SkillCircle skill="SQL" percentage={70} color="#f89820" />
                                </div>
                                <div data-aos="fade-right" className="d-flex flex-wrap justify-content-center ">
                                    <SkillCircle skill="Git" percentage={75} color="#f1502f" />
                                    <SkillCircle skill="GitHub" percentage={80} color="#181717" />
                                    <SkillCircle skill="Figma" percentage={70} color="#f24e1e" />
                                    <SkillCircle skill="Web Development" percentage={85} color="#007acc" />
                                    <SkillCircle skill="Responsive Design" percentage={90} color="#007acc" />
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}



            {/* <section id="skills" className="py-5 bg-light">
                <div className="container" data-aos="fade-up">
                    <h2>Skills</h2>
                </div>
            </section>

            <div class="container overflow-hidden text-center">
                <div class="row gy-5">
                    <div class="col-6 bg-primary-subtle shadow p-3 mb-5 bg-body-tertiary rounded">
                        <div class="p-3">C</div>
                    </div>
                    <div class="col-6 bg-light shadow p-3 mb-5 bg-body-tertiary rounded opacity-100 border border-success p-2 mb-2 border-opacity-25">
                        <div class="p-3">Java</div>
                    </div>
                    <div class="col-6 bg-light shadow p-3 mb-5 bg-body-tertiary rounded">
                        <div class="p-3">SQL</div>
                    </div>
                    <div class="col-6 bg-light shadow p-3 mb-5 bg-body-tertiary rounded">
                        <div class="p-3">HTML5</div>
                    </div>
                    <div class="col-6 bg-light shadow p-3 mb-5 bg-body-tertiary rounded">
                        <div class="p-3">CSS</div>
                    </div>
                    <div class="col-6 bg-light shadow p-3 mb-5 bg-body-tertiary rounded">
                        <div class="p-3">JavaScript</div>
                    </div>
                    <div class="col-6 bg-light shadow p-3 mb-5 bg-body-tertiary rounded">
                        <div class="p-3">React.js</div>
                    </div>
                    <div class="col-6 bg-light shadow p-3 mb-5 bg-body-tertiary rounded">
                        <div class="p-3">BootStrap</div>
                    </div>
                    <div class="col-6 bg-light shadow p-3 mb-5 bg-body-tertiary rounded">
                        <div class="p-3">Redux.js</div>
                    </div>
                    <div class="col-6 bg-light">
                        <div class="p-3">Express.js</div>
                    </div>
                    <div class="col-6 bg-light shadow p-3 mb-5 bg-body-tertiary rounded">
                        <div class="p-3">MongoDB</div>
                    </div>
                </div>
            </div> */}








// pages/Skills.js\



// import React from "react";
// import SkillCircle from "../components/SkillCircle";

// const Skills = () => {
//   const skills = [
//     { name: "HTML", level: 95, color: "#e44d26" },
//     { name: "CSS", level: 90, color: "#264de4" },
//     { name: "JavaScript", level: 80, color: "#f0db4f" },
//     { name: "React.js", level: 75, color: "#61dafb" },
//     { name: "MySQL", level: 70, color: "#00758f" },
//   ];

//   return (
//     <div className="flex flex-wrap justify-center gap-4">
//       {skills.map((skill, i) => (
//         <SkillCircle
//           key={i}
//           skill={skill.name}
//           percentage={skill.level}
//           color={skill.color}
//         />
//       ))}
//     </div>
//   );
// };

// export default Skills;
