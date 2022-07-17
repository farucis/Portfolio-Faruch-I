import React from "react";
import './App.css';
import AboutME from "./PortfolioContainer/AboutME/AboutME";
import Home from './PortfolioContainer/Home/Home';
import Resume from "./PortfolioContainer/Resume/Resume";

function App() {
  return (
    <div className="App">
      <Home />
      <AboutME />
      <Resume />
    </div>
  );
}

export default App;
