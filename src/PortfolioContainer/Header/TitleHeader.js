import React from "react";
import "./TitleHeader.css";

const TitleHeader = (props) => {
  let t_id = props.title;
  if (t_id === "About Me") {
    t_id = "AboutMe";
  }

  return (
    <div className="title-header-container" id={t_id}>
      <h1>{props.title}</h1>
      <p>{props.subTitle}</p>

      <div className="title-header-image">
        <div className="title-header-image-backround"></div>
      </div>
    </div>
  );
};

export default TitleHeader;
