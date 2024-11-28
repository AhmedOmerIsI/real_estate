import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src="/logo.jpeg" alt="Company Logo" className="footer-logo" />
        <p className="footer-text">
          We provide tailored real estate solutions to help homeowners sell
          their houses quickly and efficiently. As experienced investors and
          problem solvers, we ensure a fair, all-cash offer to make the process
          seamless for you.
        </p>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Regal Property Partners. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
