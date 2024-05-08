import React, { useState } from "react";
import Logo from "../Assets/logo-no-background.png";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Define searchTerm and setSearchTerm using useState

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <nav className="bg-gray-700 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo with Link to Home */}
        <Link to="/" className="flex items-center text-white">
          <img src={Logo} alt="Logo" className="h-12 w-auto mr-2" />
        </Link>

        {/* SearchBar */}
        <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />

        {/* Login and Sign Up buttons */}
        <div className="flex items-center">
          <Link
            to="/login"
            className="bg-blue-400 text-white py-2 px-6 rounded-md mr-4 hover:bg-blue-300/90 transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-blue-400 text-white py-2 px-6 rounded-md hover:bg-blue-300/90 transition duration-300"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
