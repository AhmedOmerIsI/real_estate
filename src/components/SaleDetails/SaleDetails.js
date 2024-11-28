import React from "react";
import {
  FaTools,
  FaFileSignature,
  FaCalendarCheck,
  FaDollarSign,
  FaTimesCircle,
  FaHome,
} from "react-icons/fa";
import "./SaleDetails.css";

const SaleDetails = () => {
  return (
    <section className="sale-details">
      <h2 className="sale-details-heading">
        You're in Total Control of the Sale
      </h2>
      <h3 className="sale-details-subtitle">
        Sell your property on your terms and skip the lengthy process
      </h3>
      <div className="details-container">
        <div className="detail">
          <FaHome className="detail-icon" />
          <h4>Sell Your Property “As Is”</h4>
          <p>
            We purchase properties "As Is," so no repairs or updates are
            required!
          </p>
        </div>
        <div className="detail">
          <FaTools className="detail-icon" />
          <h4>Straightforward Sales Process</h4>
          <p>Our simple sales process takes the stress out of selling.</p>
        </div>
        <div className="detail">
          <FaCalendarCheck className="detail-icon" />
          <h4>Choose Your Closing Date</h4>
          <p>
            Sell immediately or wait a few months—it's all on your schedule.
          </p>
        </div>
        <div className="detail">
          <FaDollarSign className="detail-icon" />
          <h4>Competitive Cash Offer</h4>
          <p>
            Receive a free, no-obligation cash offer that aligns with your
            needs!
          </p>
        </div>
        <div className="detail">
          <FaTimesCircle className="detail-icon" />
          <h4>No Agent Commissions or Fees</h4>
          <p>We eliminate middlemen, meaning no hidden fees or commissions!</p>
        </div>
        <div className="detail">
          <FaCalendarCheck className="detail-icon" />
          <h4>You Decide When to Move Out</h4>
          <p>
            If you need extra time after closing, we can accommodate your needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SaleDetails;
