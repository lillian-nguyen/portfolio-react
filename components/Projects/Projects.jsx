import {React, useState} from "react";
import { IndividualProject } from "./IndividualProject";
import { useMenu } from "../Navbar/MenuContext";
// import Button from "../Button"
import styles from "./Projects.module.css"

const Projects = () => {
    const [isHeaderClicked, setIsHeaderClicked] = useState({
        'VENTURE WEAVERS': false,
        'ELFGORITHM': false
    });

    const toggleProjectVisibility = (title) => {
        setIsHeaderClicked(prev => ({
            ...prev, 
            [title]: !prev[title]
        }))
    };

    const {toggleMenu} = useMenu();

    return (
        <div className={styles.projectSection} id="projects"
       >
        {/* <Button 
            style={{backgroundColor: '#445A29'}}
            className="projectsNavButton"
            onClick={toggleMenu}
            /> */}
            <h2 className={styles.projectsHeader}
            >PROJECTS</h2>

            <h3>A collection of web applications I've built or contributed to. Click a project title for more details.</h3>

            <div className={styles.projectsContainer}>

            <h4
            onClick={() => {
                toggleProjectVisibility('ELFGORITHM')
            }}
            >ELFGORITHM</h4>
            <IndividualProject
            imgSrc="/elfgorithm.png"
            projectBio="An AI-powered Secret Santa platform that makes gift exchanges delightful and effortless. Elfgorithm takes the guesswork out of gift-giving with personalized AI suggestions."
            tech={['Next.js', 'React', 'Supabase', 'OpenAI API', 'Shadcn/UI', 'TailwindCSS', 'Jest', 'React Testing Library', 'Storybook']}
            customClass={`${styles.elfgorithm} ${isHeaderClicked['ELFGORITHM'] ? '' : styles.hideProjectInfo}`}
            code="https://github.com/LetsGetTechnical/elecretanta"
            />
            
            <h4
            className={`${!isHeaderClicked['VENTURE WEAVERS'] ? styles.lastHeaderPadding : ''}`}
            onClick={() => {
                toggleProjectVisibility('VENTURE WEAVERS');
            }}
            >VENTURE WEAVERS</h4>
            <IndividualProject
            imgSrc="/ventureweavers.mp4"
            projectBio="A clean, responsive site for Venture Weavers, a life science consulting group, complete with tailored content and branding."
            tech= {['HTML', 'CSS', 'JavaScript']}
            customClass={`${styles.ventureWeavers} ${isHeaderClicked['VENTURE WEAVERS'] ? '' : styles.hideProjectInfo}`}
            website="https://ventureweaversconsulting.com/"
            />
            </div>
        </div>
    );
}

export {Projects}