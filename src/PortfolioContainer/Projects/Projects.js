import React from "react";
import "./Projects.css";
import ScrollIntoView from "react-scroll-into-view";

import { FaUserGraduate } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { FaPalette } from "react-icons/fa";

import TitleHeader from "../Header/TitleHeader";
import Education from "../Resume/Info/Education/Education";
import WorkHistory from "../Resume/Info/WorkHistory/WorkHistory";
import Skills from "../Resume/Info/Skills/Skills";
import Projects from "../Resume/Info/Projects/Projects";
import Interests from "../Resume/Info/Interests/Interests";
import { links } from "../Resume/Links";

const Project = () => {
  const findIcon = (e) => {
    if (e === "FaUserGraduate") return <FaUserGraduate />;
    if (e === "FaHistory") return <FaHistory />;
    if (e === "FaLaptopCode") return <FaLaptopCode />;
    if (e === "GoGraph") return <GoGraph />;
    if (e === "FaPalette") return <FaPalette />;
  };

  const [selected, setSelected] = React.useState("Education");

  React.useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <div className="project-container">
      {/* <TitleHeader title="Projects" subTitle="Lets See Projects Demo" /> */}
      <div className="resum-card">
        <div className="resum-options">
          {links.map((link, index) => (
            <ScrollIntoView
              selector={link.url}
              smooth={true}
              scrollOptions={{ block: "nearest" }}
              className="resum-options-container"
            >
              <div className="resum-optios-icons-colz">
                <div className="resum-optios-icons">
                  <div onClick={() => setSelected(link.text)}>
                    {findIcon(link.icon)}
                  </div>
                </div>
              </div>
              <div className="resum-optios-names-colz">
                <div className="resum-optios-names">
                  <div onClick={() => setSelected(link.text)}>
                    <h1>{link.text}</h1>
                  </div>
                </div>
              </div>
            </ScrollIntoView>
          ))}
        </div>
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
      </div>
    </div>
  );
};

export default Project;
