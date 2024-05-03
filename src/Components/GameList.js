import React, { useState, useEffect } from 'react';

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('https://api.rawg.io/api/games?key=6e2c3d10b67342d8a5dac993f10b5393');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setGames(data.results); // Assuming the data structure has a 'results' property containing an array of games
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchGames();
  }, []);

  return (
    <div>
      <h1>Game List</h1>
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;
