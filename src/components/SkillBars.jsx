// components/SkillBars.js
import React from "react";
import SkillBars from "react-skillbars";

const skills = [
  { type: "HTML", level: 90 },
  { type: "CSS", level: 85 },
  { type: "JavaScript", level: 80 },
  { type: "React", level: 75 },
  { type: "MySQL", level: 70 },
];

const colors = {
  bar: "#00bcd4",        // fill color
  title: {
    text: "#fff",        // text color
    background: "#333",  // background of label
  },
};

const SkillBarSection = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center" }}>My Skills</h2>
      <SkillBars skills={skills} colors={colors} animationDelay={500} />
    </div>
  );
};

export default SkillBarSection;
