import React from "react";
import "./SellingToUs.css"; // Create a separate CSS file for styling

const SellingToUs = () => {
  return (
    <section className="comparison-section">
      <h2 className="comparison-title">Advantages of Selling to Us</h2>
      <p className="comparison-description">
        Although working with a local real estate agent might result in a higher
        "top line" sale price, it doesn’t always guarantee more net earnings or
        a hassle-free process. Check out the comparison below to explore your
        choices more clearly.
      </p>
      <table className="comparison-table">
        <thead>
          <tr>
            <th></th>
            <th>Traditional Approach</th>
            <th>Selling with Regal Property Partners</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Commissions / Fees:</td>
            <td>
              Sellers pay a 6% commission along with at least 2% in closing
              expenses.
            </td>
            <td>
              Zero commissions or fees, ensuring maximum cash in your pocket.
            </td>
          </tr>
          <tr>
            <td>Closing Costs:</td>
            <td>Typically, sellers bear around 2% in closing expenses.</td>
            <td>
              All closing costs are covered, saving you additional outlays.
            </td>
          </tr>
          <tr>
            <td>Repair Costs:</td>
            <td>Sellers must handle all repair expenses.</td>
            <td>We take care of repairs, sparing you any extra costs.</td>
          </tr>
          <tr>
            <td>Closing Date:</td>
            <td>
              Usually occurs 45-60+ days after the buyer’s offer is accepted.
            </td>
            <td>
              You have the flexibility to choose the closing date that fits your
              schedule.
            </td>
          </tr>
          <tr>
            <td>Cash Up Front Before Closing:</td>
            <td>
              Sellers do not receive any cash before the sale is finalized.
            </td>
            <td>Receive a cash advance prior to completing the sale.</td>
          </tr>
          <tr>
            <td>Time to Move Out After Closing:</td>
            <td>Immediate move-out is required after closing.</td>
            <td>We offer flexible move-out options tailored to your needs.</td>
          </tr>
          <tr>
            <td>Mortgage Financing and Appraisal:</td>
            <td>
              Sellers usually incur about 2% in fees for financing and
              appraisals.
            </td>
            <td>No costs for financing or appraisal—everything is included.</td>
          </tr>
          <tr>
            <td>Handling Tenant Issues:</td>
            <td>
              Managing tenant-related matters is the seller’s responsibility.
            </td>
            <td>We manage all tenant concerns on your behalf.</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default SellingToUs;
