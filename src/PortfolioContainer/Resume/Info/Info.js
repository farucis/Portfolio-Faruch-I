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
        <section className="resum-info-education" id="education">
          <Education />
        </section>
        <section className="resum-info-workHistory" id="workHistory">
          <WorkHistory />
        </section>
        <section className="resum-info-skills" id="programmingSkills">
          <Skills />
        </section>
        <section className="resum-info-projects" id="reprojects">
          <Projects />
        </section>
        <section className="resum-info-interests" id="interests">
          <Interests />
        </section>
      </div>
    </div>
  );
};

export default Info;
