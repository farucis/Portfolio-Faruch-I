import React from "react";
import "./Projects.css";

import TitleHeader from "../Header/TitleHeader";

const Project = () => {

  return (
    <div className="demo-projects-container">
      <TitleHeader title="Projects" subTitle="Lets See Projects Demo" />
      <div className="demo-projects-parent"></div>
    </div>
  );
};

export default Project;
