// import React from "react";
// import "./Menu.css";
// import { TiArrowBack } from "react-icons/ti";
// import Genre from "./Genre";
// import Platform from "./Platform";

// const Menu = ({ isOpen, onClose }) => {
//   const handleGenreSelect = (genre) => {
//     console.log("Selected genre:", genre);
//     // You can perform further actions with the selected genre here
//   };

//   const handlePlatformSelect = (platform) => {
//     console.log("Selected platform:", platform);
//     // You can perform further actions with the selected platform here
//   };

//   return (
//     <>
//       {isOpen && <div className="backdrop" onClick={onClose}></div>}
//       <div className={`menu ${isOpen ? "open" : ""}`}>
//         <div className="menu-header">
//           <button onClick={onClose}>
//             <TiArrowBack className="size-12 border-2 border-gray-300 rounded-full flex items-center justify-center text-white" />
//           </button>
//         </div>
        
//         <div className="menu-content">
//           <Genre onSelectGenre={handleGenreSelect} />
//           <Platform onSelectPlatform={handlePlatformSelect} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Menu;

import React, { useState } from "react";
import "./Menu.css";
import { TiArrowBack } from "react-icons/ti";
import Genre from "./Genre";
import Platform from "./Platform";
import SearchBar from "./SearchBar";

const Menu = ({ isOpen, onClose }) => {
  const [filteredGames, setFilteredGames] = useState([]);

  const handleGenreSelect = (genre) => {
    console.log("Selected genre:", genre);
    // You can perform further actions with the selected genre here
  };

  const handlePlatformSelect = (platform) => {
    console.log("Selected platform:", platform);
    // You can perform further actions with the selected platform here
  };

  return (
    <>
      {isOpen && <div className="backdrop" onClick={onClose}></div>}
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <div className="menu-header">
          <button onClick={onClose}>
            <TiArrowBack className="size-12 border-2 border-gray-300 rounded-full flex items-center justify-center text-white" />
          </button>
        </div>
        <div className="menu-content">
          <SearchBar setFilteredGames={setFilteredGames} />
          <Genre onSelectGenre={handleGenreSelect} />
          <Platform onSelectPlatform={handlePlatformSelect} />
          {/* Render filteredGames list or pass it to a separate component */}
          {filteredGames.length > 0 && (
            <div>
              <h3>Filtered Games:</h3>
              <ul>
                {filteredGames.map((game) => (
                  <li key={game.id}>{game.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Menu;

