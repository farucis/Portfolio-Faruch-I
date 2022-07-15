import React from "react";
import './App.css';
import AboutME from "./ProtfolioContainer/AboutME/AboutME";
import Home from './ProtfolioContainer/Home/Home';
import Resume from "./ProtfolioContainer/Resume/Resume";

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
