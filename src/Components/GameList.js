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
        setGames(data.results); 
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

// import React, { useState, useEffect } from 'react';

// const GameList = () => {
//   const [games, setGames] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchGames = async () => {
//       try {
//         const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.rawg.io/api/games?key=6e2c3d10b67342d8a5dac993f10b5393', {
//           headers: {
//             'Origin': 'http://localhost:3000' // Specify the origin header if required by the CORS proxy
//           }
//         });
//         if (!response.ok) {
//           throw new Error('Network response was not ok.');
//         }
//         const data = await response.json();
//         setGames(data.results);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError('Error fetching data');
//         setLoading(false);
//       }
//     };

//     fetchGames();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

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
