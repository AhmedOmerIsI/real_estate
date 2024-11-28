import React from "react";
import { FaPhone, FaHome, FaMoneyBillWave } from "react-icons/fa";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2 className="how-it-works-heading">How It Works</h2>
      <h3 className="how-it-works-subtitle">
        Sell your property in just 3 simple stages
      </h3>
      <div className="stages-container">
        <div className="stage">
          <h4>STAGE 1</h4>
          <FaPhone className="stage-icon" />
          <p>Contact Us for a quick chat about your property.</p>
        </div>
        <div className="stage">
          <h4>STAGE 2</h4>
          <FaHome className="stage-icon" />
          <p>Get your offer based on a fair assessment of your property.</p>
        </div>
        <div className="stage">
          <h4>STAGE 3</h4>
          <FaMoneyBillWave className="stage-icon" />
          <p>Get your cash and enjoy a hassle-free sale!</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
