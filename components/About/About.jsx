import styles from "./About.module.css"
import Button from "../Button";
import { Marquee } from "../Marquee";
import {useState} from "react";

const codeIcon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNEMjg1MUEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik04Ljc1IDYuNUwzLjI1IDEybDUuNSA1LjVtNi41LTExbDUuNSA1LjVsLTUuNSA1LjUiLz48L3N2Zz4='

const foodIcon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDI4IDI4Ij48cGF0aCBmaWxsPSIjRDI4NTFBIiBkPSJNNy4wNiAyYy0uOTg0IDAtMS44MTguNzM4LTEuOTIgMS43MjVjLS4xNDggMS40MDgtLjM5IDMuOTU3LS4zOSA1LjUyNWMwIDEuNDguNjc4IDIuODAyIDEuNzM3IDMuNjcyYy4zNDguMjg2LjUxMy42LjUxMy44NjR2LjY2MmwtLjAwMS4wNDdDNi45NTggMTUuMDk0IDYuNSAyMS43ODIgNi41IDIzYTMgMyAwIDEgMCA2IDBjMC0xLjIxOC0uNDU3LTcuOTA2LS40OTktOC41MDVMMTIgMTQuNDQ4di0uNjYyYzAtLjI2NS4xNjUtLjU3OC41MTMtLjg2NEE0Ljc0IDQuNzQgMCAwIDAgMTQuMjUgOS4yNWMwLTEuNTY4LS4yNDItNC4xMTctLjM5LTUuNTI1QTEuOTI3IDEuOTI3IDAgMCAwIDExLjk0IDJjLS40NTcgMC0uODc4LjE1OC0xLjIxLjQyM0EyIDIgMCAwIDAgOS41IDJhMiAyIDAgMCAwLTEuMjMuNDIzQTEuOTMgMS45MyAwIDAgMCA3LjA2IDJNOSA0YS41LjUgMCAwIDEgMSAwdjUuMjVhLjc1Ljc1IDAgMCAwIDEuNSAwVjMuOTRhLjQ0LjQ0IDAgMCAxIC40NC0uNDRjLjIyNSAwIC40MDcuMTY3LjQyOS4zODFjLjE0OCAxLjQyLjM4MSAzLjg5Mi4zODEgNS4zNjlhMy4yNCAzLjI0IDAgMCAxLTEuMTg5IDIuNTEzYy0uNTM4LjQ0Mi0xLjA2MSAxLjE0LTEuMDYxIDIuMDIzdi42NjJjMCAuMDUuMDAxLjA5Ni4wMDUuMTVjLjA0NC42NDUuNDk1IDcuMjUxLjQ5NSA4LjQwMmExLjUgMS41IDAgMCAxLTMgMGMwLTEuMTUuNDUtNy43NTcuNDk1LTguNDAyYy4wMDQtLjA1NC4wMDUtLjEuMDA1LS4xNXYtLjY2MmMwLS44ODQtLjUyMy0xLjU4MS0xLjA2MS0yLjAyM0EzLjI0IDMuMjQgMCAwIDEgNi4yNSA5LjI1YzAtMS40NzcuMjMzLTMuOTQ4LjM4MS01LjM2OUEuNDI3LjQyNyAwIDAgMSA3LjA2IDMuNWEuNDQuNDQgMCAwIDEgLjQ0LjQ0djUuMzFhLjc1Ljc1IDAgMCAwIDEuNSAwem0xMy41LS40OTR2OS43NDRjMCAuMzUuMDk0IDEuOTk3LjE5OCAzLjgxbC4wMDYuMTA1QzIyLjg0NCAxOS42MDEgMjMgMjIuMzMgMjMgMjNhMS41IDEuNSAwIDAgMS0zIDBjMC0uNTk1LjEyMy0zLjAwMy4yNDktNS4zYTEyMTAgMTIxMCAwIDAgMSAuMjI4LTQuMDM4bC4wMjItLjM2OGwuMDAxLS4wNDRhLjc1Ljc1IDAgMCAwLS43NS0uNzVoLTJhLjI1LjI1IDAgMCAxLS4yNS0uMjV2LTMuNWE1LjI1IDUuMjUgMCAwIDEgNS01LjI0NE0xOC45NTUgMTRsLS4wMzIuNTU2Yy0uMDQ3LjgxNy0uMTEgMS45Mi0uMTcyIDMuMDYyYy0uMTI0IDIuMjY3LS4yNTEgNC43MzQtLjI1MSA1LjM4MmEzIDMgMCAxIDAgNiAwYzAtLjcyMS0uMTU4LTMuNDc0LS4yOTQtNS44NTVsLS4wMDQtLjA2NkMyNC4wOTMgMTUuMTggMjQgMTMuNTUgMjQgMTMuMjVWMi43NWEuNzUuNzUgMCAwIDAtLjc1LS43NWgtLjVBNi43NSA2Ljc1IDAgMCAwIDE2IDguNzV2My41YzAgLjk2Ni43ODQgMS43NSAxLjc1IDEuNzV6Ii8+PC9zdmc+'

const smileIcon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSIjRDI4NTFBIiBkPSJNMCA4YTggOCAwIDEgMSAxNiAwQTggOCAwIDAgMSAwIDhtMTEtMmExIDEgMCAxIDAtMiAwYTEgMSAwIDAgMCAyIDBNNi4yNTggOC44NDhhMSAxIDAgMCAwLTEuNTI2IDEuMjkybC4wMDEuMDAybC4wMDEuMDAxbC4wMDMuMDA0bC4wMDcuMDA4bC4wMTguMDJsLjA1My4wNThhNCA0IDAgMCAwIC43OTYuNjI1QTQuNiA0LjYgMCAwIDAgOCAxMS41YTQuNiA0LjYgMCAwIDAgMi4zOS0uNjQzYTQgNCAwIDAgMCAuNzk1LS42MjRsLjA1My0uMDU3bC4wMTgtLjAyMWwuMDA3LS4wMDhsLjAwMy0uMDA0bC4wMDItLjAwMmExIDEgMCAwIDAtMS41MjYtMS4yOTNsLS4wMDUuMDA1cS0uMDE0LjAxNi0uMDYyLjA2YTIgMiAwIDAgMS0uMzE0LjIzQTIuNiAyLjYgMCAwIDEgOCA5LjVhMi42IDIuNiAwIDAgMS0xLjM2LS4zNTdhMiAyIDAgMCAxLS4zNzctLjI5ek03IDZhMSAxIDAgMSAwLTIgMGExIDEgMCAwIDAgMiAwIi8+PC9zdmc+'

const sweCurrents = [
    {text: 'Coding @ Gridiron Survivor', iconSrc: codeIcon, iconClass: 'sweIcons'}, 
    {text: 'Developing an app for long distance friends', iconSrc: codeIcon, iconClass: 'sweIcons'},
    {text: 'Counting down the days until CYC Conference', iconSrc: codeIcon, iconClass: 'sweIcons'}
];

const foodieCurrents = [
    {text: 'Researching pizza tour stops', iconSrc: foodIcon, iconClass: 'foodieIcons'}, 
    {text: 'Contributing to the matcha shortage', iconSrc: foodIcon, iconClass: 'foodieIcons'},
    {text: 'Baking choco chip toffee cookies', iconSrc: foodIcon, iconClass: 'foodieIcons'}
];

const sqeCurrents = [
    {text: 'Reading "Before the Coffee Gets Cold', iconSrc: smileIcon, iconClass: 'explorerIcons'}, 
    {text: 'Learning Spanish & Vietnamese', iconSrc: smileIcon, iconClass: 'explorerIcons'},
    {text: 'Entering my running era', iconSrc: smileIcon, iconClass: 'explorerIcons'}
];

const smiskiImages = {
    'SOFTWARE ENGINEER': {
        imgSrc:'smiski_researching.png',
        alt: 'Smiski figurine looking at a laptop',
        className: 'smiskiResearching'
    },
    'FOODIE': {
        imgSrc: 'smiski_peek.png',
        alt: 'Smiski figurine looking below',
        className: 'smiskiPeeking'
    }, 
    'SIDE QUEST ENTHUSIAST':{
        imgSrc: 'smiski_reading.png',
        alt: 'Smiski figurine reading a book',
        className: 'smiskiReading'
    }
}

const polaroidPics = {
    'SOFTWARE ENGINEER': {
        polaroidImgSrc: 'https://images.unsplash.com/photo-1656680632373-e2aec264296b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'computer screens'
    }, 
    'FOODIE': {
        polaroidImgSrc: '/caolau.jpg',
        alt: 'Vietnamese Cao Lau dish'
    }, 
    'SIDE QUEST ENTHUSIAST': {
        polaroidImgSrc: '/lanterns.jpg',
        alt: 'multiple lines of lanterns'
    }
}

const aboutThemeTexts = {
    'SOFTWARE ENGINEER': {
        bioText: "I'm a software engineer with a healthcare background and soft spot for human-centered design. My goal is to help bridge the gap between tech and the people who use it. Whether it's writing code or shaping user experiences, I'm focused on making technology work better for people, not just around them."
    },
    'FOODIE': {
        bioText: "Food is one of my favorite ways to explore culture and connection - both of which hold a special place in my heart as a Vietnamese American. Although I'm a (self-proclaimed) star baker, learning to cook has been more of a slow burn. Regardless, the creativity and comfort that comes from playing with food makes me happy."
    },
    'SIDE QUEST ENTHUSIAST': {
        bioText: "I'm all about finding joy in everyday things. Reading, writing, and running keep me grounded, while other hobbies keep life interesting. I enjoy collecting Smiskis, crocheting projects with varying success, and learning Vietnamese and Spanish. There's so much more out there to explore - and I'm probably already curious about what I'll take on next."
    }
}

const About = () => {
    const [currentItems, setCurrentItems] = useState(sweCurrents);
    const [activeTitle, setActiveTitle] = useState('SOFTWARE ENGINEER');
    const [activeSmiskiImages, setActiveSmiskiImages] = useState(smiskiImages['SOFTWARE ENGINEER']);
    const [activePolaroidPic, setActivePolaroidPic] = useState(polaroidPics['SOFTWARE ENGINEER']);
    const [isRightArrowShown, setIsRightArrowShown] = useState(true);
    const [overlayVisible, setOverlayVisible] = useState(false);
   

    
    const toggleArrow = () => {
        setIsRightArrowShown(!isRightArrowShown)
    }

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
                    className="aboutMarquee" items={currentItems}/>
                </div>
                
            </section>

        <section className={styles.themeContainerWrapper}>
        <section className={styles.themeContainer}>
                <h4>Hi, I'm Lillian - your friendly neighborhood </h4>

                <div className={styles.themeOptions}>
                    <div className={styles.titleAndArrow}
                    onClick={toggleArrow}>
                        <p id="activeTheme" className={styles.activeAboutText}>{activeTitle}</p>
                        <img id="rightArrow" className={`${styles.rightArrow} ${isRightArrowShown ? '' : styles.hideVisibility}`}
                        

                        onClick={() => {
                           setOverlayVisible(true);
                           setIsRightArrowShown(false);
                            
                        }}
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiM0NDNCMzIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik00IDEyaDE1Ljg3OW0tNi4xMjkgNi43NWw1LjY5LTUuNjljLjI5Mi0uMjkyLjQzOS0uNjc2LjQzOS0xLjA2TTEzLjc1IDUuMjVsNS42OSA1LjY5Yy4yOTIuMjkyLjQzOS42NzYuNDM5IDEuMDYiLz48L3N2Zz4=" alt="right arrow" />

                        <img className={`${styles.leftArrow} ${isRightArrowShown ? styles.hideVisibility : ''}`} 
                        
                        onClick={() => {
                            setOverlayVisible(false);
                            setIsRightArrowShown(true);
                        }}

                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KCTxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzUzNGE0MSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTIwIDEySDQuMTIxbTYuMTI5IDYuNzVsLTUuNjktNS42OUExLjUgMS41IDAgMCAxIDQuMTIyIDEybTYuMTI5LTYuNzVsLTUuNjkgNS42OUExLjUgMS41IDAgMCAwIDQuMTIyIDEyIiAvPgo8L3N2Zz4=" alt="left arrow" />
                    </div>

                    <div className={`${styles.overlayContainer} ${overlayVisible ? styles.makeVisible : ''}`}>
                        <p>{aboutThemeTexts[activeTitle]?.bioText}</p>
                    </div>

                    <div className={styles.inactiveAboutButtons}>
                        <button id={styles.theme0} 
                        className={activeTitle === 'SOFTWARE ENGINEER' ? `${styles.hideThemeButton}` : ''}
                        onClick={() => {
                            setCurrentItems(sweCurrents);
                            setActiveTitle('SOFTWARE ENGINEER');
                            setActiveSmiskiImages(smiskiImages['SOFTWARE ENGINEER']);
                            setActivePolaroidPic(polaroidPics['SOFTWARE ENGINEER'])
                        }}>SOFTWARE ENGINEER</button>
                        <button id={styles.theme1}  
                        className={activeTitle === 'FOODIE' ? `${styles.hideThemeButton}` : ''}
                        onClick={() => {
                            setCurrentItems(foodieCurrents);
                            setActiveTitle('FOODIE');
                            setActiveSmiskiImages(smiskiImages['FOODIE']);    
                            setActivePolaroidPic(polaroidPics['FOODIE'])
                        }}>FOODIE</button>
                        <button id={styles.theme2}
                        className={activeTitle === 'SIDE QUEST ENTHUSIAST' ? `${styles.hideThemeButton}` : ''}
                        onClick={() => {
                            setCurrentItems(sqeCurrents);
                            setActiveTitle('SIDE QUEST ENTHUSIAST');
                            setActiveSmiskiImages(smiskiImages['SIDE QUEST ENTHUSIAST']);
                            setActivePolaroidPic(polaroidPics['SIDE QUEST ENTHUSIAST']);
                            }}>SIDE QUEST ENTHUSIAST</button>
                    </div>
                </div>
            </section>
        </section>
        

        <div className={styles.polaroidWrapper}>
            <img className={`${styles.smiski} ${styles[activeSmiskiImages.className]}`} src={activeSmiskiImages.imgSrc} alt={activeSmiskiImages.alt} />
            <img className={styles.aboutImg} src={activePolaroidPic.polaroidImgSrc} alt="" />
            <img className={styles.polaroid} src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2dzZWp0YzlnemV2bTVtdG55Mjkxa3Vrd3h1dHE5bWtkbDV3OWtxNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/t8nUMbu4NHNFQUKTq5/giphy.gif" alt="" />
        </div>
        
    </section>
    </section>
    );
}

export {About}