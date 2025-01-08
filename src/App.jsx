import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import NewsCardList from "./components/NewsCardList/NewsCardList";
import Footer from "./components/Footer/Footer";
import LoginModal from "./components/LoginModal/LoginModal";
import RegisterModal from "./components/RegisterModal/RegisterModal";
import "./App.css";
import { auth } from './utils/auth'
import { CurrentUserContext } from "./contexts/CurrentUserContext";
import { API_KEY } from "./utils/constants";
import getNewsData from "./utils/NewsApi";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import SavedNews from "./components/SavedNews/SavedNews";
import Preloader from "./components/Preloader/Preloader";

function App() {
  const [activeModal, setActiveModal] = useState("");
  // state to hold the active modal and set active modal
  const [isActive, setIsActive] = useState(false);
  const [newsArticles, setNewsArticles] = useState(null); // state to hold the articles
  const [keyword, setKeyword] = useState(null); // intentionally absent at the start
  const [numberOfCards, setNumberOfCards] = useState(3); // why 3?? maybe 6??
  const [isSearching, setIsSearching] = useState(false);
  const [nothingFound, setNothingFound] = useState(false);
  const [savedNewsArticles, setSavedNewsArticles] = useState([]);
  const [newsApiError, setNewsApiError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckingToken, setIsCheckingToken] = useState(true);
  const [currentUser, setCurrentUser] = useState({}); // state to hold current user
  const [apiError, setApiError] = useState(null);
  const [selectedArticleId, setSelectedArticleId] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // code to open and close modals
  const handleSignInClick = () => {
    setActiveModal("login");
    setIsActive(true);
  };

  const handleRegisterClick = () => {
    setActiveModal("register");
  };

  const closeModal = () => {
    setApiError(null);
    setIsActive(false);
    setTimeout(() => {
      setActiveModal(null);
    }, 250);
  };

  // handle logging in
  const handleUserLogin = (inputValues) => {
    setIsLoading(true);
    auth.login(inputValues)
    .then((data) => {
      if (data.token) {
        localStorage.setItem('jwt', data.token);
        getUserArticles(data.token);
        closeModal();
      }
    })
    .catch((err) => {
      if (err.includes('401') || err.includes('400')) {
        setApiError('Incorrect email or password')
      }
      console.log(err);
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  // handle deleting articles
  const handleDeleteArticle = () => {
    setIsLoading(true);
    api
      .deleteArticle(selectedArticleId, token)
      .then(() => {
        const updatedSavedArticles = savedNewsArticles.filter(
          (article) => article._id !== selectedArticleId
        );
        setSavedNewsArticles([...updatedSavedArticles]);
        setSelectedArticleId(null);
        closeModal();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  // buttons (not api)
  const handleDeleteButtonClick = (articleId) => {
    setActiveModal('delete');
    setSelectedArticleId(articleId);
  };

  const handleSeeMoreClick = () => {
    setNumberOfCards(numberOfCards + 3);
  }

  // handles search button click
  const searchBtnClick = (data) => {
    const keyword = data.charAt(0).toUpperCase() + data.slice(1);
    setNumberOfCards(3);
    setKeyword(keyword);
    setNewsArticles(null); // set back to nothing when searching
    setNothingFound(false); // will return true if nothing is found eventually
    setIsSearching(true);
    getNewsData({ apiKey: API_KEY, keyword })
      .then((data) => {
        if (data.articles.length === 0) {
          setNothingFound(true);
        } else {
          const articles = data.articles.map(
            (article) => (article = { ...article, _id: Math.random() }) // add random id to each article
          );
          setNewsArticles(articles);
          setIsSearching(false);
          localStorage.setItem("articles", JSON.stringify(articles)); // save in browser storage so persists even if page reloads
          localStorage.setItem("keyword", keyword); // save search term in local storage
        }
      })
      .catch((err) => {
        console.log(err);
        setNewsApiError(err);
        setIsSearching(false);
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__content">
          <div className="page__background">
            <Header handleSignInClick={handleSignInClick} />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    searchBtnClick={searchBtnClick}
                    isSearching={isSearching}
                    newsApiError={newsApiError}
                    setActiveModal={setActiveModal}
                  />
                }
              ></Route>
              <Route
                path="/saved-news"
                element={
                  <ProtectedRoute
                    isLoggedIn={isLoggedIn}
                    setActiveModal={setActiveModal}
                    isCheckingToken={isCheckingToken}
                    setIsActive={setIsActive}
                  >
                    <SavedNews
                      handleDeleteButtonClick={handleDeleteButtonClick}
                      isLoggedIn={isLoggedIn}
                      newsArticles={newsArticles}
                      handleSignInClick={handleSignInClick}
                    />
                  </ProtectedRoute>
                }
              ></Route>
              <Route path="/profile" element={<Navigate to="/" />} />
            </Routes>
          </div>
          {isSearching && (
            <Preloader isSearching={isSearching} nothingFound={nothingFound} />
          )}
          {newsArticles && (
            <NewsCardList
              keyword={keyword}
              numberOfCards={numberOfCards}
              newsArticles={newsArticles}
              handleSeeMoreClick={handleSeeMoreClick}
              handleDeleteArticle={handleDeleteArticle}
            />
          )}
          <About />
          <Footer />
        </div>
        {/* Rendering of Modals  */}
        {activeModal === "login" && (
          // render login modal
          <LoginModal
            activeModal={activeModal}
            isActive={isActive}
            apiError={apiError}
            isLoading={isLoading}
            closeModal={closeModal}
            handleRegisterClick={handleRegisterClick}
            handleUserLogin={handleUserLogin}
          />
        )}
        {activeModal === "register" && (
          // render register modal
          <RegisterModal
            activeModal={activeModal}
            apiError={apiError}
            isActive={isActive}
            isLoading={isLoading}
            closeModal={closeModal}
            handleLoginClick={handleSignInClick}
          />
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
