import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import ReferralModal from "./components/ReferralModal";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <Navbar />
      <HeroSection toggleModal={toggleModal} />
      <HowItWorks toggleModal={toggleModal} />
      <Benefits toggleModal={toggleModal} />
      <Faq toggleModal={toggleModal} />
      <Footer />

      {isModalOpen && <ReferralModal toggleModal={toggleModal} />}
    </div>
  );
};

export default App;
