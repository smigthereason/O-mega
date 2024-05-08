import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaXbox, FaWindows, FaApple, FaLinux } from "react-icons/fa";
import { SiPlaystation5, SiPlaystation4 } from "react-icons/si";
import { BsNintendoSwitch, BsAndroid2 } from "react-icons/bs";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Discount = () => {
  const [games, setGames] = useState([]);
  const [trailerVisible, setTrailerVisible] = useState(false);
  const [currentGame, setCurrentGame] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(
          "https://api.rawg.io/api/games?key=6e2c3d10b67342d8a5dac993f10b5393&dates=2016-01-01,2022-12-31&ordering=-added&page_size=20&genres=sports,action,arcade,racing"
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
      case "android":
        return <BsAndroid2 />;
      case "linux":
        return <FaLinux />;
      default:
        return null;
    }
  };
  const renderRatingStars = (rating) => {
    const roundedRating = Math.round(rating * 10) / 10; // Round off to 1 decimal place
    const stars = [];
    const fullStars = Math.floor(roundedRating);
    const halfStar = roundedRating - fullStars > 0 ? 1 : 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    }
    if (halfStar === 1) {
      stars.push(<FaStarHalfAlt key={fullStars} className="text-yellow-500" />);
    }

    return (
      <div className="flex">
        {stars.map((star, index) => (
          <div key={index} className="flex items-center">
            {star}
          </div>
        ))}
      </div>
    );
  };

  const calculateDiscount = (rating) => {
    const maxDiscount = 40;
    const minDiscount = 15;
    // Assuming rating ranges from 0 to 5
    const percentage = (rating / 5) * (maxDiscount - minDiscount) + minDiscount;
    return Math.round(percentage); // Round off the percentage
  };

  const toggleTrailer = (game) => {
    setCurrentGame(game);
    setTrailerVisible((prev) => !prev);
  };

  return (
    <div className="overflow-x-scroll flex gap-4 p-4">
      {games.map((game) => (
        <div
          key={game.id}
          className="bg-gray-900 p-4 rounded-lg shadow-md text-center"
          style={{ minWidth: "500px", maxWidth: "500px" }}
          onMouseEnter={() => toggleTrailer(game)}
          onMouseLeave={() => setTrailerVisible(false)}
        >
          <div className="relative overflow-hidden h-49">
            {trailerVisible && currentGame === game && game.clip?.clip && (
              <video
                autoPlay
                muted
                loop
                className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-300 opacity-100"
                src={game.clip.clip}
              />
            )}
            <img
              src={game.background_image}
              alt={game.name}
              className={`w-full h-46 object-cover object-center mb-4 ${
                trailerVisible ? "opacity-0" : "opacity-100"
              } transition-opacity duration-300`}
            />
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2 uppercase">
              {game.name}
            </h3>
            <div className="p-4">
              <div className="flex items-center justify-center">
                {game.platforms.map((platform) => (
                  <span
                    key={platform.platform.id}
                    className="flex mb-2 h-4 w-6 justify-center items-center"
                  >
                    {getPlatformIcon(platform.platform.name)}
                  </span>
                ))}
              </div>
              <p className="flex h-4 w-50 justify-center">
                {renderRatingStars(game.rating)}
              </p>
            </div>
            <p className="text-green-600 mb-2">
              Discount: {calculateDiscount(game.rating)}%
            </p>
          </div>

          <div className="flex items-center justify-center">
            <Link
              to="/login"
              className="bg-blue-400 text-white py-2 px-6 rounded-md mr-4 hover:bg-blue-300/90 transition duration-300"
            >
              PLAY
            </Link>
            <Link
              to="/signup"
              className="bg-blue-400 text-white py-2 px-6 rounded-md hover:bg-blue-300/90 transition duration-300"
            >
              BUY NOW
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Discount;
