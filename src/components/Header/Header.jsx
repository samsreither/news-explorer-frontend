import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

function Header({ openLoginModal }) {
  return (
    <header className="header">
      <Link className="header__link" to="/">
        <p className="header__logo">NewsExplorer</p>
      </Link>
      <Navbar openLoginModal={openLoginModal} />
    </header>
  );
}

export default Header;
