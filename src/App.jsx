import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
// import CurrentUserContext from "./contexts/CurrentUserContext";

function App() {
  // const [currentUser, setCurrentUser] = useState(null);

  return (
    <Router>
      <div className="page">
        <div className="page__content">
          <Header />
          <main>What's Going on in the World?</main>
          <Footer />
        </div>
    </div>
    </Router>
  );
}

export default App;
