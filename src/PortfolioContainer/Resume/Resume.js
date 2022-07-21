import React from "react";
import "./Resume.css";

import TitleHeader from "../Header/TitleHeader";
import Options from "./Options/Options";
import Info from "./Info/Info";

const Resume = () => {
  return (
    <div className="resume-container">
      {<TitleHeader title="Resume" subTitle="My Foraml Bio Details" />}
      <div className="resume-card">
        <Options />
        <Info />
      </div>
    </div>
  );
};

export default Resume;
