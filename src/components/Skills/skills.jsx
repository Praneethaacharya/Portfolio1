// import React from 'react';
// import styles from "./Skills.module.css"
// import skills from "../../data/skills.json"
// import history from "../../data/history.json"
// import { getImageUrl } from '../../utils';

// const Skills = () => {
//   return (
//     <section className={styles.container} id="skills">
//         <h2 className={styles.title}>Skills</h2>
//         <div className={styles.content}>
//             <div className={styles.skills}>{

                



//                 skills.map((skill, id) => {
//                     return <div key={id} className={styles.skill}>
//                         <div className={styles.skillImageContainer}>
//                             <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
//                         </div>
//                         <p>{skill.title}</p>
//                     </div>
//                 })
//                 }</div>
            
//         </div>
//     </section>
//   )
// }

// export default Skills


// // import React from 'react';
// // import skillsData from '../../data/skills.json';

// // const Skills = () => {
// //   return (
// //     <div>
// //       <h2>Languages</h2>
// //       <ul>
// //         {skillsData.languages.map((skill, index) => (
// //           <li key={index}>
// //             <img src={skill.imageSrc} alt={skill.title} />
// //             {skill.title}
// //           </li>
// //         ))}
// //       </ul>

// //       <h2>Frameworks</h2>
// //       <ul>
// //         {skillsData.frameworks.map((skill, index) => (
// //           <li key={index}>
// //             <img src={skill.imageSrc} alt={skill.title} />
// //             {skill.title}
// //           </li>
// //         ))}
// //       </ul>

// //       <h2>Operating Systems</h2>
// //       <ul>
// //         {skillsData['Operating System'].map((skill, index) => (
// //           <li key={index}>
// //             <img src={skill.imageSrc} alt={skill.title} />
// //             {skill.title}
// //           </li>
// //         ))}
// //       </ul>

// //       <h2>Databases</h2>
// //       <ul>
// //         {skillsData.Database.map((skill, index) => (
// //           <li key={index}>
// //             <img src={skill.imageSrc} alt={skill.title} />
// //             {skill.title}
// //           </li>
// //         ))}
// //       </ul>

// //       <h2>Libraries</h2>
// //       <ul>
// //         {skillsData.library.map((skill, index) => (
// //           <li key={index}>
// //             <img src={skill.imageSrc} alt={skill.title} />
// //             {skill.title}
// //           </li>
// //         ))}
// //       </ul>

// //       <h2>Backend Development</h2>
// //       <ul>
// //         {skillsData['Backend Development'].map((skill, index) => (
// //           <li key={index}>
// //             <img src={skill.imageSrc} alt={skill.title} />
// //             {skill.title}
// //           </li>
// //         ))}
// //       </ul>

// //       <h2>APIs</h2>
// //       <ul>
// //         {skillsData.API.map((skill, index) => (
// //           <li key={index}>
// //             <img src={skill.imageSrc} alt={skill.title} />
// //             {skill.title}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default Skills;



// import React from 'react';
// import styles from './Skills.module.css';
// import skillsData from '../../data/skills.json';
// import { getImageUrl } from '../../utils';

// const Skills = () => {
//   return (
//     <section className={styles.container} id="skills">
//       <h2 className={styles.title}>Skills</h2>
//       <div className={styles.content}>
//         {Object.entries(skillsData).map(([category, skills], index) => (
//           <div key={index} className={styles.skillCategory}>
//             <h3 className={styles.categoryTitle}>{category}</h3>
//             <div className={styles.skills}>
//               {skills.map((skill, id) => (
//                 <div key={id} className={styles.skill}>
//                   <div className={styles.skillImageContainer}>
//                     <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
//                   </div>
//                   <p>{skill.title}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Skills;


import React from 'react';
import styles from "./Skills.module.css"
import skills from "../../data/skills.json"
import history from "../../data/history.json"
import { getImageUrl } from '../../utils';

const Skills = () => {
  return (
    <section className={styles.container} id="skills">
        <h2 className={styles.title}>Skills</h2>
          <div className={styles.listskills}>
          <h3 className={styles.content}>Languages</h3>
            <ul className={styles.list}>
            <li className={styles.names}>C++</li>
            <li className={styles.names}>C</li>
            <li className={styles.names}>Python</li>
            <li className={styles.names}>Javascript</li>
            <li className={styles.names}>HTML</li>
            <li className={styles.names}>CSS</li>
            </ul>
            <h3 className={styles.content}>Framework</h3>
            <ul className={styles.list}>
            <li className={styles.names}>Bootstrap</li>
            <li className={styles.names}>ExpressJS</li>
            </ul>
            <h3 className={styles.content}>Database</h3>
            <ul  className={styles.list}>
            <li className={styles.names}>MySQL</li>
            <li className={styles.names}>MongoDB</li>
          </ul>
            <h3 className={styles.content}>Backend</h3>
            <ul  className={styles.list}>
            <li className={styles.names}>NodeJS</li>
          </ul>
            <h3 className={styles.content}>Library</h3>
            <ul  className={styles.list}>
            <li className={styles.names}>React</li>
          </ul>
            <h3 className={styles.content}>API</h3>
            <ul  className={styles.list}>
            <li className={styles.names}>RESTful API</li>
          </ul>
            </div>
        
    </section>
  )
}

export default Skills;