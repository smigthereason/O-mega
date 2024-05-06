import React from 'react';

const SearchBar = ({ handleSearch }) => {
  const handleChange = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
