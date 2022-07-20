import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div className="education-container">
      <OneEducation
        name="SCE - Shamoon College of Engineering"
        level="Bachelor of Science - Software Engineering"
        year="2018-2022"
        specializing="Data Science"
      />
      <OneEducation
        name="Air Force College of Technology"
        level="Hige School"
        year="2009-2013"
        specializing="Electrical"
      />
      
    </div>
  );
};

const OneEducation = (props) => {
  return (
    <div className="education-place">
      <div className="education-name">
        <div className="education-name-dot">
          <li>{props.name}</li>
        </div>
        <div className="education-name-level">
          <h2>{props.level}</h2>
          <h2>Specializing in {props.specializing}</h2>
        </div>
      </div>
      <div className="education-year">
        <h1>{props.year}</h1>
      </div>
    </div>
  );
};

export default Education;
