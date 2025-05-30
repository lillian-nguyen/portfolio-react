import styles from "./Contact.module.css"
import Button from "../Button"
import { useMenu } from "../Navbar/MenuContext";

const Contact = () => {

    const {toggleMenu} = useMenu();

    return(
        <section className={styles.contactSection} id="contact">
            <Button 
            style={{backgroundColor: '#445A29'}}
            className="aboutNavButton"
            onClick={toggleMenu}
            />
            <h2 className={styles.contactHeader}>CONTACT</h2>

            <div className={styles.messageContainer}>
                <div className={styles.imessage}>
                    <p className={`${styles.fromMe} ${styles.noBottomMargin}`}>Thanks for stopping by! Anything else you'd like to know?</p>
                    
                    <p className={`${styles.fromThem} ${styles.marginBottom1} ${styles.marginTop1}`}>What socials are you on?</p>
                    
                    <p className={`${styles.fromMe} ${styles.noBottomMargin}`}>Happy to connect! Click an icon to take a look:</p>
                    <p className={`${styles.fromMe} ${styles.noTail}`}>
                        <a target="_blank" rel="noopener noref" href="https://www.linkedin.com/in/ldv-nguyen/">
                        <img className={styles.contactIcons} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjRjlFQkM3IiBkPSJNNi45NCA1YTIgMiAwIDEgMS00LS4wMDJhMiAyIDAgMCAxIDQgLjAwMk03IDguNDhIM1YyMWg0em02LjMyIDBIOS4zNFYyMWgzLjk0di02LjU3YzAtMy42NiA0Ljc3LTQgNC43NyAwVjIxSDIydi03LjkzYzAtNi4xNy03LjA2LTUuOTQtOC43Mi0yLjkxeiIvPjwvc3ZnPg=="/>
                        </a>
                        LinkedIn</p>
                    <p className={`${styles.fromMe} ${styles.noTail}`}>
                        <a target="_blank" rel="noopener noref" href='https://github.com/lillian-nguyen'>
                        <img className={styles.contactIcons} src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBmaWxsPSJub25lIj48ZyBjbGlwLXBhdGg9InVybCgjYWthckljb25zR2l0aHViRmlsbDApIj48cGF0aCBmaWxsPSIjRjlFQkM3IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAwQzUuMzcgMCAwIDUuMzcgMCAxMmMwIDUuMzEgMy40MzUgOS43OTUgOC4yMDUgMTEuMzg1Yy42LjEwNS44MjUtLjI1NS44MjUtLjU3YzAtLjI4NS0uMDE1LTEuMjMtLjAxNS0yLjIzNWMtMy4wMTUuNTU1LTMuNzk1LS43MzUtNC4wMzUtMS40MWMtLjEzNS0uMzQ1LS43Mi0xLjQxLTEuMjMtMS42OTVjLS40Mi0uMjI1LTEuMDItLjc4LS4wMTUtLjc5NWMuOTQ1LS4wMTUgMS42Mi44NyAxLjg0NSAxLjIzYzEuMDggMS44MTUgMi44MDUgMS4zMDUgMy40OTUuOTljLjEwNS0uNzguNDItMS4zMDUuNzY1LTEuNjA1Yy0yLjY3LS4zLTUuNDYtMS4zMzUtNS40Ni01LjkyNWMwLTEuMzA1LjQ2NS0yLjM4NSAxLjIzLTMuMjI1Yy0uMTItLjMtLjU0LTEuNTMuMTItMy4xOGMwIDAgMS4wMDUtLjMxNSAzLjMgMS4yM2MuOTYtLjI3IDEuOTgtLjQwNSAzLS40MDVzMi4wNC4xMzUgMyAuNDA1YzIuMjk1LTEuNTYgMy4zLTEuMjMgMy4zLTEuMjNjLjY2IDEuNjUuMjQgMi44OC4xMiAzLjE4Yy43NjUuODQgMS4yMyAxLjkwNSAxLjIzIDMuMjI1YzAgNC42MDUtMi44MDUgNS42MjUtNS40NzUgNS45MjVjLjQzNS4zNzUuODEgMS4wOTUuODEgMi4yMmMwIDEuNjA1LS4wMTUgMi44OTUtLjAxNSAzLjNjMCAuMzE1LjIyNS42OS44MjUuNTdBMTIuMDIgMTIuMDIgMCAwIDAgMjQgMTJjMC02LjYzLTUuMzctMTItMTItMTIiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImFrYXJJY29uc0dpdGh1YkZpbGwwIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9nPjwvc3ZnPg==' />
                        </a>
                        Github</p>
                    <p className={`${styles.fromMe} ${styles.noTail}`}>
                        <a target="_blank" rel="noopener noref" href="https://x.com/lilliancodes">
                        <img className={styles.contactIcons} src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNGOUVCQzciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Im0xMy4wODEgMTAuNzEybC00Ljc4Ni02LjcxYS42LjYgMCAwIDAtLjQ4OS0uMjUySDUuMjhhLjYuNiAwIDAgMC0uNDg4Ljk0OGw2LjEyNyA4LjU5bTIuMTYyLTIuNTc2bDYuMTI3IDguNTlhLjYuNiAwIDAgMS0uNDg4Ljk0OGgtMi41MjZhLjYuNiAwIDAgMS0uNDg5LS4yNTJsLTQuNzg2LTYuNzFtMi4xNjItMi41NzZsNS44NDItNi45NjJtLTguMDA0IDkuNTM4TDUuMDc3IDIwLjI1Ii8+PC9zdmc+'/>
                        </a>
                        X / Twitter</p>

                    <p className={`${styles.fromThem} ${styles.marginBottom1} ${styles.marginTop1}`}>I still have questions or comments.</p>

                    <p className={`${styles.fromMe}`}>Feel free to leave a note below - whether it's feedback, a freelance inquiry, or a quick hello, I'd love to hear from you!</p>

                    <div className={`${styles.fromThem} ${styles.bubbleForm} ${styles.marginBottom1} ${styles.marginTop1}`}>
                        <form name="contact" 
                         method="POST"
                        //  data-netlify="true" 
                        data-netlify-honeypot="bot-field"
                        action="/success"
                        className={styles.contactForm}
                        netlify>

                            <input type="hidden" name="form-name" value="contact" />

                            <p hidden>
                            <label>Don’t fill this out: <input name="bot-field" /></label>
                            </p>

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