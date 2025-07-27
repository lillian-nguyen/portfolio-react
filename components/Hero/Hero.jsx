import React, {useState, useEffect} from "react"
import { Marquee } from "../Marquee"
import Circles from "./Hero Img/Circle"
import { BlobImage, WhiteOutline } from "./Hero Img/BlobImage"
import styles from "./Hero.module.css"
import { useMenu } from "../Navbar/MenuContext"

const sparkleIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAATpJREFUWEftltENgyAQhs9NeNA5quMwhXYKxqmdQx/cxBYjDUEOfhRjmsiTMeh9999/BwVdvIqL49MNkKTAoERXELUz0bOSU5ejfDDAoERdEL1M0FwQ/wMwKqGzr23ZSznBCXDlgn7gyp+zDFEAYzwug6NeYAHWwA9Xdgak1+9XmOUZXRuAWMbAj/tSTg2wb9myARiVmNGPA2VpKjlBSpyhAKV0h9cDq+tbsP4/IfYYMtgFKMiewIY62oZ6Y8CYSYbzeQYC0B/6zDkTwWY7NAkZFdjszeRESgMr4BnHLIB9bsQ6AgZwVeDkd/0SUyEJYIWofUMmMrr7L/Dbd4lJBuDMhExQn2rZAJAzxOeHbACmPHp66nujrVTIB1kBTFC7HLFZcQqAVY7opDwFINQtrolPA0DvFDfA5Qp8AO9pmSHy3RIFAAAAAElFTkSuQmCC'

const elements = [
    {text: 'SOFTWARE ENGINEER', iconSrc: sparkleIcon, iconClass: 'sparkle'},
    {text: 'FREELANCER', iconSrc: sparkleIcon, iconClass: 'sparkle'},
    {text: 'BAKER', iconSrc: sparkleIcon, iconClass: 'sparkle'},
    {text: 'SMISKI COLLECTOR', iconSrc: sparkleIcon, iconClass: 'sparkle'}
]

const CircleParent = () => {
    const [circlePositions, setCirclePositions] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 356){
                setCirclePositions([
                    { circleColor: "rgba(68, 90, 41, 0.9)", topPos: "2rem", leftPos: "3rem" },
                    { circleColor: "rgba(210, 133, 26, 0.9)", topPos: "4rem", leftPos: "1rem" },
                    { circleColor: "rgba(81, 68, 57, 0.9)", topPos: "1rem",   leftPos: "5rem" }
                ]);
            } else {
                setCirclePositions(null);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return <Circles circleData={circlePositions} />
}

const HeroMobile = () => {

    const {toggleMenu} = useMenu();

    return(
        <section className={`${styles.heroContainer} scroll-mt-20`} id="hero">
        <h1 className={styles.heroHeader}>LILLIAN NGUYEN</h1>
        <Marquee className="heroMarquee" items={elements}/>

        <section className={styles.heroBio}>
            <h4>Based in Houston, TX,</h4>
            <p>I blend <span className="italic">code and creativity</span> to build web experiences that feel as good as they look.</p>
        </section>

        <section className={styles.selfieContainer}>
            <Circles/>
            <BlobImage/>
            <WhiteOutline/>
        </section>
        </section>
    )
}

export default HeroMobile;
