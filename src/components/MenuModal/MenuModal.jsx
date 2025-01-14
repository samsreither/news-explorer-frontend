import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuModal.css';
import { useEscape } from '../../hooks/useEscape';
// import logOut from '../../images/logout-white.svg';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function MenuModal({
  closeModal,
  isActive,
  handleSigninClick,
  isLoggedIn,
  handleLogoutClick,
  handleHomeClick,
  handleSavedArticlesClick,
}) {
  useEscape(handleCloseModal);
  const currentUser = React.useContext(CurrentUserContext);

  const handleClickOutsideClose = (evt) => {
    if (evt.target.classList.contains('modal')) {
      handleCloseModal();
    }
  };

  if (isActive) {
    setTimeout(() => {
      document.querySelector('.modal').classList.add('modal_opened');
    }, 10);
  }

  function handleCloseModal() {
    setTimeout(() => {
      closeModal();
    }, 250);
    document.querySelector('.modal').classList.remove('modal_opened');
  }

  return (
    <div className="modal menu-modal" onClick={handleClickOutsideClose}>
      <div className="menu-modal__container">
        <header className="menu-modal__header">
          <p className="header__logo" onClick={handleHomeClick}>
            NewsExplorer
          </p>
          <button
            className="menu-modal__button"
            type="button"
            onClick={handleCloseModal}
          />
        </header>
        <nav
          className={
            isLoggedIn
              ? 'menu-modal__nav menu-modal__nav_loggedin'
              : 'menu-modal__nav menu-modal__nav_loggedout'
          }
        >
          <NavLink
            onClick={handleHomeClick}
            className="menu-modal__nav-link menu-modal__nav-link_content_home"
            to="/"
          >
            Home
          </NavLink>
          {isLoggedIn && (
            <NavLink
              className="menu-modal__nav-link menu-modal__nav-link_content_saved-articles"
              to="/saved-news"
              onClick={closeModal}
            >
              Saved articles
            </NavLink>
          )}
        </nav>
        {isLoggedIn ? (
          <button
            className="menu-modal__nav-button"
            type="button"
            onClick={handleLogoutClick}
          >
            {currentUser.name}
            <img src={logOut} alt="logout" />
          </button>
        ) : (
          <button
            className="menu-modal__nav-button"
            type="button"
            onClick={handleSigninClick}
          >
            Sign in
          </button>
        )}
      </div>
    </div>
  );
}

export default MenuModal;