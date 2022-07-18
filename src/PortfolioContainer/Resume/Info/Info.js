import React from "react";
import "./Info.css";
import Education from "./Education/Education";
import WorkHistory from "./WorkHistory/WorkHistory";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Interests from "./Interests/Interests";

const Info = () => {
  return (
    <article class="scroller">
      <div className="resume-card-option-info" id="info">
        <section className="resume-card-option-info-education" id="education">
          <Education />
        </section>
        <section className="resume-card-option-info-workHistory" id="workHistory">
          <WorkHistory />
        </section>
        <section className="resume-card-option-info-programmingSkills" id="programmingSkills">
          <Skills />
        </section>
        <section className="resume-card-option-info-projects" id="projects">
          <Projects />
        </section>
        <section className="resume-card-option-info-interests" id="interests">
          <Interests />
        </section>

        {/*  
      <WorkHistory />
      <Skills />
  <Interests />*/}
      </div>
    </article>
  );
};

export default Info;
