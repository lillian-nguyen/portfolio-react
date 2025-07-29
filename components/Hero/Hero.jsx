import React, {useState, useEffect} from "react"
import { Marquee } from "../Marquee"
import styles from "./Hero.module.css"
import { useMenu } from "../Navbar/MenuContext"

const sparkleIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAATpJREFUWEftltENgyAQhs9NeNA5quMwhXYKxqmdQx/cxBYjDUEOfhRjmsiTMeh9999/BwVdvIqL49MNkKTAoERXELUz0bOSU5ejfDDAoERdEL1M0FwQ/wMwKqGzr23ZSznBCXDlgn7gyp+zDFEAYzwug6NeYAHWwA9Xdgak1+9XmOUZXRuAWMbAj/tSTg2wb9myARiVmNGPA2VpKjlBSpyhAKV0h9cDq+tbsP4/IfYYMtgFKMiewIY62oZ6Y8CYSYbzeQYC0B/6zDkTwWY7NAkZFdjszeRESgMr4BnHLIB9bsQ6AgZwVeDkd/0SUyEJYIWofUMmMrr7L/Dbd4lJBuDMhExQn2rZAJAzxOeHbACmPHp66nujrVTIB1kBTFC7HLFZcQqAVY7opDwFINQtrolPA0DvFDfA5Qp8AO9pmSHy3RIFAAAAAElFTkSuQmCC'

const elements = [
    {text: 'SOFTWARE ENGINEER', iconSrc: sparkleIcon, iconClass: 'sparkle'},
    {text: 'FREELANCER', iconSrc: sparkleIcon, iconClass: 'sparkle'},
    {text: 'BAKER', iconSrc: sparkleIcon, iconClass: 'sparkle'},
    {text: 'SMISKI COLLECTOR', iconSrc: sparkleIcon, iconClass: 'sparkle'}
]

const WhiteOutline = () => {
    return (
    <svg className={styles.BlobOutline} viewBox="0 0 555 623" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M269.73 3.75233C352.656 -7.70146 434.782 38.0637 488.261 109.733C543.147 183.289 564.993 281.313 546.613 374.819C528.04 469.3 471.804 549.747 393.585 591.37C315.744 632.792 224.798 630.254 147.725 587.079C72.1902 544.766 10.9343 466.217 2.58127 372.339C-4.93536 287.861 62.0678 227.99 109.902 161.992C157.027 96.9744 195.376 14.0221 269.73 3.75233Z" stroke="white" strokeWidth="4"/>
</svg>
    )
}

const BlobImage = () => {
    return (
      <div className={styles.blobWrapper}>
      <svg
        viewBox="0 0 621 615"
        className={styles.blob}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <clipPath id="blobClip">
            <path d="M330.569 15.03C408.989 5.65 497.803 -19.27 557.851 32.02C619.694 84.85 626.168 178.54 616.499 259.307C607.915 331.008 554.857 381.997 509.249 437.986C454.92 504.681 415.158 594.684 330.569 610.318C236.765 627.655 135.619 589.059 70.8656 519.01C7.90608 450.902 -10.7524 350.514 6.09034 259.307C20.6026 180.719 87.9832 128.633 151.83 80.5672C204.533 40.8903 265.066 22.8615 330.569 15.0301Z" />
          </clipPath>
        </defs>

        <g clipPath="url(#blobClip)">
          <image
            href="/beach.jpg"
            x="-60"
            y="-30"
            width="680"
            height="680"
            preserveAspectRatio="xMidYMid slice"
          />
        </g>
      </svg>
    </div>
    );
  };

const HeroContent = () => {

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
            <BlobImage/>
            <WhiteOutline/>
        </section>
        </section>
    )
}

export default HeroContent;
