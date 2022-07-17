import React from "react";
import "./Resume.css";

import TitleHeader from "../Header/TitleHeader";
import Options from "./Options/Options";
import Info from "./Info/Info";

const Resume = () => {
  return (
    <div>
      <TitleHeader title="Resume" subTitle="My Foraml Bio Details" />

      <div className="resume-container">
        <div className="resume-card">
          <Options />
          <Info />
        </div>
      </div>
    </div>
  );
};

export default Resume;
