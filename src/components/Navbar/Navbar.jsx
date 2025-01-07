import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar({ handleSignInClick }) {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav__link nav__home">
        Home
      </NavLink>
      <NavLink to="/" className="nav__link">
        <button
          type="button"
          onClick={handleSignInClick}
          className="nav__button_signin"
        >
          Sign In
        </button>
      </NavLink>
    </nav>
  );
}

export default Navbar;
