import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-place">
        <div className="projects-name">
          <div className="projects-name-dot">
            🔴
            <h1>Personal Portfolio Website</h1>
          </div>
          <h2>Technologies Used: React JS, Bootsrap</h2>
          <h2>
            A Personal Portfolio website to showcase all my details and projects
            at one place.
          </h2>
        </div>
        <div className="projects-year">
          <h1>2022</h1>
        </div>
      </div>
      <div className="projects-place">
        <div className="projects-name">
          <div className="projects-name-dot">
            🔴
            <h1>mobile Shapeit</h1>
          </div>
          <h2>Technologies Used: React Native, Firebase, Node Js, Redux, RESTAPI</h2>
          <h2>A calculated nutrition app designed to help track daily nutrition
             with AI integration for food prediction from photography</h2>
        </div>
        <div className="projects-year">
          <h1>2021</h1>
        </div>
      </div>
    </div>
  );
};

export default Projects;
