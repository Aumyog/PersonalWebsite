import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utilis";
export const Hero = () =>{
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi,I'm Aum</h1>
                <p className={styles.description}>
                    I'm a React front-end developer. Reach out if you would like to learn more!
                </p>
                <a href="mailto:aumyogesh10s@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
        <img
            src={getImageUrl("Hero/Aum3.png")}
            alt="Hero image of me"
            className={styles.heroImg}
      />
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>
        </section>
    );
};