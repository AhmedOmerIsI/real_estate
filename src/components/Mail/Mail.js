import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Mail.css";

function Mail({ mailInputRef }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_email: "Usmanamanullahkhan@gmail.com",
      to_name: "Usman",
    };

    emailjs
      .send(
        "service_5s6i8dt",
        "template_5szgn4w",
        templateParams,
        "8Ug4IEpPnV-R1K_N4"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          // Show success toast
          toast.success(
            "Message sent successfully! We'll get in touch shortly.",
            {
              position: "top-center", // Correct way to specify position
              autoClose: 3000,
              closeOnClick: true,
            }
          );
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          // Show error toast
          toast.error("Failed to send message. Please try again.", {
            position: "top-center",
            autoClose: 3000,
            closeOnClick: true,
          });
        }
      );

    // Clear form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="mail-page" id="mail">
      <ToastContainer />
      <div className="mail-container">
        <span className="orangeText mail-title">Contact an Agent</span>
        <form className="mail-form flexColCenter" onSubmit={sendEmail}>
          <input
            ref={mailInputRef}
            type="text"
            className="mail-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
            aria-label="Your Name"
          />
          <input
            type="email"
            className="mail-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
            aria-label="Your Email"
          />
          <textarea
            className="mail-textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            required
            aria-label="Your Message"
          />
          <button
            className="button mail-button"
            type="submit"
            aria-label="Send Mail"
          >
            Send Mail
          </button>
        </form>
      </div>
    </section>
  );
}

export default Mail;
