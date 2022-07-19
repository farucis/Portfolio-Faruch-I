import React from "react";
import "./Info.css";
import Education from "./Education/Education";
import WorkHistory from "./WorkHistory/WorkHistory";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Interests from "./Interests/Interests";

const Info = () => {
  return (
    <article className="scroller">
      <div className="resume-card-option-info" id="info">
        <section className="resume-card-option-info-education" id="education" key={'1'}>
          <Education />
        </section>
        <section className="resume-card-option-info-workHistory" id="workHistory" key={'2'}>
          <WorkHistory />
        </section>
        <section className="resume-card-option-info-programmingSkills" id="programmingSkills" key={'3'}>
          <Skills />
        </section>
        <section className="resume-card-option-info-projects" id="projects" key={'4'}>
          <Projects />
        </section>
        <section className="resume-card-option-info-interests" id="interests" key={'5'}>
          <Interests />
        </section>
      </div>
    </article>
  );
};

export default Info;
