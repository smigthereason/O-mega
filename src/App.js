import React from "react";
import Navbar from "./Components/Navbar";
import VideoBackground from "./Assets/4k_Mystery.mp4";
import GameList from './Components/GameList';
import Discount from "./Components/Discount";
import Sponsors from "./Components/Sponsors";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <section className="video-section">
        <video src={VideoBackground} autoPlay loop muted className="video-background" />
        <div className="content-overlay">
          <h1>LATEST RELEASES</h1>
          <GameList />
          <Discount />
          <Sponsors />
        </div>
      </section>
    </div>
  );
};

export default App;
