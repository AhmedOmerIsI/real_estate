import React from "react";
import {
  FaLightbulb,
  FaShieldAlt,
  FaThumbsUp,
  FaComments,
  FaPray,
  FaHands,
} from "react-icons/fa"; // Updated icons
import "./Values.css"; // Create a separate CSS file for styling

const Values = () => {
  return (
    <section className="values-section">
      <h2 className="values-title">Our Values</h2>
      <div className="values-list">
        <div className="value-item">
          <FaLightbulb className="value-icon" />{" "}
          {/* Icon for Solution-Oriented */}
          <h3>Resourcefulness</h3>
          <p>
            Every challenge has a solution. We aim to provide answers and foster
            a win-win situation.
          </p>
        </div>
        <div className="value-item">
          <FaShieldAlt className="value-icon" />
          <h3>Moral</h3>
          <p>
            We prioritize people over profits, consistently striving to do
            what’s right, without exceptions.
          </p>
        </div>
        <div className="value-item">
          <FaThumbsUp className="value-icon" />{" "}
          {/* Icon for Positive Attitude */}
          <h3>Positivity</h3>
          <p>
            A positive mindset enables us to assist homeowners and achieve
            favorable outcomes for everyone.
          </p>
        </div>
        <div className="value-item">
          <FaComments className="value-icon" />
          <h3>Consistent Disclosure</h3>
          <p>
            We prioritize the homeowner by maintaining open communication
            throughout the entire process, aligning with their timeline.
          </p>
        </div>
        <div className="value-item">
          <FaPray className="value-icon" />
          <h3>Faith</h3>
          <p>
            Trusting in a Higher Power to guide us in helping others
            effectively.
          </p>
        </div>
        <div className="value-item">
          <FaHands className="value-icon" />{" "}
          {/* Icon for Respectful Listening */}
          <h3>Respectful Listening</h3>
          <p>Listening with empathy and care, valuing others’ perspectives.</p>
        </div>
      </div>
    </section>
  );
};

export default Values;
