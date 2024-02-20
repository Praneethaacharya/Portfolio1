import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.container} >
      {/* <img src={getImageUrl("hero/portfolio_hero_background_image.png")} alt="Background" className={styles.bgImage}/> */}
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Praneetha K</h1>
        {/* <p className={styles.description}>I'm a full stack developer with knowledge on MERN stack.</p>             */}
        

        <div className={styles.socialLinks}>
          <a href='https://www.linkedin.com/in/praneetha-acharya/' target="_blank">
            <img src={getImageUrl("hero/linkedIn2.png")} alt="LinkedIn" className={styles.socialImage} />
          </a>
          <a href='https://github.com/Praneethaacharya' target="_blank">
            <img src={getImageUrl("hero/github1.png")} alt="GitHub" className={styles.socialImage} />
          </a>
          <a href='mailto:kpraneethaacharya@gmail.com' target="_blank">
          <img src={getImageUrl("hero/mail.png")} alt="Mail" className={styles.socialImage} />
          </a>
        </div>
        {/* <img src={getImageUrl("hero/heroImage2.png")} alt="Hero image of me" className={styles.heroImg}/> */}
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </div>
    </section>
  )
}

export default Hero
