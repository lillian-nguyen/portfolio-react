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
                    <p className={`${styles.fromMe} ${styles.noBottomMargin}`}>Thanks for stopping by! Anything else you'd like to know?</p>
                    
                    <p className={`${styles.fromThem} ${styles.marginBottom1} ${styles.marginTop1}`}>What socials are you on?</p>
                    
                    <p className={`${styles.fromMe} ${styles.noBottomMargin}`}>Happy to connect! Click an icon to take a look:</p>
                    <p className={`${styles.fromMe} ${styles.noTail}`}>LinkedIn</p>
                    <p className={`${styles.fromMe} ${styles.noTail}`}>Github</p>
                    <p className={`${styles.fromMe} ${styles.noTail}`}>X / Twitter</p>

                    <p className={`${styles.fromThem} ${styles.marginBottom1} ${styles.marginTop1}`}>I have questions or comments! Where can I send them?</p>

                    <p className={`${styles.fromMe}`}>Feel free to leave a note below - whether it's feedback, a freelance inquiry, or a quick hello, I'd love to hear from you!</p>

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