import React, { useEffect } from "react";
import styles from "./HeroSection.module.css";
import Particles from "react-particles-js";
import styled from "styled-components";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";
import { EmailOutline } from "@styled-icons/evaicons-outline/EmailOutline";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import Aos from "aos";
import "aos/dist/aos.css";

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

  @media screen and (max-width: 531px) {
    width: 50px;
    padding: 5px;
    margin: 15px;
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

  @media screen and (max-width: 531px) {
    width: 50px;
    padding: 5px;
    margin: 15px 15px 15px 0;
  }
`;
const Email = styled(EmailOutline)`
  width: 60px;
  border-style: solid;
  border-radius: 10px;
  border-width: 2px;
  margin: 10px 10px 10px 0;
  padding: 10px;
  background: var(--bg);
  color: var(--first-color);
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background: var(--first-color);
    color: var(--second-color);
  }

  @media screen and (max-width: 531px) {
    width: 50px;
    padding: 5px;
    margin: 15px 0 15px 0;
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

  @media screen and (max-width: 531px) {
    width: 50px;
    padding: 5px;
    margin: 15px 0 15px 0;
  }
`;

const ListIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: flex-end;
  margin-top: 20px;
`;

export default function HeroSection() {
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

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div id="top" className={styles.container}>
      <Particles className={styles.particles}></Particles>
      <div className={styles.elements}>
        <div className={styles.text_position}>
          <h1 className={styles.hello} data-aos="fade-down">
            Hi,
          </h1>
          <h2
            className={styles.name}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            I&rsquo;m <span class={styles.firstLetter}>I</span>on,
          </h2>
          <p
            className={styles.intro}
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            a full-stack web developer.
          </p>

          <a
            className={styles.resume}
            data-aos="zoom-in"
            data-aos-duration="2000"
            href="/Ion_Capita_CV_EN.pdf"
            download
          >
            Download Resume
          </a>
          <ListIcons>
            <Email
              data-aos="fade-up"
              data-aos-duration="500"
              onClick={sendMail}
            />
            <Link
              data-aos="fade-up"
              data-aos-duration="1000"
              onClick={openLinkedin}
            />
            <Git
              data-aos="fade-up"
              data-aos-duration="2000"
              onClick={openGithub}
            />
            <Insta
              data-aos="fade-up"
              data-aos-duration="3000"
              onClick={openInstagram}
            />
          </ListIcons>
        </div>
      </div>
    </div>
  );
}
