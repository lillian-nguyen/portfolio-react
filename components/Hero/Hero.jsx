// import React, {useState} from "react"
import LocalDate from "../LocalDate"
import Circles from "./Hero Img/Circle"
import { BlobImage, WhiteOutline } from "./Hero Img/BlobImage"
import Button from "../Button"
import styles from "./Hero.module.css"

const HeroMobile = () => {

    return(
        <section className={styles.heroContainer}>
        <Button
        variant="hamburger"
        style={{backgroundColor: '#445A29'}}
        />
        <h1 className={styles.heroHeader}>LILLIAN NGUYEN</h1>
        <section className={`${styles.marquee} ${styles.enableAnimation}`}>
                <ul className={styles.marqueeContent}>
                    <li className={styles.marqueeItem}>
                        <p>SOFTWARE ENGINEER</p>
                    </li>
                    <li className={styles.marqueeItem}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAATpJREFUWEftltENgyAQhs9NeNA5quMwhXYKxqmdQx/cxBYjDUEOfhRjmsiTMeh9999/BwVdvIqL49MNkKTAoERXELUz0bOSU5ejfDDAoERdEL1M0FwQ/wMwKqGzr23ZSznBCXDlgn7gyp+zDFEAYzwug6NeYAHWwA9Xdgak1+9XmOUZXRuAWMbAj/tSTg2wb9myARiVmNGPA2VpKjlBSpyhAKV0h9cDq+tbsP4/IfYYMtgFKMiewIY62oZ6Y8CYSYbzeQYC0B/6zDkTwWY7NAkZFdjszeRESgMr4BnHLIB9bsQ6AgZwVeDkd/0SUyEJYIWofUMmMrr7L/Dbd4lJBuDMhExQn2rZAJAzxOeHbACmPHp66nujrVTIB1kBTFC7HLFZcQqAVY7opDwFINQtrolPA0DvFDfA5Qp8AO9pmSHy3RIFAAAAAElFTkSuQmCC" className={styles.sparkle} alt="sparkle icon" />
                    </li>
                    <li className={styles.marqueeItem}>
                        <p>FREELANCER</p>
                    </li>
                    <li className={styles.marqueeItem}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAATpJREFUWEftltENgyAQhs9NeNA5quMwhXYKxqmdQx/cxBYjDUEOfhRjmsiTMeh9999/BwVdvIqL49MNkKTAoERXELUz0bOSU5ejfDDAoERdEL1M0FwQ/wMwKqGzr23ZSznBCXDlgn7gyp+zDFEAYzwug6NeYAHWwA9Xdgak1+9XmOUZXRuAWMbAj/tSTg2wb9myARiVmNGPA2VpKjlBSpyhAKV0h9cDq+tbsP4/IfYYMtgFKMiewIY62oZ6Y8CYSYbzeQYC0B/6zDkTwWY7NAkZFdjszeRESgMr4BnHLIB9bsQ6AgZwVeDkd/0SUyEJYIWofUMmMrr7L/Dbd4lJBuDMhExQn2rZAJAzxOeHbACmPHp66nujrVTIB1kBTFC7HLFZcQqAVY7opDwFINQtrolPA0DvFDfA5Qp8AO9pmSHy3RIFAAAAAElFTkSuQmCC" className={styles.sparkle} alt="sparkle icon" />
                    </li>
                    <li className={styles.marqueeItem}>
                        <p>BAKER</p>
                    </li>
                    <li className={styles.marqueeItem}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAATpJREFUWEftltENgyAQhs9NeNA5quMwhXYKxqmdQx/cxBYjDUEOfhRjmsiTMeh9999/BwVdvIqL49MNkKTAoERXELUz0bOSU5ejfDDAoERdEL1M0FwQ/wMwKqGzr23ZSznBCXDlgn7gyp+zDFEAYzwug6NeYAHWwA9Xdgak1+9XmOUZXRuAWMbAj/tSTg2wb9myARiVmNGPA2VpKjlBSpyhAKV0h9cDq+tbsP4/IfYYMtgFKMiewIY62oZ6Y8CYSYbzeQYC0B/6zDkTwWY7NAkZFdjszeRESgMr4BnHLIB9bsQ6AgZwVeDkd/0SUyEJYIWofUMmMrr7L/Dbd4lJBuDMhExQn2rZAJAzxOeHbACmPHp66nujrVTIB1kBTFC7HLFZcQqAVY7opDwFINQtrolPA0DvFDfA5Qp8AO9pmSHy3RIFAAAAAElFTkSuQmCC" className={styles.sparkle} alt="sparkle icon" />
                    </li>
                    <li className={styles.marqueeItem}>
                        <p>SMISKI COLLECTOR</p>
                    </li>
                    <li className={styles.marqueeItem}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAATpJREFUWEftltENgyAQhs9NeNA5quMwhXYKxqmdQx/cxBYjDUEOfhRjmsiTMeh9999/BwVdvIqL49MNkKTAoERXELUz0bOSU5ejfDDAoERdEL1M0FwQ/wMwKqGzr23ZSznBCXDlgn7gyp+zDFEAYzwug6NeYAHWwA9Xdgak1+9XmOUZXRuAWMbAj/tSTg2wb9myARiVmNGPA2VpKjlBSpyhAKV0h9cDq+tbsP4/IfYYMtgFKMiewIY62oZ6Y8CYSYbzeQYC0B/6zDkTwWY7NAkZFdjszeRESgMr4BnHLIB9bsQ6AgZwVeDkd/0SUyEJYIWofUMmMrr7L/Dbd4lJBuDMhExQn2rZAJAzxOeHbACmPHp66nujrVTIB1kBTFC7HLFZcQqAVY7opDwFINQtrolPA0DvFDfA5Qp8AO9pmSHy3RIFAAAAAElFTkSuQmCC" className={styles.sparkle} alt="sparkle icon" />
                    </li>
                </ul>

                <ul aria-hidden="true" className={styles.marqueeContent}>
                <li className={styles.marqueeItem}>
                        <p>SOFTWARE ENGINEER</p>
                    </li>
                    <li className={styles.marqueeItem}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAATpJREFUWEftltENgyAQhs9NeNA5quMwhXYKxqmdQx/cxBYjDUEOfhRjmsiTMeh9999/BwVdvIqL49MNkKTAoERXELUz0bOSU5ejfDDAoERdEL1M0FwQ/wMwKqGzr23ZSznBCXDlgn7gyp+zDFEAYzwug6NeYAHWwA9Xdgak1+9XmOUZXRuAWMbAj/tSTg2wb9myARiVmNGPA2VpKjlBSpyhAKV0h9cDq+tbsP4/IfYYMtgFKMiewIY62oZ6Y8CYSYbzeQYC0B/6zDkTwWY7NAkZFdjszeRESgMr4BnHLIB9bsQ6AgZwVeDkd/0SUyEJYIWofUMmMrr7L/Dbd4lJBuDMhExQn2rZAJAzxOeHbACmPHp66nujrVTIB1kBTFC7HLFZcQqAVY7opDwFINQtrolPA0DvFDfA5Qp8AO9pmSHy3RIFAAAAAElFTkSuQmCC" className={styles.sparkle} alt="sparkle icon" />
                    </li>
                    <li className={styles.marqueeItem}>
                        <p>FREELANCER</p>
                    </li>
                    <li className={styles.marqueeItem}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAATpJREFUWEftltENgyAQhs9NeNA5quMwhXYKxqmdQx/cxBYjDUEOfhRjmsiTMeh9999/BwVdvIqL49MNkKTAoERXELUz0bOSU5ejfDDAoERdEL1M0FwQ/wMwKqGzr23ZSznBCXDlgn7gyp+zDFEAYzwug6NeYAHWwA9Xdgak1+9XmOUZXRuAWMbAj/tSTg2wb9myARiVmNGPA2VpKjlBSpyhAKV0h9cDq+tbsP4/IfYYMtgFKMiewIY62oZ6Y8CYSYbzeQYC0B/6zDkTwWY7NAkZFdjszeRESgMr4BnHLIB9bsQ6AgZwVeDkd/0SUyEJYIWofUMmMrr7L/Dbd4lJBuDMhExQn2rZAJAzxOeHbACmPHp66nujrVTIB1kBTFC7HLFZcQqAVY7opDwFINQtrolPA0DvFDfA5Qp8AO9pmSHy3RIFAAAAAElFTkSuQmCC" className={styles.sparkle} alt="sparkle icon" />
                    </li>
                    <li className={styles.marqueeItem}>
                        <p>BAKER</p>
                    </li>
                    <li className={styles.marqueeItem}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAATpJREFUWEftltENgyAQhs9NeNA5quMwhXYKxqmdQx/cxBYjDUEOfhRjmsiTMeh9999/BwVdvIqL49MNkKTAoERXELUz0bOSU5ejfDDAoERdEL1M0FwQ/wMwKqGzr23ZSznBCXDlgn7gyp+zDFEAYzwug6NeYAHWwA9Xdgak1+9XmOUZXRuAWMbAj/tSTg2wb9myARiVmNGPA2VpKjlBSpyhAKV0h9cDq+tbsP4/IfYYMtgFKMiewIY62oZ6Y8CYSYbzeQYC0B/6zDkTwWY7NAkZFdjszeRESgMr4BnHLIB9bsQ6AgZwVeDkd/0SUyEJYIWofUMmMrr7L/Dbd4lJBuDMhExQn2rZAJAzxOeHbACmPHp66nujrVTIB1kBTFC7HLFZcQqAVY7opDwFINQtrolPA0DvFDfA5Qp8AO9pmSHy3RIFAAAAAElFTkSuQmCC" className={styles.sparkle} alt="sparkle icon" />
                    </li>
                    <li className={styles.marqueeItem}>
                        <p>SMISKI COLLECTOR</p>
                    </li>
                    <li className={styles.marqueeItem}>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAATpJREFUWEftltENgyAQhs9NeNA5quMwhXYKxqmdQx/cxBYjDUEOfhRjmsiTMeh9999/BwVdvIqL49MNkKTAoERXELUz0bOSU5ejfDDAoERdEL1M0FwQ/wMwKqGzr23ZSznBCXDlgn7gyp+zDFEAYzwug6NeYAHWwA9Xdgak1+9XmOUZXRuAWMbAj/tSTg2wb9myARiVmNGPA2VpKjlBSpyhAKV0h9cDq+tbsP4/IfYYMtgFKMiewIY62oZ6Y8CYSYbzeQYC0B/6zDkTwWY7NAkZFdjszeRESgMr4BnHLIB9bsQ6AgZwVeDkd/0SUyEJYIWofUMmMrr7L/Dbd4lJBuDMhExQn2rZAJAzxOeHbACmPHp66nujrVTIB1kBTFC7HLFZcQqAVY7opDwFINQtrolPA0DvFDfA5Qp8AO9pmSHy3RIFAAAAAElFTkSuQmCC" className={styles.sparkle} alt="sparkle icon" />
                    </li>
                </ul>
        </section>

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