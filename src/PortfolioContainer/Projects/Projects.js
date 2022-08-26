import React from "react";
import "./Projects.css";
import { useScroll } from "react-use";
import {
  FaArrowLeft,
  FaArrowRight,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { projectsDB } from "./projectsDB";
import TitleHeader from "../Header/TitleHeader";

const Project = () => {
  let width = window.innerWidth;

  const projectsScrollRef = React.useRef(null);
  const { x } = useScroll(projectsScrollRef);
  const offseting = 320;
  const [currentProject, setCurrentProject] = React.useState("Portfolio");

  const scrollToNext = (ref) => {
    ref.current.scrollTo({
      left: width > 810 ? x + offseting : x + offseting - 100,
      behavior: "smooth",
    });

    if (
      Math.round(width > 810 ? x / offseting : (x - 100) / offseting) + 1 <=
      projectsDB.length - 1
    ) {
      let CurrentProjectOffset =
        Math.round(width > 810 ? x / offseting : (x - 100) / offseting) + 1;
      setCurrentProject(projectsDB[CurrentProjectOffset].name);
    }
  };

  const scrollToBack = (ref) => {
    ref.current.scrollTo({
      left: width > 810 ? x - offseting : x - offseting - 100,
      behavior: "smooth",
    });
    if (
      Math.round(width > 810 ? x / offseting : (x - 100) / offseting) - 1 >=
      0
    ) {
      let CurrentProjectOffset =
        Math.round(width > 810 ? x / offseting : (x - 100) / offseting) - 1;
      setCurrentProject(projectsDB[CurrentProjectOffset].name);
    }
  };

  const scrollByOffset = (scrollScreenRef, name) => {
    let projectIndex = projectsDB.findIndex((project) => project.name === name);
    const offsetP = document.getElementById(name).offsetLeft;

    scrollScreenRef.current.scrollTo({
      left: width < 579 ? offsetP : offseting * projectIndex,
      behavior: "smooth",
    });
    setCurrentProject(projectsDB[projectIndex].name);
  };

  React.useEffect(() => {
    scrollByOffset(projectsScrollRef, "Portfolio");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
          {projectsDB.map((project, index) => (
            <section
              className={
                currentProject === project.name
                  ? "current-project"
                  : "other-projects"
              }
              key={index}
              id={project.name}
              onClick={() =>
                project.name !== currentProject &&
                scrollByOffset(projectsScrollRef, project.name)
              }
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
      <Counter
        currentProject={currentProject}
        scrollToBack={scrollToBack}
        scrollToNext={scrollToNext}
        projectsScrollRef={projectsScrollRef}
      />
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
          {project.video_url && (
            <button
              className="btn primary-btn"
              onClick={() => setShowVideo(!showVideo)}
            >
              <span>App Video</span>
            </button>
          )}

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

const BlankSpace = (props) => {
  return (
    <div id={props.place}>
      <div className="project-blank-section-container"></div>
    </div>
  );
};

const Counter = ({
  currentProject,
  scrollToBack,
  scrollToNext,
  projectsScrollRef,
}) => {
  let width = window.innerWidth;

  return (
    <div className="counter-container">
      {width < 810 && (
        <label className="arrow-icon">
          <i onClick={() => scrollToBack(projectsScrollRef)}>
            <FaLongArrowAltLeft />
          </i>
        </label>
      )}
      {projectsDB.map((project, index) => (
        <div
          key={index}
          className={
            project.name === currentProject
              ? "counter-circle-selected"
              : "counter-circle"
          }
        />
      ))}
      {width < 810 && (
        <label className="arrow-icon">
          <i onClick={() => scrollToNext(projectsScrollRef)}>
            <FaLongArrowAltRight />
          </i>
        </label>
      )}
    </div>
  );
};
