import React from "react";
import "./Info.css";
import Education from "./Education/Education";
import WorkHistory from "./WorkHistory/WorkHistory";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Interests from "./Interests/Interests";

const Info = () => {
  return (
    <div className="resum-info">
      <div className="scroller">
        <div className="resum-info-education" id="education">
          <Education />
        </div>
        <div className="resum-info-workHistory" id="workHistory">
          <WorkHistory />
        </div>
        <div className="resum-info-skills" id="programmingSkills">
          <Skills />
        </div>
        <div className="resum-info-projects" id="reprojects">
          <Projects />
        </div>
        <div className="resum-info-interests" id="interests">
          <Interests />
        </div>
      </div>
    </div>
  );
};

export default Info;
