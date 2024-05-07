// import React, { useState, useEffect } from 'react';

// const GameList = () => {
//   const [games, setGames] = useState([]);

//   useEffect(() => {
//     const fetchGames = async () => {
//       try {
//         const response = await fetch('https://api.rawg.io/api/games?key=6e2c3d10b67342d8a5dac993f10b5393');
//         if (!response.ok) {
//           throw new Error('Network response was not ok.');
//         }
//         const data = await response.json();
//         setGames(data.results);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchGames();
//   }, []);

//   return (
//     <div>
//       <h1>Game List</h1>
//       <ul>
//         {games.map((game) => (
//           <li key={game.id}>{game.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default GameList;

import React, { useState, useEffect } from "react";
import { FaXbox, FaWindows, FaApple } from "react-icons/fa";
import { SiPlaystation5, SiPlaystation4 } from "react-icons/si";
import { BsNintendoSwitch } from "react-icons/bs";

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(
          "https://api.rawg.io/api/games?key=6e2c3d10b67342d8a5dac993f10b5393&dates=2022-01-01,2022-12-31&ordering=-added&page_size=36"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setGames(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchGames();
  }, []);

  const getPlatformIcon = (platformName) => {
    switch (platformName.toLowerCase()) {
      case "pc":
        return <FaWindows />;
      case "playstation 5":
        return <SiPlaystation5 />;
      case "playstation 4":
        return <SiPlaystation4 />;
      case "xbox series s/x":
        return <FaXbox />;
      case "nintendo switch":
        return <BsNintendoSwitch />;
      case "macos":
        return <FaApple />;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {games.map((game) => (
        <div
          key={game.id}
          className="bg-transparent bg-opacity-60 backdrop-blur-lg shadow-lg rounded-lg overflow-hidden"
        >
          <img
            src={game.background_image}
            alt={game.name}
            className="w-full h-48 object-cover object-center"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{game.name}</h2>
            <div className="flex items-center mb-2">
              <span className="text-gray-700 mr-2">Platforms:</span>
              {game.platforms.map((platform) => (
                <span key={platform.platform.id} className="mr-2">
                  {getPlatformIcon(platform.platform.name)}
                </span>
              ))}
            </div>
            <p className="text-gray-700 mb-2">
              Genres: {game.genres.map((genre) => genre.name).join(", ")}
            </p>
            <p className="text-gray-700 mb-2">Rating: {game.rating}</p>
            {game.clip && (
              <video controls className="w-full">
                <source src={game.clip.clip} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameList;

