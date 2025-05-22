import styles from "./About.module.css"
import Button from "../Button";
import { Marquee } from "../Marquee";

const codeIcon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNEMjg1MUEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik04Ljc1IDYuNUwzLjI1IDEybDUuNSA1LjVtNi41LTExbDUuNSA1LjVsLTUuNSA1LjUiLz48L3N2Zz4='

const elements = [
    {text: 'Coding @ Gridiron Survivor', iconSrc: codeIcon, iconClass: 'sweIcons'}, 
    {text: 'Developing an app for long distance friends', iconSrc: codeIcon, iconClass: 'sweIcons'}
]

const About = () => {
return(
    <section className={styles.AboutSection}>
        <section>
            <Button
            style={{backgroundColor: '#445A29'}}
            className="aboutNavButton"
            />
            <h2 className={styles.aboutHeader}>ABOUT ME</h2>
        </section>
       
       <section className={styles.aboutContainer}>

       <section className={styles.currently}>
                <div>
                    <h4>CURRENTLY</h4>
                    <Marquee
                    className="aboutMarquee" items={elements}/>
                </div>
                
            </section>

        <section className={styles.themeContainer}>
            <h4>Hi, I'm Lillian - your friendly neighborhood </h4>

            <div className={styles.themeOptions}>
                <p className={styles.activeAboutText}>SOFTWARE ENGINEER</p>

                <div className={styles.inactiveAboutButtons}>
                    <button>EXPLORER</button>
                    <button>SIDE QUEST ENTHUSIAST</button>
                </div>
            </div>
        </section>

        <div className={styles.polaroidWrapper}>
            <img className={styles.smiski} src="/smiski_researching.png" alt="smiski" />
            <img className={styles.aboutImg} src="https://images.unsplash.com/photo-1656680632373-e2aec264296b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img className={styles.polaroid} src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2dzZWp0YzlnemV2bTVtdG55Mjkxa3Vrd3h1dHE5bWtkbDV3OWtxNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/t8nUMbu4NHNFQUKTq5/giphy.gif" alt="" />
        </div>
        
        
    </section>
    </section>
    );
}

export {About}