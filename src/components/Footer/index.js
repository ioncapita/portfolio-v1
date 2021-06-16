import React from "react";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  LeftContainer,
  Name,
  Quote,
  ListIcons,
  RightContainer,
  Address,
  EmailText,
  Copyright,
} from "./FooterElements";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";
import { EmailOutline } from "@styled-icons/evaicons-outline/EmailOutline";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { UpArrowCircle } from "@styled-icons/boxicons-regular/UpArrowCircle";

const ToggleUp = styled(UpArrowCircle)`
  width: 60px;
  height: 60px;
  color: var(--first-color);
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    color: var(--second-color);
  }
`;

const Link = styled(Linkedin)`
  width: 30px;
  border-style: solid;
  border-radius: 10px;
  border-width: 2px;
  margin: 5px;
  padding: 5px;
  background: var(--bg);
  color: var(--first-color);
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background: var(--first-color);
    color: var(--second-color);
  }
`;
const Git = styled(Github)`
  width: 30px;
  border-style: solid;
  border-radius: 10px;
  border-width: 2px;
  margin: 5px;
  padding: 5px;
  background: var(--bg);
  color: var(--first-color);
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background: var(--first-color);
    color: var(--second-color);
  }
`;
const Email = styled(EmailOutline)`
  width: 30px;
  border-style: solid;
  border-radius: 10px;
  border-width: 2px;
  margin: 5px;
  padding: 5px;
  background: var(--bg);
  color: var(--first-color);
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background: var(--first-color);
    color: var(--second-color);
  }
`;

const Insta = styled(Instagram)`
  width: 30px;
  border-style: solid;
  border-radius: 10px;
  border-width: 2px;
  margin: 5px;
  padding: 5px;
  background: var(--bg);
  color: var(--first-color);
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background: var(--first-color);
    color: var(--second-color);
  }
`;

const Footer = () => {
  const sendMail = () => {
    const mailto =
      "mailto:yonelcapita@gmail.com?subject=Dont forget to write a subject :)&body=Hey Ion,";
    window.location.href = mailto;
  };

  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/ion-capita/");
  };
  const openGithub = () => {
    window.open("https://github.com/ioncapita");
  };
  const openInstagram = () => {
    window.open("https://www.instagram.com/yonelcapita/");
  };
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <LeftContainer>
        <Name>
          Ion Capita
          <Quote>full stack developer</Quote>
          <ListIcons>
            <Email onClick={sendMail} />
            <Link onClick={openLinkedin} />
            <Git onClick={openGithub} />
            <Insta onClick={openInstagram} />
          </ListIcons>
        </Name>
      </LeftContainer>
      <ToggleUp onClick={toggleHome} />
      <RightContainer>
        <Address>Porto, Portugal</Address>
        <EmailText>yonelcapita@gmail.com</EmailText>
        <Copyright>Copyright &copy; 2021</Copyright>
      </RightContainer>
    </FooterContainer>
  );
};

export default Footer;
