// import React from "react";
// import Navbar from "./Components/Navbar";
// import VideoBackground from "./Assets/4k.mp4";
// import GameList from "./Components/GameList";
// import Discount from "./Components/Discount";
// import Sponsors from "./Components/Sponsors";
// // import Footer from "./Components/Footer";

// const App = () => {
  
//   return (
//     <div className="App">
//       <Navbar  />
//       <section className="video-section">
//         <video
//           src={VideoBackground}
//           autoPlay
//           loop
//           muted
//           className="video-background"
//         />
//         <div className="content-overlay  text-white ">
//           <h1 className="text-3xl text-center py-9">LATEST RELEASES</h1>
//           <div className="game-list-section">
//             <GameList />
//           </div>
//           <div className="discount-section">
//             <Discount />
//           </div>

//           <Sponsors />
//           {/* <Footer /> */}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default App;
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import VideoBackground from "./Assets/4k.mp4";
import GameList from "./Components/GameList";
import Discount from "./Components/Discount";
import Sponsors from "./Components/Sponsors";
import "./App.css"; // Import CSS for styling

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="App">
      <Navbar onMenuToggle={toggleMenu} />
      <div className={`content-wrapper ${isMenuOpen ? "pushed" : ""}`}>
        <section className="video-section">
          <video
            src={VideoBackground}
            autoPlay
            loop
            muted
            className="video-background"
          />
          <div className="content-overlay text-white">
            <h1 className="text-3xl text-center py-9">LATEST RELEASES</h1>
            <div className="game-list-section">
              <GameList />
            </div>
            <div className="discount-section">
              <Discount />
            </div>

            <Sponsors />
          </div>
        </section>
      </div>
      {/* Render the Menu component */}
      {/* <Menu isOpen={isMenuOpen} onClose={toggleMenu} /> */}
    </div>
  );
};

export default App;

