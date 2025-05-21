import React from "react";
import styles from "./Projects.module.css"

const IndividualProject = ({imgSrc, projectName, projectBio, tech = []}) => {
    return (
        <div>
           <video 
           autoPlay
           muted
           loop
           className={styles.projectMedia}
           src={imgSrc} alt={`${projectName} preview`} /> 

           <div>
            <h4>{projectName}</h4>
            <p className={styles.projectBio}>{projectBio}</p>

            <div className={styles.techTagContainer}>
                {tech.map((element, index) => (
                    <span className={styles.techTag} key={index}>{element}</span>
                ))}
            </div>
           </div>

        </div>
    );
}

export {IndividualProject}