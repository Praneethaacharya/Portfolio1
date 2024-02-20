import React from 'react';
import styles from "./About.module.css";
import { getImageUrl } from '../../utils'

const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About me</h2>
        <div className={styles.content}>
            <img src={getImageUrl("hero/heroImage2.png")} alt='my picture' className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <div  className={styles.aboutItemsText}>
                        <p >I'm a passionate full-stack developer with a strong foundation in computer science principles and hands-on experience in crafting seamless web applications. My journey into programming began during my college years, and since then, I've been captivated by its endless possibilities.

I thrive in both front-end and back-end development, leveraging my skills to create innovative solutions. Committed to staying ahead of the curve, I continuously explore new technologies and embrace opportunities for growth.

Beyond coding, I find joy in exploring new projects, collaborating with peers. I'm driven by the desire to connect with like-minded individuals and contribute to impactful projects.

If you're searching for a dedicated and enthusiastic full-stack developer, let's connect and embark on an amazing journey together.</p>
                    </div>
                </li>
                
                
            </ul>
        </div>
    </section>
  )
}

export default About
