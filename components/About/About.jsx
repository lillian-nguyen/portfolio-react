import styles from "./About.module.css"
import { Marquee } from "../Marquee";
import {useState, useEffect } from "react";
import { useMenu } from "../Navbar/MenuContext";

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
    'SOFTWARE ENGINEER': [{
        polaroidImgSrc: '/mountainSelfie.png', alt: 'selfie on mountain'
    }], 
    'FOODIE': [
        { polaroidImgSrc: '/comTam.png', alt: 'Vietnamese broken rice dish'},
        { polaroidImgSrc: '/Naks.png', alt: 'Filipino chicken, egg, and rice'},
        { polaroidImgSrc: '/potatoScoops.png', alt: 'scoops of Korean mashed potatoes'},
        { polaroidImgSrc: '/pho.png', alt: 'bowl of Pho'}
    ], 
    'SIDE QUEST ENTHUSIAST': [
        { polaroidImgSrc: '/mountainView.png', alt: 'top view of mountain and fields in Vietnam' }, 
        { polaroidImgSrc: '/pinkFlowers.png', alt: 'pink flowers' },
        { polaroidImgSrc: '/eggTarts.png', alt: 'egg tarts'},
        { polaroidImgSrc: '/medal.png', alt: 'selfie with running medal' }
    ]
}

const aboutThemeTexts = {
    'SOFTWARE ENGINEER': {
        bioText: "With a background in healthcare and soft spot for human-centered design, my goal is to bridge the gap between tech and the people who use it. I'm excited about making technology work better for people, not just around them."
    },
    'FOODIE': {
        bioText: "Star baker who is on a simultaneous cooking journey. Currently (and indefinitely) collecting sourdough recipes and pizza tour suggestions."
    },
    'SIDE QUEST ENTHUSIAST': {
        bioText: "Avid baker, smiski collector, a flower-picture-taker. I'm also a novice runner, broadway appreciator, and traveler."
    }
}

const About = () => {
    const [currentItems, setCurrentItems] = useState(sweCurrents);
    const [activeTitle, setActiveTitle] = useState('SOFTWARE ENGINEER');
    const [activeSmiskiImages, setActiveSmiskiImages] = useState(smiskiImages['SOFTWARE ENGINEER']);
    const [polaroidIndex, setPolaroidIndex] = useState(0);
    const [isRightArrowShown, setIsRightArrowShown] = useState(true);
    const [overlayVisible, setOverlayVisible] = useState(false);

    
    const toggleArrow = () => {
        setIsRightArrowShown(!isRightArrowShown)
    }

    useEffect(() => {
        // function to check and set interval only on large screens
        const startCarousel = () => {
            if (window.innerWidth > 600) {
                return null;
            }
    
            return setInterval(() => {
                setPolaroidIndex(prev => (prev + 1) % polaroidPics[activeTitle].length);
            }, 3000);
        };
    
        let interval = startCarousel();
    
        // re-check on window resize
        const handleResize = () => {
            if (interval) {
                clearInterval(interval);
                interval = null;
            }
            interval = startCarousel();
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
            if (interval) clearInterval(interval);
            window.removeEventListener("resize", handleResize);
        };
    }, [activeTitle]);
    
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

useEffect(() => {
  const handleResize = () => setWindowWidth(window.innerWidth);
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

    const {toggleMenu} = useMenu();

    const Polaroid = ({ smiskiImage, polaroidImage, polaroidClass, style }) => {
        return (
            <div className={`${styles.polaroidWrapper} ${styles[polaroidClass]}`} style={style}>
                <img
                    className={`${styles.smiski} ${styles[smiskiImage.className]}`}
                    src={smiskiImage.imgSrc}
                    alt={smiskiImage.alt}
                />
    
                <div className={styles.polaroid}>
                    <img
                        className={styles.aboutImg}
                        src={polaroidImage.polaroidImgSrc}
                        alt={polaroidImage.alt}
                    />
                </div>
            </div>
        );
    };

return(
    <section className={styles.AboutSection} id="about">
       
        <h2 className={styles.aboutHeader}>ABOUT ME</h2>
       
       <section className={styles.aboutContainer}>

            <section className={styles.currently}>
                <div>
                    <h4>CURRENTLY</h4>
                    <Marquee
                    className="aboutMarquee" items={currentItems}/>
                </div>
                
            </section>

            <div className={styles.themeAndPolaroidWrapper}>
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
                        src="/right-arrow.png" alt="right arrow" />

                        <img className={`${styles.leftArrow} ${isRightArrowShown ? styles.hideVisibility : ''}`} 
                        
                        onClick={() => {
                            setOverlayVisible(false);
                            setIsRightArrowShown(true);
                        }}

                        src="/left-arrow.png" />
                    </div>

                    <div className={`${styles.overlayContainer} ${overlayVisible ? styles.makeVisible : ''}`}>
                        <p className={styles.bioText}>{aboutThemeTexts[activeTitle]?.bioText}</p>
                    </div>

                    <div className={styles.inactiveAboutButtons}>
                        <button id={styles.theme0} 
                        className={activeTitle === 'SOFTWARE ENGINEER' ? `${styles.hideThemeButton}` : ''}
                        onClick={() => {
                            setCurrentItems(sweCurrents);
                            setActiveTitle('SOFTWARE ENGINEER');
                            setActiveSmiskiImages(smiskiImages['SOFTWARE ENGINEER']);
                            setPolaroidIndex(0);
                        }}>SOFTWARE ENGINEER</button>
                        <button id={styles.theme1}  
                        className={activeTitle === 'FOODIE' ? `${styles.hideThemeButton}` : ''}
                        onClick={() => {
                            setCurrentItems(foodieCurrents);
                            setActiveTitle('FOODIE');
                            setActiveSmiskiImages(smiskiImages['FOODIE']);    
                            setPolaroidIndex(0);
                        }}>FOODIE</button>
                        <button id={styles.theme2}
                        className={activeTitle === 'SIDE QUEST ENTHUSIAST' ? `${styles.hideThemeButton}` : ''}
                        onClick={() => {
                            setCurrentItems(sqeCurrents);
                            setActiveTitle('SIDE QUEST ENTHUSIAST');
                            setActiveSmiskiImages(smiskiImages['SIDE QUEST ENTHUSIAST']);
                            setPolaroidIndex(0);
                            }}>SIDE QUEST ENTHUSIAST</button>
                    </div>
                    </div>
                </section>
                </section>

                <Polaroid
                smiskiImage={activeSmiskiImages}
                polaroidImage={polaroidPics[activeTitle][polaroidIndex]}
                polaroidClass='smallerPolaroid'
                style={{display: windowWidth >= 600 ? 'none' : 'block'}}
                />

            </div>
            
        
        </section>
    </section>
    );
}

export {About}