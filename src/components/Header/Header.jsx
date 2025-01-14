import React from "react";
import { Link, useMatch } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

function Header({
  handleSignInClick,
  handleLogoutClick,
  isLoggedIn,
  handleHomeClick,
}) {
  const match = useMatch("/");

  return (
    <header className="header">
      <Link className="header__link" to="/">
        <p
          className={
            match
              ? "header__logo header__logo_path_main"
              : "header__logo header__logo_path_saved-news"
          }
          onClick={handleHomeClick}
        >
          NewsExplorer
        </p>
      </Link>
      <Navbar handleHomeClick={handleHomeClick} isLoggedIn={isLoggedIn} handleSignInClick={handleSignInClick} handleLogoutClick={handleLogoutClick} />
    </header>
  );
}

export default Header;
