import React, { useState } from 'react';
import Navbar from './Navbar';
import GameList from './GameList';
import SearchBar from './SearchBar';
import Login from './Login';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="App">
      <Navbar />
      <SearchBar onSearch={handleSearch} />
      <h1>My Game Library</h1>
      <GameList searchTerm={searchTerm} />
      <Login />
    </div>
  );
};

export default App;
