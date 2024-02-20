import React from 'react';
import styles from './projectCard.module.css'; // Assuming you have a CSS module for styling
import { getImageUrl } from '../../utils';

const ProjectCard = ({ project }) => {
  const { title, imageSrc, description, skills, demo, source } = project;

  return (
    <div className={styles.projectCard} >
      <img src={getImageUrl(imageSrc)} alt={title} className={styles.projectImage} />
      <h3 className={styles.projectTitle}>{title}</h3>
      <p className={styles.projectDescription}>{description}</p>
      <ul className={styles.projectSkills}>
        {skills.map((skill, index) => (
          <li key={index} className={styles.projectSkills2}>{skill}</li>
        ))}
      </ul>
      <div className={styles.projectLinks}>
        <a href={demo} className={styles.projectLink1} target='_blank'>
            "Click here" to see the live Demo!<br/>
        </a>
        <br/>
        Source
        <a href={source} className={styles.projectLink2}>
            <img src={getImageUrl("hero/github1.png")} alt="GitHub" className={styles.githubImg} target='_blank'/>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
