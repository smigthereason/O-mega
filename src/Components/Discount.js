import React, { useState, useEffect } from 'react';

const Discount = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(
          'https://api.rawg.io/api/games?key=6e2c3d10b67342d8a5dac993f10b5393&dates=2022-01-01,2022-12-31&ordering=-added&page_size=10'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setGames(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchGames();
  }, []);

  const calculateDiscount = (rating) => {
    const maxDiscount = 40;
    const minDiscount = 15;
    // Assuming rating ranges from 0 to 10
    const percentage = ((rating / 10) * (maxDiscount - minDiscount)) + minDiscount;
    return Math.round(percentage); // Round off the percentage
  };

  return (
    <div className="overflow-x-scroll flex gap-4 p-4">
      {games.map((game) => (
        <div key={game.id} className="bg-gray-100 p-4 rounded-lg shadow-md" style={{ minWidth: '200px', maxWidth: '300px' }}>
          <img src={game.background_image} alt={game.name} className="w-full h-48 object-cover object-center mb-4" />
          <h3 className="text-lg font-semibold mb-2">{game.name}</h3>
          <p className="text-gray-700 mb-2">Rating: {game.rating}</p>
          <p className="text-green-600 mb-2">Discount: {calculateDiscount(game.rating)}%</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Discount;
