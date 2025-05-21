import React from "react";
import { IndividualProject } from "./IndividualProject";
import styles from "./Projects.module.css"

const Projects = () => {
    return (
        <div>
            <h2 className={styles.projectsHeader}>PROJECTS</h2>
            <div className={styles.projectsContainer}>
            <h4>VENTURE WEAVERS</h4>
            <IndividualProject
            imgSrc="src/assets/ventureweavers.mp4"
            // projectName="Venture Weavers"
            projectBio="A modern, responsive site for Venture Weavers, a life science consulting group, complete with tailored content and branding."
            tech= {['HTML', 'CSS', 'JavaScript']}
            />
            </div>
        </div>
    );
}

export {Projects}