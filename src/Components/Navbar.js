// import React, { useState } from "react";
// import Logo from "../Assets/logo-no-background.png";
// import SearchBar from "./SearchBar";
// import { Link } from "react-router-dom";
// import { HiMenuAlt1 } from "react-icons/hi";
// import Menu from "./Menu";


// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev);
  

//   const [searchTerm, setSearchTerm] = useState(""); // Define searchTerm and setSearchTerm using useState

//   const handleSearch = (term) => {
//     setSearchTerm(term);
//   };

//   return (
//     <nav className="bg-gray-700 py-4">
//       <div className="container mx-auto flex items-center justify-between">
//         <div className="flex items-center justify-between  px-4 py-4 mx-0 ">
//           {/* Menu Kebab Icon */}
//           <HiMenuAlt1 className="flex text-white h-8 w-20" />

//           {/* Logo with Link to Home */}
//           <Link to="/" className="flex items-center text-white mr-4">
//             <img src={Logo} alt="Logo" className="h-12 w-auto" />
//           </Link>
//         </div>

//         {/* SearchBar */}
//         <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />

//         {/* Login and Sign Up buttons */}
//         <div className="flex items-center">
//           <Link
//             to="/login"
//             className="bg-blue-400 text-white py-2 px-6 rounded-md mr-4 hover:bg-blue-300/90 transition duration-300"
//           >
//             Login
//           </Link>
//           <Link
//             to="/signup"
//             className="bg-blue-400 text-white py-2 px-6 rounded-md hover:bg-blue-300/90 transition duration-300"
//           >
//             Sign Up
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import Logo from "../Assets/logo-no-background.png";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import Menu from "./Menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const [searchTerm, setSearchTerm] = useState(""); // Define searchTerm and setSearchTerm using useState

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <nav className="bg-gray-700 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center justify-between px-4 py-4 mx-0">
          {/* Menu Kebab Icon */}
          <HiMenuAlt1
            className="flex text-white h-8 w-20 cursor-pointer"
            onClick={toggleMenu} // Add onClick event to open/close menu
          />

          {/* Logo with Link to Home */}
          <Link to="/" className="flex items-center text-white mr-4">
            <img src={Logo} alt="Logo" className="h-12 w-auto" />
          </Link>
        </div>

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
      {/* Render the Menu component */}
      {isMenuOpen && <Menu isOpen={isMenuOpen} onClose={toggleMenu} />}
    </nav>
  );
};

export default Navbar;
