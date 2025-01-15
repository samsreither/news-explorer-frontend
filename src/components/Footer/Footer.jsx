import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import linkedinLogo from '../../assets/linkedin.svg';
import githubLogo from '../../assets/github.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__paragraph">2024 // Sam Reither // NewsExplorer</div>
        <div className="footer__social-content">
          <ul className="footer__list">
            <li className="footer__list-item footer__list-item_home">
              <Link className="footer__list-link" to="/">Home</Link>
            </li>
            <li className="footer__list-item footer__list-item_github">
              <a href="https://github.com/samsreither" className="footer__list-social-link">
                <img src={githubLogo} alt="github logo" className="footer__list-logo" />
              </a>
            </li>
            <li className="footer__list-item footer__list-item_linkedin">
              <a href="https://www.linkedin.com/in/samreither/" className="footer__list-social-link">
                <img src={linkedinLogo} alt="linkedin logo" className="footer__list-logo" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
