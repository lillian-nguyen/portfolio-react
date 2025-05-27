import styles from "./Contact.module.css"
import Button from "../Button"

const Contact = () => {
    return(
        <section className={styles.projectSection}>
            <Button 
            style={{backgroundColor: '#445A29'}}
            className="aboutNavButton"
            />
            <h2 className={styles.projectHeader}>CONTACT</h2>

            <div className={styles.messageContainer}>
                <div className={styles.imessage}>
                    <p className={`${styles.fromMe} ${styles.noBottomMargin}`}>Thanks for stopping by! Anything on your mind?</p>
                    
                    <p className={`${styles.fromThem} ${styles.marginBottom1} ${styles.marginTop1}`}>Where can we connect with you on socials?</p>
                    
                    <p className={`${styles.fromMe} ${styles.noBottomMargin}`}>I'd love to connect! Click on the icon of interest below to be redirected.</p>
                    <p className={`${styles.fromMe} ${styles.noTail}`}>LinkedIn</p>
                    <p className={`${styles.fromMe} ${styles.noTail}`}>Github</p>
                    <p className={`${styles.fromMe} ${styles.noTail}`}>X / Twitter</p>

                    <p className={`${styles.fromThem} ${styles.marginBottom1} ${styles.marginTop1}`}>How can I send a message?</p>

                    <p className={`${styles.fromMe}`}>Absolutely! Feel free to reach out with questions or just say hi!</p>

                    <div className={`${styles.fromThem} ${styles.bubbleForm} ${styles.marginBottom1} ${styles.marginTop1}`}>
                        <form className={styles.contactForm}action="">
                            <label htmlFor="name">Name *</label>
                            <input 
                            type="text"
                            id="name"
                            name="name"
                            placeholder="your name"
                            required />

                            <label htmlFor="email">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your email"
                                required
                            />

                            <label htmlFor="message">Let's chat! ✨</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Type your message here..."
                                required
                            ></textarea>

                            <button type="submit">Send</button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export{Contact}