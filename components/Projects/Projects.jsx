import React from "react";
import { IndividualProject } from "./IndividualProject";
import styles from "./Projects.module.css"

const Projects = () => {
    return (
        <div>
            <h2 className={styles.projectsHeader}>PROJECTS</h2>
            <h4>VENTURE WEAVERS</h4>
            {/* <IndividualProject/> */}
        </div>
    );
}

export {Projects}