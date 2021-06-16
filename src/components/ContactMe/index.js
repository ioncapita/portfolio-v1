import React from "react";
import styled from "styled-components";

import {
  ContactContainer,
  ConnectContainer,
  QuoteContainer,
  Quote,
  ListIcons,
  Title,
  WithMeContainer,
  Intro,
  WorkContainer,
  Content,
  WorkTitle,
  Description,
  Position,
} from "./ContactElements";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";
import { EmailOutline } from "@styled-icons/evaicons-outline/EmailOutline";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { CodeAlt } from "@styled-icons/boxicons-regular/CodeAlt";
import { Book } from "@styled-icons/bootstrap/Book";
import { People } from "@styled-icons/bootstrap/People";

const Link = styled(Linkedin)`
  width: 60px;
  border-style: solid;
  border-radius: 10px;
  border-width: 2px;
  margin: 10px;
  padding: 10px;
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
  width: 60px;
  border-style: solid;
  border-radius: 10px;
  border-width: 2px;
  margin: 10px;
  padding: 10px;
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
  width: 60px;
  border-style: solid;
  border-radius: 10px;
  border-width: 2px;
  margin: 10px;
  padding: 10px;
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
  width: 60px;
  border-style: solid;
  border-radius: 10px;
  border-width: 2px;
  margin: 10px;
  padding: 10px;
  background: var(--bg);
  color: var(--first-color);
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background: var(--first-color);
    color: var(--second-color);
  }
`;

const Code = styled(CodeAlt)`
  width: 90px;
  color: var(--first-color);
  margin: 1rem 0 1rem 0;
  transition: 0.5s;
`;

const BookIcon = styled(Book)`
  width: 80px;
  color: var(--first-color);
  margin: 1rem 0 1rem 0;

  transition: 0.5s;
`;
const PeopleIcon = styled(People)`
  width: 80px;
  color: var(--first-color);
  margin: 1rem 0 1rem 0;

  transition: 0.5s;
`;

const Contact = () => {
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
  return (
    <ContactContainer id="contact">
      <ConnectContainer>
        <QuoteContainer>
          <Title> Connect with me:</Title>
          <Quote>Want to get in touch?</Quote>
        </QuoteContainer>
        <ListIcons>
          <Email onClick={sendMail} />
          <Link onClick={openLinkedin} />
          <Git onClick={openGithub} />
          <Insta onClick={openInstagram} />
        </ListIcons>
      </ConnectContainer>
      <WithMeContainer>
        <Intro>
          <Title>Why work with me?</Title>
          <Quote>
            There are many advantages to working with me. Here are a few:
          </Quote>
        </Intro>
      </WithMeContainer>
      <Position>
        <WorkContainer>
          <Content>
            <Code />
            <WorkTitle>Passionate about development</WorkTitle>
            <Description>
              Big believer in the fact that the greatest work is done by
              passionate people.
            </Description>
          </Content>
          <Content>
            <BookIcon />
            <WorkTitle>Quick learner</WorkTitle>
            <Description>
              Confident in my ability to learn something new and put it into
              production. The three key ingredients to become a quick learner
              for me, are: Curiosity, Reflection and Comprehension.
            </Description>
          </Content>
          <Content>
            <PeopleIcon />
            <WorkTitle>Adaptable</WorkTitle>
            <Description>
              Always excited to learn new things. The most valuable thing I can
              provide to your company is the ability to be molded to your stack.
            </Description>
          </Content>
        </WorkContainer>
      </Position>
    </ContactContainer>
  );
};

export default Contact;
