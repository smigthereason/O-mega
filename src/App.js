import React from "react";
import Navbar from "./Components/Navbar";
import VideoBackground from "./Assets/4k.mp4";
import GameList from "./Components/GameList";
import Discount from "./Components/Discount";
import Sponsors from "./Components/Sponsors";
// import Foooter from "./Components/Foooter";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <section className="video-section">
        <video
          src={VideoBackground}
          autoPlay
          loop
          muted
          className="video-background"
        />
        <div className="content-overlay  text-white ">
          <h1 className="text-3xl text-center py-9">LATEST RELEASES</h1>
          <div className="game-list-section">
            <GameList />
          </div>
          <div className="discount-section">
            <Discount />
          </div>

          <Sponsors />
          {/* <Foooter /> */}
        </div>
      </section>
    </div>
  );
};

export default App;
