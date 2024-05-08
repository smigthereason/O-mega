import React, { useState, useEffect } from "react";

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
      <h3 onClick={() => setShowGenres(!showGenres)}>Genres</h3>
      {showGenres && (
        <ul>
          {genres.map((genre) => (
            <li key={genre.id} onClick={() => onSelectGenre(genre)}>
              {genre.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Genre;
