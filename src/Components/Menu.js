import React from "react";
import "./Menu.css"; 

const Menu = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && <div className="backdrop" onClick={onClose}></div>}
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <div className="menu-header">
          <h2>Filters</h2>
          <button onClick={onClose}>Close</button>
        </div>
        <div className="menu-content">
          <h3>Genre</h3>
          {/* Genre filters */}
          <h3>Platforms</h3>
          {/* Platform filters */}
          <h3>New Releases</h3>
          {/* New releases filters */}
          <h3>Top Ranked</h3>
          {/* Top ranked filters */}
        </div>
      </div>
    </>
  );
};

export default Menu;
