import React from "react";
import "./Skills.css";

const skills2 = [
  {
    name: "React Native",
    fill: 93,
  },

  {
    name: "Firebase",
    fill: 92,
  },
  {
    name: "Python",
    fill: 87,
  },
  {
    name: "SQL",
    fill: 80,
  },
  {
    name: "Java",
    fill: 83,
  },
];
const skills1 = [
  {
    name: "JavaScript",
    fill: 90,
  },
  {
    name: "React JS",
    fill: 84,
  },
  {
    name: "CSS",
    fill: 89,
  },

  {
    name: "HTML",
    fill: 82,
  },
  {
    name: "C/C++",
    fill: 94,
  },
];
const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-container-s">
        {skills1.map((skill, index) => (
          <Skill name={skill.name} fill={skill.fill} index={index} />
        ))}
      </div>

      <div className="skills-container-s">
        {skills2.map((skill, index) => (
          <Skill name={skill.name} fill={skill.fill} index={index} />
        ))}
      </div>
    </div>
  );
};

const Skill = (props) => {
  const setFill = (skill) => {
    document.documentElement.style.setProperty("--fill-skill", `${skill}%`);
  };
  return (
    <div className="skill-container" key={props.index}>
      <h1>{props.name}</h1>
      {setFill(props.fill)}
      <div className="skill-bar">
        <div style={{ width: `${props.fill}%` }} className="skill-bar-fill" />
      </div>
    </div>
  );
};

export default Skills;
