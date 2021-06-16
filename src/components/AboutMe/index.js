import React from "react";
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

const About = () => {
  return (
    <BG id="about">
      <Position>
        <AboutContainer>
          <Question>
            <Hashtag>#</Hashtag>about
          </Question>
          <AboutMeContainer>
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
      </Position>
    </BG>
  );
};

export default About;
