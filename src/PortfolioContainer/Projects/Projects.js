import React from "react";
import "./Projects.css";

import TitleHeader from "../Header/TitleHeader";
const projects = [
  {
    name: "Portfolio",
    summary: "My Persnoal Web Site",
    tehcnologies: "React, BootStrap",
    url: "https://portfolio-faruch.herokuapp.com/",
    video_url: null,
  },
  {
    name: "Shapeit",
    summary: "Daily Calorie Tracking",
    tehcnologies: "React-native, react-redux, firebase, Rest API",
    url: "https://expo.dev/@faruch/Shapeit",
    video_url:
      "https://user-images.githubusercontent.com/58651410/169829260-d985197e-d167-48ce-9105-f3f6cd35f738.mp4",
  },
  {
    name: "Scrum Master",
    summary: "Agile Project Management",
    tehcnologies: "React-native, react-redux, firebase",
    url: null,
    video_url: null,
  },
  {
    name: "Smart Book",
    summary: "Book Reding Web Site",
    tehcnologies: "asp.net, c#, sql server",
    url: null,
    video_url: null,
  },
  {
    name: "nnnnn",
    summary: "ssssss",
    tehcnologies: "tttttt",
    url: null,
    video_url: null,
  },
  {
    name: "nnnnn",
    summary: "ssssss",
    tehcnologies: "tttttt",
    url: null,
    video_url: null,
  },
];

const Project = () => {
  return (
    <div className="demo-projects-container">
      <TitleHeader title="Projects" subTitle="Lets See Projects Demo" />
      <div className="demo-projects-parent">
        <div className="p-scroll">
          {projects.map((project, index) => (
            <section key={index}>
              <ProjectSection project={project} />
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectSection = ({ project }) => {
  const ShowVideo = () => {
    if (project.video_url) {
      return (
        <video className="video-show" width="90%" height="50%" controls>
          <source src={project.video_url} type="video/mp4" />
        </video>
      );
    }
  };
  const [showVideo, setShowVideo] = React.useState(false);

  React.useEffect(() => {});

  return (
    <div className="project-section-container" id={project.name}>
      {/*   ///Project Header///   */}
      <div className="project-section-header">
        <div className="project-section-title">
          <h1>{project.name}</h1>
        </div>
        <div className="project-section-summary">
          <h2>{project.summary}</h2>
        </div>
      </div>

      {/*   ///Project Video///   */}
      {showVideo ? <ShowVideo /> : <div className="project-section-image" />}

      {/*   ///Project Tehcnologies///   */}
      <div className="project-section-options">
        <div className="project-section-tehcnologies">
          <h2>
            Tehcnologies Used:<span> {project.tehcnologies} </span>
          </h2>
        </div>

        {/*   ///Project buttons///   */}
        <div className="project-section-buttons">
          {project.video_url ? (
            <button
              className="btn primary-btn"
              onClick={() => setShowVideo(!showVideo)}
            >
              <span>App Video</span>
            </button>
          ) : null}

          {project.url ? (
            <a href={project.url}>
              <span className="btn highlighted-btn">App Demo</span>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Project;
