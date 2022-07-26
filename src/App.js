import React from "react";
import "./App.css";

import AboutME from "./PortfolioContainer/AboutME/AboutME";
import Home from "./PortfolioContainer/Home/Home";
import Projects from "./PortfolioContainer/Projects/Projects";
import Resume from "./PortfolioContainer/Resume/Resume";
import ContactMe from "./PortfolioContainer/ContactMe/ContactMe";
import BackToTop from "./PortfolioContainer/Header/BackToTop";

function App() {
  return (
    <div className="App">
      <Home />
      <AboutME />
      <Resume />
      <Projects />
      <ContactMe />
      <BackToTop />
      <div className="end-page"></div>
    </div>
  );
}

export default App;
