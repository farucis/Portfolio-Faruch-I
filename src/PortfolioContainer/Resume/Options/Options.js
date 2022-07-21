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
    <div className="resum-options">
      {links.map((link, index) => (
        <ScrollIntoView
          selector={link.url}
          smooth={true}
          scrollOptions={{ block: "nearest" }}
          className="resum-options-container"
        >
          <div className="resum-optios-icons-colz">
            <div className="resum-optios-icons">
              <div onClick={() => setSelected(link.text)}>
                {findIcon(link.icon)}
              </div>
            </div>
          </div>
          <div className="resum-optios-names-colz">
            <div className="resum-optios-names">
              <div onClick={() => setSelected(link.text)}>
                <h1>{link.text}</h1>
              </div>
            </div>
          </div>
        </ScrollIntoView>
      ))}
    </div>
  );
};

export default Options;
