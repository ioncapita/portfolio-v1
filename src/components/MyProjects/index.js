import React from "react";
import styles from "./Projects.module.css";
import netflix from "../animations/netflix-project.JPG";
import vanillajs from "../animations/weather.JPG";
import homecinema from "../animations/home-cinema.JPG";

const Projects = () => {
  return (
    <div id="projects" className={styles.Bg}>
      <div className={styles.container}>
        <div className={styles.aligned_section}>
          <h1 className={styles.title}>
            <span class={styles.hashtag}>#</span>projects
          </h1>
          <p className={styles.description}>
            Some of my greatest and latest projects.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.imgBx}>
            <img src={netflix} alt="#" />
          </div>
          <div className={styles.content}>
            <div>
              <h3>Netflix Clone</h3>
              <p>
                <strong>Technologies used:</strong>
                <ul>
                  <ol>React Redux</ol>
                  <ol>React Hooks</ol>
                  <ol>Firebase</ol>
                  <ol>TMDB API</ol>
                </ul>
              </p>
              <a href="https://netflix-project-1b6c9.web.app/" target="blank">
                Demo
              </a>
              <a
                href="https://github.com/ioncapita/netflix-clone"
                target="blank"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imgBx}>
            <img src={vanillajs} alt="#" />
          </div>
          <div className={styles.content}>
            <div>
              <h3>20 Vanilla JS Projects</h3>
              <p>
                <strong>Technologies used:</strong>
                <ul>
                  <ol>HTML</ol>
                  <ol>CSS</ol>
                  <ol>Vanilla JavaScript</ol>
                </ul>
              </p>
              <a
                href="https://github.com/ioncapita/20-vanillaJS-mini-projects"
                target="blank"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imgBx}>
            <img src={homecinema} alt="#" />
          </div>
          <div className={styles.content}>
            <div>
              <h3>Home Cinema</h3>
              <p>
                <strong>Technologies used:</strong>
                <ul>
                  <ol>NextJs</ol>
                  <ol>TMDB API</ol>
                </ul>
              </p>
              <a href="https://home-cinema-web-app.vercel.app/" target="blank">
                Demo
              </a>
              <a
                href="https://github.com/ioncapita/home-cinema-webApp"
                target="blank"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
