import styles from "./About.module.css"
import Button from "../Button";

const About = () => {
return(
    <section className={styles.AboutSection}>
        <section className={styles.topRow}>
            <Button
            style={{backgroundColor: '#445A29'}}
            className="aboutNavButton"
            />
            <h2 className={styles.aboutHeader}>ABOUT ME</h2>
        </section>
       
       <section className={styles.aboutContainer}>

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
            
            <section className={styles.currently}>
                <h4>CURRENTLY</h4>
                    <img src="#" alt="" />
                    <span>Coding @ Gridiron Survivor</span>
                    <img src="#" alt="" />
                    <span>Develping an app for long distance friendships</span>
                    <span>Counting down the days until CYC Conference</span>
                </section>
        
    </section>
    </section>
    );
}

export {About}