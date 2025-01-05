import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import ModalWithForm from "./components/ModalWithForm/ModalWithForm";
// import CurrentUserContext from "./contexts/CurrentUserContext";

function App() {
  // const [currentUser, setCurrentUser] = useState(null);
  const [activeModal, setActiveModal] = useState("");
  // state to hold the active modal and set active modal
  const handleOpenModal = () => {
    setActiveModal();
  };

  return (
    <Router>
      <div className="page">
        <div className="page__content">
          <Header />
          <main>What's Going on in the World?</main>
          <Footer />
        </div>
        <ModalWithForm activeModal={activeModal}>
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
          <button type="submit" className="modal__submit">
            Sign in
          </button>
        </ModalWithForm>
      </div>
    </Router>
  );
}

export default App;
