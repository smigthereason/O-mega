import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setFilteredGames }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.rawg.io/api/games?key=6e2c3d10b67342d8a5dac993f10b5393&search=${searchQuery}`);
      if (!response.ok) {
        throw new Error("Failed to fetch games");
      }
      const data = await response.json();
      setFilteredGames(data.results || []);
    } catch (error) {
      console.error("Error searching games:", error);
    }
  };

  return (
    <div className="flex justify-center mb-2">
      <input
        type="search"
        placeholder="Search games"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border border-gray-300 px-4 py-2 rounded"
      />
      <button
        className="bg-blue-300 hover:bg-blue-200/90 p-2 py-2 rounded border"
        onClick={handleSearch}
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
