import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <Project
        name="Personal Portfolio Website"
        technologies="React JS, Bootsrap"
        info="A Personal Portfolio website to showcase all my details and projects at one place"
        year="2022"
      />
      <Project
        name="mobile Shapeit"
        technologies="React Native, Firebase, Node Js, Redux, RESTAPI , Python"
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
          <li>{props.name}</li>
        </div>
        <div className="projects-name-technologies">
          <h2>Technologies Used: {props.technologies}</h2>
          <h2>{props.info}</h2>
        </div>
      </div>
      <div className="projects-year">
        <h1>{props.year}</h1>
      </div>
    </div>
  );
};

export default Projects;
