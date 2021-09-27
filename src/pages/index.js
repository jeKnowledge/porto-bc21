import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import MainContainer from "../components/MainContainer";
import DateSection from "../components/Date";
import InfoSection from "../components/infoSection";
import { homeObjOne, homeObjTwo } from "../components/infoSection/data";
import FAQsSection from "../components/FAQs";
import TeamSection from "../components/Team";
import SubsSection from "../components/Subscribe";
import FooterSection from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen); //false-true-true-false
  };

  return (
    <>
      {/* it accepts toggle */}
      <MainContainer />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <DateSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <TeamSection />
      <FAQsSection />
      {/* <SubsSection /> */}
      <FooterSection />
    </>
  );
};

export default Home;
