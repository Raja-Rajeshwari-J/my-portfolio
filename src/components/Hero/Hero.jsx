//import React from 'react';

import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, This is Raja Rajeshwari J</h1>
        <p className={styles.description}>
        I&apos;m currently pursuing my pre-final year bachelor&apos;s degree in the field of Electronics 
        and Communication Engineering at Chennai Institute of Technology. I&apos;m an 
        enthusiastic full-stack developer, have worked on several projects. 
        Reach out if you&apos;d like to learn more!
        </p>
        <div className={styles.btndiv}>
          <a href="mailto:rajijawaharlal@gmail.com" className={styles.contactBtn}>Contact Me</a>
          <a href="https://drive.google.com/file/d/1fZk1HTec0SZ7hwxsZ4LiEAQ9-wSnMDaa/view?usp=sharing" 
             className={styles.contactBtn}>Resume</a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
