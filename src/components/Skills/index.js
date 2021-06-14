import React from "react";
import { useSpring, animated } from "react-spring";
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
} from "./SkillsElements";
// import styled from "styled-components";

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

const Skills = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 200, friction: 50 },
  }));

  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1,
  ];
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  return (
    <SkillsContainer>
      <SkillsContent>
        <Frontend
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{
            transform: props.xys.interpolate(trans),
          }}
        >
          <Image src={frontend} />
          <Title>Frontend</Title>
          <ImageSkills src={html} />
          <ListItem>HTML</ListItem>
          <ImageSkills src={css} />
          <ListItem>CSS</ListItem>
          <ImageSkills src={sass} />
          <ListItem>SASS</ListItem>
          <ImageSkills src={js} />
          <ListItem>JavaScript</ListItem>
          <ImageSkills src={react} />
          <ListItem>React</ListItem>
          <ImageSkills src={angular} />
          <ListItem>Angular</ListItem>
          <ImageSkills src={typescript} />
          <ListItem>TypeScript</ListItem>
        </Frontend>
        <Backend
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{
            transform: props.xys.interpolate(trans),
          }}
        >
          <Image src={backend} />
          <Title>Backend</Title>
          <ImageSkills src={php} />
          <ListItem>PHP</ListItem>
          <ImageSkills src={laravel} />
          <ListItem>Laravel</ListItem>
          <ImageSkills src={node} />
          <ListItem>NodeJS</ListItem>
          <ImageSkills src={mysql} />
          <ListItem>MySQL</ListItem>
          <ImageSkills src={mongo} />
          <ListItem>MongoDB</ListItem>
        </Backend>
        <Tools
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{
            transform: props.xys.interpolate(trans),
          }}
        >
          <Image src={tools} />
          <Title>Tools</Title>
          <ImageSkills src={git} />
          <ListItem>Git</ListItem>
          <ImageSkills src={vscode} />
          <ListItem>VSCode</ListItem>
          <ImageSkills src={postman} />
          <ListItem>Postman</ListItem>
        </Tools>
      </SkillsContent>
    </SkillsContainer>
  );
};

export default Skills;
