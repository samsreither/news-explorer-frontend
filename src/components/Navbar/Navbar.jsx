import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
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
        <Link to="#" className="navbar_signin">
          Sign In
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
