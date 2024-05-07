// import React from "react";
// import Logo from "../Assets/logo-no-background.png";
// import SearchBar from "./SearchBar";

// const Navbar = () => {
//   const handleSearch = (term) => {
//     setSearchTerm(term);
//   };
//   return (
//     <nav className="bg-purple-900">
//       <ul>
//         <li>
//           <img src={Logo} alt="Logo" className="h-11 w-auto" />

//           <SearchBar searchTerm={searchTerm}
//           onSearch={handleSearch} />

//           <button className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
//             Sign up
//           </button>
//           <button className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
//             Log in
//           </button>
//         </li>
//       </ul>
//       {/* <div className="max-w-7xl mx-auto px-4"> */}
//       {/* <div className="flex justify-between h-16">
//           <a
//             href="/"
//             className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
//           >
//             Home
//           </a>

//           <div className="flex items-center">
//           </div>
//           <div className="flex">
//             {/* <a href="/about" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</a> */}
//       {/* Add more navbar items as needed */}
//       {/* </div> */} */}
//       {/* <div className="flex items-center"></div> */}
//       {/* </div> */}
//       {/* </div> */}
//     </nav>
//   );
// };

// export default Navbar;

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
    <nav className="bg-purple-900">
      <ul>
        <li className="flex justify-between h-16">
          <img src={Logo} alt="Logo" className="h-11 w-auto" />
          <Link to="/" className="bg-transparent hover:bg-slate-50 py-1 px-2">Home</Link>
          {/* Pass searchTerm and onSearch prop to SearchBar component */}
          <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />

          {/* <button className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            Sign up
          </button>
          <button className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
            Log in
          </button> */}
          <Link
            to="/login"
            className="bg-blue-400 text-slate-50 hover:bg-blue-300/90 py-1 px-2"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-blue-400 text-slate-50 hover:bg-blue-300/90 py-1 px-2"
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
