import React, { useState, useEffect } from "react";
import { FaChevronCircleRight } from "react-icons/fa";
import classNames from "classnames";

const Genre = ({ onSelectGenre }) => {
  const [genres, setGenres] = useState([]);
  const [showGenres, setShowGenres] = useState(false);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch("https://api.rawg.io/api/genres?key=6e2c3d10b67342d8a5dac993f10b5393");
        if (!response.ok) {
          throw new Error("Failed to fetch genres");
        }
        const data = await response.json();
        setGenres(data.results || []);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);

  return (
    <div className="genre-dropdown">
    <h3
        className={classNames(
          "flex items-center cursor-pointer transition-transform duration-700 hover:text-xl hover:text-amber-500"

          
        )}
        onClick={() => setShowGenres(!showGenres)}
      >
        <FaChevronCircleRight
          className={classNames("mr-2", {
            "transform rotate-90": showGenres,
            "transition-transform duration-300": true,
            
          })}
        />
        Genres
      </h3>
      {showGenres && (
        <ul className="mt-2">
          {genres.map((genre) => (
            <li
              key={genre.id}
              className="cursor-pointer hover:bg-gray-200 rounded-md px-2 py-1"
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Genre;


