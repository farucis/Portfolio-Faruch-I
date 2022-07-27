import React from "react";
import "./Projects.css";
import { useScroll } from "react-use";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
    tehcnologies: "React-native, react-redux, firebase, Rest API, Python",
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
    name: "Recommendation System",
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
  const width = window.innerWidth;

  const projectsScrollRef = React.useRef(null);
  const { x } = useScroll(projectsScrollRef);
  const offseting = 320;
  const [currentProject, setCurrentProject] = React.useState("Portfolio");

  //console.log(document.getElementById("Shapeit").offsetLeft / offseting);

  const scrollToNext = (ref) => {
    ref.current.scrollTo({
      left: x + offseting,
      behavior: "smooth",
    });
    if (Math.round(x / offseting) + 1 <= projects.length - 1) {
      let CurrentProjectOffset = Math.round(x / offseting) + 1;
      setCurrentProject(projects[CurrentProjectOffset].name);
    }
  };

  const scrollToBack = (ref) => {
    ref.current.scrollTo({
      left: x - offseting,
      behavior: "smooth",
    });
    if (Math.round(x / offseting) - 1 >= 0) {
      let CurrentProjectOffset = Math.round(x / offseting) - 1;
      setCurrentProject(projects[CurrentProjectOffset].name);
    }
  };

  const scrollByOffset = (ref, name) => {
    const offsetCurrent = document.getElementById(currentProject).offsetLeft;
    const offset = document.getElementById(name).offsetLeft;

    ref.current.scrollTo({
      left: offset,
      behavior: "smooth",
    });

    if (width < 810) {
      let CurrentProjectOffset = Math.round(offset / 300) - 1;

      if (width <= 375) CurrentProjectOffset = Math.round(offset / 260) - 1;

      setCurrentProject(projects[CurrentProjectOffset].name);
    } else {
      if (offsetCurrent > offset) scrollToBack(ref);
      else if (offsetCurrent < offset) scrollToNext(ref);
    }
  };

  return (
    <div className="demo-projects-container">
      <TitleHeader title="Projects" subTitle="Lets See Projects Demo" />
      <div className="demo-projects-parent">
        {width > 810 ? (
          <button
            className="btn primary-btn"
            style={{ width: "120px" }}
            onClick={() => scrollToBack(projectsScrollRef)}
          >
            <FaArrowLeft /> Previous
          </button>
        ) : null}
        <div className="p-scroll" ref={projectsScrollRef}>
          <BlankSpace place="start" />
          {projects.map((project, index) => (
            <section
              className={
                currentProject === project.name
                  ? "current-project"
                  : "other-projects"
              }
              key={index}
              id={project.name}
              onClick={() => scrollByOffset(projectsScrollRef, project.name)}
            >
              <ProjectSection project={project} />
            </section>
          ))}
          <BlankSpace place="end" />
        </div>
        {width > 810 ? (
          <button
            className="btn primary-btn"
            style={{ width: "120px" }}
            onClick={() => scrollToNext(projectsScrollRef)}
          >
            Next <FaArrowRight />
          </button>
        ) : null}
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

const BlankSpace = (props) => {
  return (
    <div
      id={props.place}
      //onClick={() => scrollToNext(projectsScrollRef)}
    >
      <div className="project-blank-section-container"></div>
    </div>
  );
};

export default Project;
