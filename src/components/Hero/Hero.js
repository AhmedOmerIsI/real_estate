import React from "react";
import "./Hero.css";
import { FaCheck } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className=" flexCenter hero-container ">
        <div className="primaryText heading">GIVE US A CALL</div>
        <div className="orangeText subtitle">Phone number placeholder</div>
      </div>
      <div className="image-background">
        <div className="transparent-field">
          <h2 className="headingText">GET YOUR WRITTEN OFFER TODAY!</h2>
          <ul className="bulletPoints">
            <li>
              <FaCheck className="checkmark" />{" "}
              <strong>No Agent Commissions:</strong> Keep more money in your
              pocket by skipping agent fees.
            </li>
            <li>
              <FaCheck className="checkmark" /> <strong>No Hidden Fees:</strong>{" "}
              We ensure complete transparency with no unexpected costs.
            </li>
            <li>
              <FaCheck className="checkmark" />{" "}
              <strong>Zero Closing Costs:</strong> We cover all the closing
              costs, so you don’t have to.
            </li>
            <li>
              <FaCheck className="checkmark" />{" "}
              <strong>Quick Sale Process:</strong> Close the deal fast and move
              on with your life.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
