import React from "react";
import "./Info.css";

import Education from "./Education/Education";
import WorkHistory from "./WorkHistory/WorkHistory";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Interests from "./Interests/Interests";

const Info = () => {
  return (
    <div className="col-8">
      <div
        data-bs-spy="scroll"
        data-bs-target="#list-example"
        data-bs-smooth-scroll="true"
        className="scrollspy"
        tabIndex="0"
      >
        <section style={{ height: "100%" }} id="education">
          <Education />
        </section>
        <section style={{ height: "100%" }} id="workHistory">
          <WorkHistory />
        </section>
        <section style={{ height: "100%" }} id="programmingSkills">
          <Skills />
        </section>
        <section style={{ height: "100%" }} id="reprojects">
          <Projects />
        </section>
        <section style={{ height: "100%" }} id="interests">
          <Interests />
        </section>
      </div>
    </div>
  );
};

export default Info;
