import React from "react";
import "./TitleHeader.css";

const TitleHeader = (props) => {
  return (
    <div className="title-header-container">
      <h1>{props.title}</h1>
      <p>{props.subTitle}</p>

      <div className="title-header-image">
        <div className="title-header-image-backround">
        </div>
      </div>

    </div>
  );
};

export default TitleHeader;
