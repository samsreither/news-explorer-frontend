import React, { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import NewsCardList from "./components/NewsCardList/NewsCardList";
import Footer from "./components/Footer/Footer";
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

  const openLoginModal = () => setActiveModal("login");
  const closeModal = () => setActiveModal("");

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
            <Header openLoginModal={openLoginModal} />
            <Main searchBtnClick={searchBtnClick} isSearching={isSearching} newsApiError={newsApiError} />
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
        <ModalWithForm activeModal={activeModal} closeModal={closeModal}>
          <label htmlFor="email" className="modal__label">
            Email{" "}
            <input
              type="text"
              className="modal__input"
              id="email"
              placeholder="Email"
            />
          </label>
          <label htmlFor="password" className="modal__label">
            Password{" "}
            <input
              type="text"
              className="modal__input"
              id="password"
              placeholder="Password"
            />
          </label>
        </ModalWithForm>
      </div>
    </Router>
  );
}

export default App;
