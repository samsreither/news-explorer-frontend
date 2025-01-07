import React, { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import NewsCardList from "./components/NewsCardList/NewsCardList";
import Footer from "./components/Footer/Footer";
import LoginModal from "./components/LoginModal/LoginModal";
import RegisterModal from "./components/RegisterModal/RegisterModal";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import ModalWithForm from "./components/ModalWithForm/ModalWithForm";
// import CurrentUserContext from "./contexts/CurrentUserContext";
import { API_KEY } from "./utils/constants";
import getNewsData from "./utils/NewsApi";

function App() {
  // const [currentUser, setCurrentUser] = useState(null);
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
  const [currentUser, setCurrentUser] = useState({});
  const [apiError, setApiError] = useState(null);
  const [selectedArticleId, setSelectedArticleId] = useState(null);

  // code to open and close modals
  const handleSignInClick = () => {
    setActiveModal('login');
    setIsActive(true);
  };

  const handleRegisterClick = () => {
    setActiveModal('register')
  };

  const closeModal = () => {
    setApiError(null);
    setIsActive(false);
    setTimeout(() => {
      setActiveModal(null);
    }, 250);
  };

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
    <Router>
      <div className="page">
        <div className="page__content">
          <div className="page__background">
            <Header handleSignInClick={handleSignInClick} />
            <Main
              searchBtnClick={searchBtnClick}
              isSearching={isSearching}
              newsApiError={newsApiError}
            />
          </div>
          {newsArticles && (
            <NewsCardList
              keyword={keyword}
              numberOfCards={numberOfCards}
              newsArticles={newsArticles}
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
    </Router>
  );
}

export default App;
