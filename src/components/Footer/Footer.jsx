import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className="section-padding">
      <div className="top-footer">
        <Link to="/">
          <div className="logo">
            <p>
              KnowCrypto<span>.</span>
            </p>
          </div>
        </Link>
      </div>

      <div className="social-icons">
        <div className="icon">
          <a href="https://github.com/HarshaVardhanRajuK" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <span className="tooltip">Github</span>
        </div>

        <div className="icon">
          <a
            href="https://www.linkedin.com/in/harsha-vardhan-raju-kondapalli-a7509a183/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <span className="tooltip">Linkedin</span>
        </div>

        <div className="icon">
          <a href="" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <span className="tooltip">Instagram</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
