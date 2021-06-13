import React from "react";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/index";
import HeroSection from "../Hero/index";
import About from "../AboutMe";
import Skills from "../Skills";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <About />
      <Skills />
    </>
  );
};

export default Home;
