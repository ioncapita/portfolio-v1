import React from "react";
import {
  AboutContainer,
  Image,
  Question,
  Hello,
  AboutMeContainer,
  AboutMeText,
  Name,
  Description,
} from "./AboutElements";
import aboutsvg from "../animations/about-me.svg";

const About = () => {
  return (
    <AboutContainer>
      <Question>Who am I?</Question>
      <AboutMeContainer>
        <Image src={aboutsvg} alt="about-me-img" />
        <AboutMeText>
          <Hello>Hello. This is</Hello>
          <Name>Ion Capita</Name>
          <Description>
            a male of moldavian descent but raised in Portugal, who once
            happened to click on 'View Source' of a webpage with genuine
            curiosity, and now is a Full-Stack Web Developer.
          </Description>
        </AboutMeText>
      </AboutMeContainer>
    </AboutContainer>
  );
};

export default About;
