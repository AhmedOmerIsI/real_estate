import React from "react";

import "./Header.css";

const Header = ({ highlightMailInput }) => {
  return (
    <section className="h-wrapper">
      <div className=" paddings innerWidth h-container">
        <div className="flexCenter h-menu">
          <a href="#benefits">Benfits</a>
          <a href="#values">Our Values</a>
          <a href="#mail" onClick={highlightMailInput}>
            Contact Us
          </a>
          <a href="#howItWorks">Get Started</a>
        </div>
      </div>
    </section>
  );
};

export default Header;
