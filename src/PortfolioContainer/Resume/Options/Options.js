import React from "react";
import "./Options.css";
import ScrollIntoView from "react-scroll-into-view";

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

  const [selected, setSelected] = React.useState("Education");

  React.useEffect(() => {}, [selected]);

  return (
    <div className="resume-options">
      <div className="resume-options-icons">
        {links.map((link, index) => (
          <div className="resume-options-2">
            {link.text === selected ? (
              <>
                <div className="resume-options-icons-icon">
                  <span key={link.id + 20}>{findIcon(link.icon)}</span>
                </div>
                <div className="resume-option-text-selected">
                  <span key={link.id + 20}>{link.text}</span>
                </div>
              </>
            ) : (
              <ScrollIntoView selector={link.url} smooth={true} scrollOptions={{block:"nearest"}}>
                <div className="resume-options-2">
                  <div
                    className="resume-options-icons-icon"
                    onClick={() => setSelected(link.text)}
                  >
                    <span key={link.id}>{findIcon(link.icon)}</span>
                  </div>
                  <div
                    className="resume-options-text"
                    onClick={() => setSelected(link.text)}
                  >
                    <span key={link.id}>{link.text}</span>
                  </div>
                </div>
              </ScrollIntoView>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Options;
