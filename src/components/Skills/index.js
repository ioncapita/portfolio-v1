import React, { useEffect } from "react";
import { useSpring } from "react-spring";
import {
  SkillsContainer,
  SkillsContent,
  Frontend,
  Backend,
  Tools,
  Title,
  Image,
  ListItem,
  ImageSkills,
  TitleContent,
  QuoteContent,
  TitleContainer,
  AlignedItem,
  Hashtag,
} from "./SkillsElements";

import frontend from "../animations/front-end.svg";
import backend from "../animations/backend.svg";
import tools from "../animations/engineering.svg";
import html from "../animations/html5.svg";
import css from "../animations/css.svg";
import sass from "../animations/sass.svg";
import js from "../animations/javascript.svg";
import react from "../animations/react.svg";
import angular from "../animations/angular-icon.svg";
import typescript from "../animations/typescript.svg";
import php from "../animations/php.svg";
import laravel from "../animations/laravel.svg";
import node from "../animations/nodejs.svg";
import mysql from "../animations/mysql.svg";
import mongo from "../animations/mongodb.svg";
import git from "../animations/github.svg";
import vscode from "../animations/visual-studio-code.svg";
import postman from "../animations/postman.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 200, friction: 50 },
  }));
  useEffect(() => {
    Aos.init();
  }, []);
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  return (
    <SkillsContainer id="skills">
      <SkillsContent>
        <TitleContainer>
          <TitleContent data-aos="flip-left">
            <Hashtag>#</Hashtag>skills
          </TitleContent>
          <QuoteContent data-aos="flip-left">
            I always enjoy learning new things. Especially the technologies that
            make your company special.
          </QuoteContent>
        </TitleContainer>
        <Frontend
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{
            transform: props.xys.interpolate(trans),
          }}
          data-aos="zoom-in"
        >
          <Image src={frontend} />
          <Title>Frontend</Title>
          <AlignedItem>
            <ImageSkills src={html} />
            <ListItem>HTML</ListItem>
          </AlignedItem>
          <AlignedItem>
            <ImageSkills src={css} />
            <ListItem>CSS</ListItem>
          </AlignedItem>
          <AlignedItem>
            <ImageSkills src={sass} />
            <ListItem>SASS</ListItem>
          </AlignedItem>
          <AlignedItem>
            <ImageSkills src={js} />
            <ListItem>JavaScript</ListItem>
          </AlignedItem>
          <AlignedItem>
            <ImageSkills src={react} />
            <ListItem>React</ListItem>
          </AlignedItem>
          <AlignedItem>
            <ImageSkills src={angular} />
            <ListItem>Angular</ListItem>
          </AlignedItem>
          <AlignedItem>
            <ImageSkills src={typescript} />
            <ListItem>TypeScript</ListItem>
          </AlignedItem>
        </Frontend>

        <Backend
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{
            transform: props.xys.interpolate(trans),
          }}
          data-aos="zoom-in"
        >
          <Image src={backend} />
          <Title>Backend</Title>
          <AlignedItem>
            <ImageSkills src={php} />
            <ListItem>PHP</ListItem>
          </AlignedItem>
          <AlignedItem>
            <ImageSkills src={laravel} />
            <ListItem>Laravel</ListItem>
          </AlignedItem>
          <AlignedItem>
            <ImageSkills src={node} />
            <ListItem>NodeJS</ListItem>
          </AlignedItem>
          <AlignedItem>
            <ImageSkills src={mysql} />
            <ListItem>MySQL</ListItem>
          </AlignedItem>
          <AlignedItem>
            <ImageSkills src={mongo} />
            <ListItem>MongoDB</ListItem>
          </AlignedItem>
        </Backend>
        <Tools
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{
            transform: props.xys.interpolate(trans),
          }}
          data-aos="zoom-in"
        >
          <Image src={tools} />
          <Title>Tools</Title>
          <AlignedItem>
            <ImageSkills src={git} />
            <ListItem>Git</ListItem>
          </AlignedItem>
          <AlignedItem>
            <ImageSkills src={vscode} />
            <ListItem>VSCode</ListItem>
          </AlignedItem>
          <AlignedItem>
            <ImageSkills src={postman} />
            <ListItem>Postman</ListItem>
          </AlignedItem>
        </Tools>
      </SkillsContent>
    </SkillsContainer>
  );
};

export default Skills;
