import React, { useEffect } from "react";
import {
  AboutContainer,
  Question,
  Hello,
  AboutMeContainer,
  AboutMeText,
  Name,
  Description,
  BG,
  Hashtag,
  Position,
} from "./AboutElements";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <BG id="about">
      <Position>
        <AboutContainer>
          <Question data-aos="flip-left">
            <Hashtag>#</Hashtag>about
          </Question>
          <AboutMeContainer>
            <AboutMeText>
              <Hello>Hello. This is</Hello>
              <Name data-aos="fade-right">Ion Capita</Name>
              <Description>
                a male of moldavian descent but raised in Portugal, who once
                happened to click on 'View Source' of a webpage with genuine
                curiosity, and now is a Full-Stack Web Developer.
              </Description>
            </AboutMeText>
          </AboutMeContainer>
        </AboutContainer>
      </Position>
    </BG>
  );
};

export default About;
