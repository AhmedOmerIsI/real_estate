import { useRef } from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Mail from "./components/Mail/Mail";
import SellingToUs from "./components/SellingToUs/SellingToUs";
import SaleDetails from "./components/SaleDetails/SaleDetails";
import Values from "./components/Values/Values";
import Footer from "./components/Footer/Footer";

function App() {
  const mailInputRef = useRef(null);

  const highlightMailInput = () => {
    setTimeout(() => {
      if (mailInputRef.current) {
        mailInputRef.current.focus();
      }
    }, 500);
  };

  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <img src="/logo.jpeg" alt="Company Logo" className="logo" />
        <Header highlightMailInput={highlightMailInput} />
        <div className="page-container">
          <Hero />
          <div id="mail" className="page-container">
            <Mail mailInputRef={mailInputRef} />
          </div>
        </div>
        <div id="howItWorks">
          <HowItWorks />
        </div>
        <SaleDetails />
        <div id="benefits">
          <SellingToUs />
        </div>
        <div id="values">
          <Values />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
