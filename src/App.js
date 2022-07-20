import React from "react";
import "./App.css";

import AboutME from "./PortfolioContainer/AboutME/AboutME";
import Home from "./PortfolioContainer/Home/Home";
import Project from "./PortfolioContainer/Projects/Projects";
import Resume from "./PortfolioContainer/Resume/Resume";
import ContactMe from "./PortfolioContainer/ContactMe/ContactMe";

function App() {
  return (
    <div className="App">
      <Home />
      <AboutME />
      <Project />
      <ContactMe />
    </div>
  );
}

export default App;
