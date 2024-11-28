import React from "react";
import { MdCall, MdMail } from "react-icons/md";

import "./Contact.css";

const Contact = () => {
  return (
    <section className="c-wrapper" id="#contact">
      <div className="paddings innerWidth flexCenter c-container">
        <div className="c-left">
          <div className="image-container">
            <img src="./contact.jpg" alt="Contact" />
          </div>
        </div>
        <div className="flexColStart c-right">
          <span className="primaryText">Contact Us</span>
          <div className="flexColStart contactModes">
            <div className="flexStart row">
              <div className="flexColStart mode">
                <div className="flexCenter icon">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">numberPlaceholder</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>

              <div className="flexColStart mode">
                <div className="flexCenter icon">
                  <div className="flexCenter icon">
                    <MdMail size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Email</span>
                    <span className="secondaryText">Chat With Us</span>
                  </div>
                </div>
                <div className="flexCenter button">Mail Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
