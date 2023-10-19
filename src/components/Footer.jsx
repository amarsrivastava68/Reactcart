import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import "../styles//Footer.scss"; // Import your SCSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <h3>Shop with ease</h3>
        </div>
        <div className="social-links">
          <a
            href="https://www.facebook.com"
            className="social-link facebook-icon"
          >
            <FiFacebook />
          </a>
          <a
            href="https://www.twitter.com"
            className="social-link twitter-icon"
          >
            <FiTwitter />
          </a>
          <a
            href="https://www.instagram.com"
            className="social-link instagram-icon"
          >
            <FiInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
