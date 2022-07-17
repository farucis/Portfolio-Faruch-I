import React from "react";
import "./Options.css";

import { links } from "../Links";
import { FaUserGraduate } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { FaPalette } from "react-icons/fa";

const Options = () => {
  const findIcon = (e) => {
    if (e === "FaUserGraduate") return <FaUserGraduate />;
    if (e === "FaHistory") return <FaHistory />;
    if (e === "FaLaptopCode") return <FaLaptopCode />;
    if (e === "GoGraph") return <GoGraph />;
    if (e === "FaPalette") return <FaPalette />;
  };

  //const [selected, setSelected] = React.useState("Education");
  const [selected, setSelected] = React.useState("Education");

  React.useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <div className="resume-options">
      <div className="resume-options-icons">
        {links.map((link, index) => (
          <div className="resume-options-2">
            {link.text === selected ? (
              <>
                <div className="resume-options-icons-icon">
                  <a href={link.url}>{findIcon(link.icon)}</a>
                </div>
                <a href={link.url} key={link.id}>
                  <div className="resume-option-text-selected">{link.text}</div>
                </a>
              </>
            ) : (
              <>
                <div
                  className="resume-options-icons-icon"
                  onClick={() => setSelected(link.text)}
                >
                  <a href={link.url} onClick={()=> setSelected(link.text)} >{findIcon(link.icon)}</a>
                </div >
                <a href={link.url} key={link.id} onClick={()=> setSelected(link.text)} >
                  <div className="resume-options-text">{link.text}</div>
                </a>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Options;
