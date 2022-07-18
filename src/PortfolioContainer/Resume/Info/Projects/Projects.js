import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <Project
        name="mobile Shapeit"
        technologies="React Native, Firebase, Node Js, Redux, RESTAPI, Python"
        info="A calculated nutrition app designed to help track daily nutrition
            with AI integration for food prediction from photography"
        year="2022"
      />
      <Project
        name="mobile Shapeit"
        technologies="React Native, Firebase, Node Js, Redux, RESTAPI, Python"
        info="A calculated nutrition app designed to help track daily nutrition
            with AI integration for food prediction from photography"
        year="2022"
      />
    </div>
  );
};

const Project = (props) => {
  return (
    <div className="projects-place">
      <div className="projects-name">
        <div className="projects-name-dot">
          🔴
          <h1>{props.name}</h1>
        </div>
        <h2>Technologies Used: {props.technologies}</h2>
        <h2>{props.info}</h2>
      </div>
      <div className="projects-year">
        <h1>{props.year}</h1>
      </div>
    </div>
  );
};

export default Projects;
