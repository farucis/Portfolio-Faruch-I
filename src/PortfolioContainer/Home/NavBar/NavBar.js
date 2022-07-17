import React from "react";
import "./NavBar.css";
import { BiMenu } from "react-icons/bi";

const NavBar = () => {
  const barList = ["Home", "AboutMe", "Resume", "Projects", "Contact"];
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isActive, setIsActive] = React.useState("");

  React.useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="navBar-container">
      <div className="navBar-parent">
        <div className="navBar-title">
          <h1>Portfolio</h1>
        </div>
        {windowWidth < 810 ? (
          <div className="navBar-mobile">
            <div className="navBar-mobile-parent">
              {!isOpen ? (
                <div>
                  <div onClick={() => setIsOpen(!isOpen)}>
                    <BiMenu className="navBar-mobile-icon" />
                  </div>
                  <div className="navBar-list-mobile-options-close">
                    <NavBarListMobileOptions
                      setIsOpen={setIsOpen}
                      barList={barList}
                    />
                  </div>
                </div>
              ) : (
                <div className="navBar-list-mobile-options-open">
                  <NavBarListMobileOptions
                    setIsOpen={setIsOpen}
                    barList={barList}
                  />
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="navBar-list">
            {barList.map((bar, index) => {
              return (
                <div key={index}>
                  {isActive === bar ? (
                    <div className="navBar-list-active">
                      {bar === "AboutMe" ? (
                        <a href="#About Me">{bar}</a>
                      ) : (
                        <a href={`#${bar}`}>{bar}</a>
                      )}
                    </div>
                  ) : bar === "AboutMe" ? (
                    <a href="#About Me" onClick={() => setIsActive(bar)}>
                      {bar}
                    </a>
                  ) : (
                    <a href={`#${bar}`} onClick={() => setIsActive(bar)}>
                      {bar}
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

const NavBarListMobileOptions = (props) => {
  return (
    <div className="navBar-list-mobile-options">
      {props.barList.map((bar, index) => {
        return (
          <div key={index}>
            {bar === "AboutMe" ? (
              <div onClick={() => props.setIsOpen(false)}>
                <a href="#About Me">{bar}</a>
              </div>
            ) : (
              <div onClick={() => props.setIsOpen(false)}>
                <a href={`#${bar}`}>{bar}</a>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default NavBar;
