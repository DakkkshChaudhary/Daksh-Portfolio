// components/SkillCircle.js
import React from "react";
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SkillCircle = ({ skill, percentage, color }) => {
  return (
    <div style={{ width: 120, margin: "1rem", textAlign: "center" }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: "#333",
          pathColor: color || "#00bcd4",
          trailColor: "#eee",
          textSize: "16px",
        })}
      />
      <div style={{ marginTop: "0.5rem", fontWeight: "500" }}>{skill}</div>
    </div>
  );
};

export default SkillCircle;
