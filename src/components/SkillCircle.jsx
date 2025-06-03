// import React from "react";
// import {
//   CircularProgressbar,
//   buildStyles
// } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";

// const SkillCircle = ({ skill, percentage, color }) => {
//   return (
//     <>
//     {/* <div style={{ width: 120, margin: "1rem", textAlign: "center" }}> */}
//     <div className="skill-circle" style={{ width: 120, margin: "1rem", textAlign: "center" }}>

//       <CircularProgressbar
//         value={percentage}
//         text={`${percentage}%`}
//         styles={buildStyles({
//           textColor: "#333",
//           pathColor: color || "#00bcd4",
//           trailColor: "#eee",
//           textSize: "18px",
//         })}
//       />
//       <div style={{ marginTop: "0.5rem", fontWeight: "500" }}>{skill}</div>
//     </div>
//     </>

//   );
// };

// export default SkillCircle;





// import React from "react";
// import {
//   CircularProgressbar,
//   buildStyles
// } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";

// const SkillCircle = ({ skill, percentage, color }) => {
//   return (
//     <>
//     {/* <div style={{ width: 120, margin: "1rem", textAlign: "center" }}> */}
//     <div className="skill-circle" style={{ width: 120, margin: "1rem", textAlign: "center" }}>

//       <CircularProgressbar
//         value={percentage}
//         text={`${percentage}%`}
//         styles={buildStyles({
//           textColor: "#333",
//           pathColor: color || "#00bcd4",
//           trailColor: "#eee",
//           textSize: "18px",
//         })}
//       />
//       <div style={{ marginTop: "0.5rem", fontWeight: "500" }}>{skill}</div>
//     </div>
//     </>

//   );
// };

// export default SkillCircle;


import React from "react";
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
import { Tooltip } from "react-tooltip";

const SkillCircle = ({ skill, percentage, color }) => {
  const boxShadowStyle = percentage >= 30 ? `0 0 10px ${color}` : "none";

  return (
    <div
      data-tip={`${skill}: ${percentage}%`}
      data-for={skill}
      className="skill-circle"
      style={{
        width: 120,
        margin: "1rem",
        textAlign: "center",
        boxShadow: boxShadowStyle,
        borderRadius: "10px",
        padding: "10px",
        background: "#fff",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: "#333",
          pathColor: color || "#00bcd4",
          trailColor:
            percentage > 80
              ? "#c8e6c9"
              : percentage > 60
                ? "#fff9c4"
                : "#ffcdd2",
          textSize: "18px",
          pathTransitionDuration: 0.5,
           pathTransition: 'stroke-dashoffset 1s ease 0s',
        })}
      />
      <div style={{ marginTop: "0.5rem", fontWeight: "500" }}>{skill}</div>
      <Tooltip id={skill} place="top" effect="solid"/>
    </div>
  );
};

export default SkillCircle;
