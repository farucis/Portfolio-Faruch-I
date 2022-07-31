import React from "react";
import "./TitleHeader.css";

import { useWindowScroll } from "react-use";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (window.innerWidth > 810) {
      if (pageYOffset > 690) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    } else {
      if (pageYOffset > 2900) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  }, [pageYOffset]);

  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {isVisible && (
        <button
          style={{
            display: "flex",
            position: "fixed",
            bottom: "20px",
            right: "20px",
            height: "50px",
            width: "50px",
            fontSize: "1.6rem",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#708090",
            borderRadius: "30%",
            border: "none",
            transition: "all 1s ease-in-out",
          }}
          onClick={ScrollToTop}
        >
          <div className="arroweUp-infinite">
            <FaArrowUp className="arroweUp-infinite" />
          </div>
        </button>
      )}
    </div>
  );
};

export default BackToTop;
