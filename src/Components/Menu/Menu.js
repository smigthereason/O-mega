import React, { useState } from "react";
import "./Menu.css";
import { TiArrowBack } from "react-icons/ti";
import Genre from "./Genre";

const Menu = ({ isOpen, onClose }) => {
  const handleGenreSelect = (genre) => {
    console.log("Selected genre:", genre);
    // You can perform further actions with the selected genre here
  };

  return (
    <>
      {isOpen && <div className="backdrop" onClick={onClose}></div>}
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <div className="menu-header">
          <button onClick={onClose}>
            <TiArrowBack className="size-12 border-2 border-gray-300 rounded-full flex items-center justify-center text-white" />
          </button>
        </div>
        
        <div className="menu-content">
      
        <Genre onSelectGenre={handleGenreSelect} />
      

      </div>


        
      </div>
    </>
  );
};

export default Menu;
