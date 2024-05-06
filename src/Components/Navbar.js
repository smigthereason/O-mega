import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">My Game Library</div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <a href="/" className="navbar-item">Home</a>
          <a href="/about" className="navbar-item">About</a>
          {/* Add more navbar items as needed */}
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button className="button is-primary">Sign up</button>
              <button className="button is-light">Log in</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
