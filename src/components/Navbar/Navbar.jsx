import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ handleOpenModal }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="#" className="navbar_logo">
          NewsExplorer
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="#" className="navbar_home">
          Home
        </Link>
        <button type="button" onClick={handleOpenModal} className="navbar_signin">
          Sign In
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
