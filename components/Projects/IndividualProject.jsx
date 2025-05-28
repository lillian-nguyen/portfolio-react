import React from "react";
import styles from "./Projects.module.css"

const IndividualProject = ({imgSrc, projectName, projectBio, tech = [], customClass}) => {

    const isVideo = imgSrc.endsWith('.mp4');
    return (
        <div className={`${styles.projectInfo} ${customClass}`}>
            {isVideo ? (
                <video 
                autoPlay
                muted
                loop
                className={styles.projectMedia}
                src={imgSrc} alt={`${projectName} preview`} /> 
            ) : (
                <img src={imgSrc} alt={`${projectName} preview`} className={styles.projectMedia} />
            )}
           

           <div>
            <h4>{projectName}</h4>
            <div className={styles.bioAndTags}>
                <p className={styles.projectBio}>{projectBio}</p>

                <div className={styles.techTagContainer}>
                    {tech.map((element, index) => (
                        <span className={styles.techTag} key={index}>{element}</span>
                    ))}
                </div>
            </div>
            
           </div>

        </div>
    );
}

export {IndividualProject}