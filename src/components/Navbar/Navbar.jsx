import React, { useContext } from "react";
import { NavLink, useMatch } from "react-router-dom";
import "./Navbar.css";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Navbar({
  handleSignInClick,
  isLoggedIn,
  handleLogoutClick,
  handleHomeClick,
}) {
  const match = useMatch("/");
  const currentUser = useContext(CurrentUserContext);

  return (
    
    <nav className={isLoggedIn ? 'nav nav_loggedin' : 'nav nav_loggedout'}>
      <NavLink
        onClick={handleHomeClick}
        className={({ isActive }) =>
          match && isActive
            ? 'nav__link nav__link_path_main_active'
            : 'nav__link nav__link_path_saved-news'
        }
        to="/"
      >
        Home
      </NavLink>
      {isLoggedIn ? (
        <>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'nav__link nav__link_path_saved-news_active'
                : 'nav__link nav__link_path_main'
            }
            to="/saved-news"
          >
            Saved articles
          </NavLink>
          <NavLink className="nav__link" to="/">
            <button
              onClick={handleLogoutClick}
              className={
                match
                  ? 'nav__button nav__button_path_main nav__button_content_logout'
                  : 'nav__button nav__button_path_saved-news nav__button_content_logout'
              }
            >
              {currentUser.name} 
              {/* <img src={match ? logOutWhite : logOutBlack} alt="log out" /> */}
            </button>
          </NavLink>
        </>
      ) : (
        <>
          <button
            className="nav__button nav__button_path_main nav__button_content_signin"
            onClick={handleSignInClick}
          >
            Sign in
          </button>
        </>
      )}
      <button
        className={
          match
            ? 'nav__menu-button nav__menu-button_path_main'
            : 'nav__menu-button nav__menu-button_path_saved-news'
        }
        type="button"
      />
    </nav>
  );
}

export default Navbar;
