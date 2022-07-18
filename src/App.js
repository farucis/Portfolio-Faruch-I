import React from "react";
import "./App.css";

import AboutME from "./PortfolioContainer/AboutME/AboutME";
import ContactMe from "./PortfolioContainer/ContactMe/ContactMe";
import Home from "./PortfolioContainer/Home/Home";
import Resume from "./PortfolioContainer/Resume/Resume";

function App() {
  return (
    <div className="App">
      <Home />
      <AboutME />
      <Resume />
      <ContactMe />
    </div>
  );
}

export default App;
