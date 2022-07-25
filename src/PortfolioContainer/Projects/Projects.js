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
    source_url: "https://github.com/farucis/Portfolio-Faruch-I",
  },
  {
    name: "Shapeit",
    summary: "Daily Calorie Tracking",
    tehcnologies: "React-native, react-redux, firebase, Rest API",
    url: "https://expo.dev/@faruch/Shapeit",
    video_url:
      "https://user-images.githubusercontent.com/58651410/169829260-d985197e-d167-48ce-9105-f3f6cd35f738.mp4",
    source_url: "https://github.com/farucis/Shapeit-Final",
  },
  {
    name: "Scrum Master",
    summary: "Agile Project Management",
    tehcnologies: "React-native, react-redux, firebase",
    url: null,
    video_url: null,
    source_url: "https://github.com/farucis/ScruMaster",
  },
  {
    name: "Accessibility",
    summary: "App for mute and deaf people",
    tehcnologies: "React Native, google-cloud-api",
    url: null,
    video_url: null,
    source_url: "https://github.com/farucis/Accessibility",
  },
  {
    name: "Smart Book",
    summary: "Book Reding Web Site",
    tehcnologies: "asp.net, c#, sql server",
    url: null,
    video_url: null,
    source_url: "https://github.com/farucis/SmartBook-1",
  },
  {
    name: "Recommendation System ",
    summary: "CF/CBF and Hybrid Recommendation System ",
    tehcnologies: "Python, numpy, pandas, sklearn, matplotlib",
    url: null,
    video_url: null,
    source_url: "https://github.com/farucis/Hybrid-Recommendation-system",
  },
  {
    name: "Classification Manuscript",
    summary: "Classification Of Manuscript By Gender",
    tehcnologies: "Python, pandas, numpy, sklearn, skimage, tabulate",
    url: null,
    video_url: null,
    source_url:
      "https://github.com/farucis/Classification-of-manuscript-by-gender",
  },
];

const Project = (name) => {
  return (
    <div className="demo-projects-container">
      <TitleHeader title="Projects" subTitle="Lets See Projects Demo" />
      <div className="demo-projects-parent">
        <div className="p-scroll">
          {projects.map((project, index) => (
            <section key={index} id={project.name}>
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
        <video className="video-show" width="90%" height="160px" controls>
          <source src={project.video_url} type="video/mp4" />
        </video>
      );
    }
  };
  const [showVideo, setShowVideo] = React.useState(false);

  return (
    <div className="project-section-container">
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
          ) : (
            <a href={project.source_url}>
              <span className="btn highlighted-btn">Source Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
