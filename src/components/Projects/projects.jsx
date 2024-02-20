import React from 'react';
import projects from "../../data/projects.json";
import ProjectCard from './projectCard';
import styles from './projects.module.css'; // Assuming you have a CSS module for styling

const Projects = () => {
  return (
    <section className={styles.projects} id='project'>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectCards}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
