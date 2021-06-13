import React from "react";
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
  return (
    <SkillsContainer>
      <SkillsContent>
        <Frontend>
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
        <Backend>
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
        <Tools>
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
