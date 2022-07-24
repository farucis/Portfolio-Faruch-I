import React from "react";
import "./Projects.css";

import TitleHeader from "../Header/TitleHeader";
const projects = [
  {
    name: "Personal portfolio",
    summary: "my persnoal web site",
    tehcnolgies: "React, BootStrap",
    url: "https://portfolio-faruch.herokuapp.com/",
    video_url: "https://youtu.be/Personal",
  },
  {
    name: "shepit",
    summary: "calorie calculator",
    tehcnolgies: "React-native, reacr-redux, firebase",
    url: "none",
    video_url: "https://youtu.be/shepit",
  },
  {
    name: "scrummaster",
    summary: "manged project in scrum whit aigle",
    tehcnolgies: "React-native, reacr-redux, firebase",
    url: "none",
    video_url: "https://youtu.be/scrummaster",
  },
  {
    name: "smartbook",
    summary: "book reding web site",
    tehcnolgies: "asp.net, c#, sql server",
    url: "none",
    video_url: "https://youtu.be/smartbook",
  },
];

const Project = () => {
  return (
    <div className="demo-projects-container">
      <TitleHeader title="Projects" subTitle="Lets See Projects Demo" />
      <div className="demo-projects-parent">
        {projects.map((project,index) => (
          <section key={index}>
            <ProjectSection project={project} />
          </section>
        ))}
      </div>
    </div>
  );
};

const ProjectSection = ({ project }) => {
  return (
    <div className="">
      {project.name}
      {project.summary}
      {project.tehcnolgies}
      {project.url}
    </div>
  );
};

export default Project;
