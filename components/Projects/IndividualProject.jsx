import React from "react";
import styles from "./Projects.module.css"

const SiteLinks = ({website, code}) => (
    <>
        {website && (
            <a href={website} target="_blank" rel="noopener noreferrer">
                <button className={styles.sourceTag}>Website</button>
            </a>
        )}
        {code && (
            <a href={code} target="_blank" rel="noopener noreferrer">
                <button className={styles.sourceTag}>Code</button>
            </a>
        )}
    </>
)

const IndividualProject = ({imgSrc, projectName, projectBio, tech = [], customClass, website, code}) => {

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

                <div className={styles.siteLinks}>
                    <SiteLinks website={website} code={code}/>
                </div>
            </div>
            
           </div>

        </div>
    );
}

export {IndividualProject}