import React from "react";
import lottie from "lottie-web";
import animation from "../animations/39998-web-development.json";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#anim"),
      animationData: animation,
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.elements}>
        <div className={styles.anim_position}>
          <div id="anim" className={styles.anim} />
        </div>
        <div className={styles.text_position}>
          <h1 className={styles.hello}>
            Hey<span class={styles.wave}>👋</span>
          </h1>
          <h2 className={styles.name}>I'm Ion.</h2>
          <p className={styles.intro}>
            A Fullstack web developer based in Portugal.
          </p>

          <a className={styles.resume} href="/Ion_Capita_CV_EN.pdf" download>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}
