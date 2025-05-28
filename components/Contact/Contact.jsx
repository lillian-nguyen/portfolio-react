import styles from "./Contact.module.css"
import Button from "../Button"

const Contact = () => {
    return(
        <section className={styles.contactSection}>
            <Button 
            style={{backgroundColor: '#445A29'}}
            className="aboutNavButton"
            />
            <h2 className={styles.contactHeader}>CONTACT</h2>

            <div className={styles.messageContainer}>
                <div className={styles.imessage}>
                    <p className={`${styles.fromMe} ${styles.noBottomMargin}`}>Thanks for stopping by! Anything else you'd like to know?</p>
                    
                    <p className={`${styles.fromThem} ${styles.marginBottom1} ${styles.marginTop1}`}>What socials are you on?</p>
                    
                    <p className={`${styles.fromMe} ${styles.noBottomMargin}`}>Happy to connect! Click an icon to take a look:</p>
                    <p className={`${styles.fromMe} ${styles.noTail}`}>
                        <a target="_blank" rel="noopener noref" href="https://www.linkedin.com/in/ldv-nguyen/">
                        <img className={styles.contactIcons} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KCTxwYXRoIGZpbGw9IiM1MzRhNDEiIGQ9Ik02Ljk0IDVhMiAyIDAgMSAxLTQtLjAwMmEyIDIgMCAwIDEgNCAuMDAyTTcgOC40OEgzVjIxaDR6bTYuMzIgMEg5LjM0VjIxaDMuOTR2LTYuNTdjMC0zLjY2IDQuNzctNCA0Ljc3IDBWMjFIMjJ2LTcuOTNjMC02LjE3LTcuMDYtNS45NC04LjcyLTIuOTF6IiAvPgo8L3N2Zz4="/>
                        </a>
                        LinkedIn</p>
                    <p className={`${styles.fromMe} ${styles.noTail}`}>
                        <a target="_blank" rel="noopener noref" href='https://github.com/lillian-nguyen'>
                        <img className={styles.contactIcons} src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KCTxnIGZpbGw9Im5vbmUiPgoJCTxnIGNsaXAtcGF0aD0idXJsKCNha2FySWNvbnNHaXRodWJGaWxsMCkiPgoJCQk8cGF0aCBmaWxsPSIjNTM0YTQxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAwQzUuMzcgMCAwIDUuMzcgMCAxMmMwIDUuMzEgMy40MzUgOS43OTUgOC4yMDUgMTEuMzg1Yy42LjEwNS44MjUtLjI1NS44MjUtLjU3YzAtLjI4NS0uMDE1LTEuMjMtLjAxNS0yLjIzNWMtMy4wMTUuNTU1LTMuNzk1LS43MzUtNC4wMzUtMS40MWMtLjEzNS0uMzQ1LS43Mi0xLjQxLTEuMjMtMS42OTVjLS40Mi0uMjI1LTEuMDItLjc4LS4wMTUtLjc5NWMuOTQ1LS4wMTUgMS42Mi44NyAxLjg0NSAxLjIzYzEuMDggMS44MTUgMi44MDUgMS4zMDUgMy40OTUuOTljLjEwNS0uNzguNDItMS4zMDUuNzY1LTEuNjA1Yy0yLjY3LS4zLTUuNDYtMS4zMzUtNS40Ni01LjkyNWMwLTEuMzA1LjQ2NS0yLjM4NSAxLjIzLTMuMjI1Yy0uMTItLjMtLjU0LTEuNTMuMTItMy4xOGMwIDAgMS4wMDUtLjMxNSAzLjMgMS4yM2MuOTYtLjI3IDEuOTgtLjQwNSAzLS40MDVzMi4wNC4xMzUgMyAuNDA1YzIuMjk1LTEuNTYgMy4zLTEuMjMgMy4zLTEuMjNjLjY2IDEuNjUuMjQgMi44OC4xMiAzLjE4Yy43NjUuODQgMS4yMyAxLjkwNSAxLjIzIDMuMjI1YzAgNC42MDUtMi44MDUgNS42MjUtNS40NzUgNS45MjVjLjQzNS4zNzUuODEgMS4wOTUuODEgMi4yMmMwIDEuNjA1LS4wMTUgMi44OTUtLjAxNSAzLjNjMCAuMzE1LjIyNS42OS44MjUuNTdBMTIuMDIgMTIuMDIgMCAwIDAgMjQgMTJjMC02LjYzLTUuMzctMTItMTItMTIiIGNsaXAtcnVsZT0iZXZlbm9kZCIgLz4KCQk8L2c+CgkJPGRlZnM+CgkJCTxjbGlwUGF0aCBpZD0iYWthckljb25zR2l0aHViRmlsbDAiPgoJCQkJPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIgLz4KCQkJPC9jbGlwUGF0aD4KCQk8L2RlZnM+Cgk8L2c+Cjwvc3ZnPg==' />
                        </a>
                        Github</p>
                    <p className={`${styles.fromMe} ${styles.noTail}`}>
                        <a target="_blank" rel="noopener noref" href="https://x.com/lilliancodes">
                        <img className={styles.contactIcons} src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDE0IDE0Ij4KCTxnIGZpbGw9Im5vbmUiPgoJCTxnIGNsaXAtcGF0aD0idXJsKCNwcmltZVR3aXR0ZXIwKSI+CgkJCTxwYXRoIGZpbGw9IiM1MzRhNDEiIGQ9Ik0xMS4wMjUuNjU2aDIuMTQ3TDguNDgyIDYuMDNMMTQgMTMuMzQ0SDkuNjhMNi4yOTQgOC45MDlsLTMuODcgNC40MzVILjI3NWw1LjAxNi01Ljc1TDAgLjY1N2g0LjQzTDcuNDg2IDQuNzF6bS0uNzU1IDExLjRoMS4xOUwzLjc4IDEuODc3SDIuNTA0eiIgLz4KCQk8L2c+CgkJPGRlZnM+CgkJCTxjbGlwUGF0aCBpZD0icHJpbWVUd2l0dGVyMCI+CgkJCQk8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDE0djE0SDB6IiAvPgoJCQk8L2NsaXBQYXRoPgoJCTwvZGVmcz4KCTwvZz4KPC9zdmc+'/>
                        </a>
                        X / Twitter</p>

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