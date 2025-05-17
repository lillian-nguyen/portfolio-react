import React, {useState} from "react"
import LocalDate from "../LocalDate"
import Circles from "./Hero Img/Circle"
import BlobImage from "./Hero Img/BlobImage"
import { WhiteOutline } from "./Hero Img/BlobImage"
import Button from "../Button"

const HeroMobile = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMobileMenu = () => setMenuOpen(!menuOpen)

    return(
        <>
         {/* hamburger menu (mobile) */}
         <div className="md:hidden">
                <Button 
                variant={menuOpen ? "close" : "hamburger"} 
                onClick={toggleMobileMenu}
                />
            </div>

            {/* mobile links */}
            {menuOpen && (
                <>
                    <div className="absolute top-12 left-0 w-full h-screen bg-[#fef3c7] p-4 z-50"></div>
                    
                    <div className="md:hidden">
                    <MobileMenu />
                    </div>
                </>
            )}


        <Button
        style={{backgroundColor: '#445A29'}}
        />
        <h1 className="hero-header">LILLIAN NGUYEN</h1>
        <section className="marquee enable-animation">
                <ul className="marquee__content">
                    <li className="marquee__item">
                        <p>SOFTWARE ENGINEER</p>
                    </li>
                    <li className="marquee__item">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAATpJREFUWEftltENgyAQhs9NeNA5quMwhXYKxqmdQx/cxBYjDUEOfhRjmsiTMeh9999/BwVdvIqL49MNkKTAoERXELUz0bOSU5ejfDDAoERdEL1M0FwQ/wMwKqGzr23ZSznBCXDlgn7gyp+zDFEAYzwug6NeYAHWwA9Xdgak1+9XmOUZXRuAWMbAj/tSTg2wb9myARiVmNGPA2VpKjlBSpyhAKV0h9cDq+tbsP4/IfYYMtgFKMiewIY62oZ6Y8CYSYbzeQYC0B/6zDkTwWY7NAkZFdjszeRESgMr4BnHLIB9bsQ6AgZwVeDkd/0SUyEJYIWofUMmMrr7L/Dbd4lJBuDMhExQn2rZAJAzxOeHbACmPHp66nujrVTIB1kBTFC7HLFZcQqAVY7opDwFINQtrolPA0DvFDfA5Qp8AO9pmSHy3RIFAAAAAElFTkSuQmCC" className="sparkle" alt="sparkle icon" />
                    </li>
                    <li className="marquee__item">
                        <p>FREELANCER</p>
                    </li>
                    <li className="marquee__item">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAATpJREFUWEftltENgyAQhs9NeNA5quMwhXYKxqmdQx/cxBYjDUEOfhRjmsiTMeh9999/BwVdvIqL49MNkKTAoERXELUz0bOSU5ejfDDAoERdEL1M0FwQ/wMwKqGzr23ZSznBCXDlgn7gyp+zDFEAYzwug6NeYAHWwA9Xdgak1+9XmOUZXRuAWMbAj/tSTg2wb9myARiVmNGPA2VpKjlBSpyhAKV0h9cDq+tbsP4/IfYYMtgFKMiewIY62oZ6Y8CYSYbzeQYC0B/6zDkTwWY7NAkZFdjszeRESgMr4BnHLIB9bsQ6AgZwVeDkd/0SUyEJYIWofUMmMrr7L/Dbd4lJBuDMhExQn2rZAJAzxOeHbACmPHp66nujrVTIB1kBTFC7HLFZcQqAVY7opDwFINQtrolPA0DvFDfA5Qp8AO9pmSHy3RIFAAAAAElFTkSuQmCC" className="sparkle" alt="sparkle icon" />
                    </li>
                    <li className="marquee__item">
                        <p>BAKER</p>
                    </li>
                    <li className="marquee__item">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAATpJREFUWEftltENgyAQhs9NeNA5quMwhXYKxqmdQx/cxBYjDUEOfhRjmsiTMeh9999/BwVdvIqL49MNkKTAoERXELUz0bOSU5ejfDDAoERdEL1M0FwQ/wMwKqGzr23ZSznBCXDlgn7gyp+zDFEAYzwug6NeYAHWwA9Xdgak1+9XmOUZXRuAWMbAj/tSTg2wb9myARiVmNGPA2VpKjlBSpyhAKV0h9cDq+tbsP4/IfYYMtgFKMiewIY62oZ6Y8CYSYbzeQYC0B/6zDkTwWY7NAkZFdjszeRESgMr4BnHLIB9bsQ6AgZwVeDkd/0SUyEJYIWofUMmMrr7L/Dbd4lJBuDMhExQn2rZAJAzxOeHbACmPHp66nujrVTIB1kBTFC7HLFZcQqAVY7opDwFINQtrolPA0DvFDfA5Qp8AO9pmSHy3RIFAAAAAElFTkSuQmCC" className="sparkle" alt="sparkle icon" />
                    </li>
                    <li className="marquee__item">
                        <p>SMISKI COLLECTOR</p>
                    </li>
                    <li className="marquee__item">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAATpJREFUWEftltENgyAQhs9NeNA5quMwhXYKxqmdQx/cxBYjDUEOfhRjmsiTMeh9999/BwVdvIqL49MNkKTAoERXELUz0bOSU5ejfDDAoERdEL1M0FwQ/wMwKqGzr23ZSznBCXDlgn7gyp+zDFEAYzwug6NeYAHWwA9Xdgak1+9XmOUZXRuAWMbAj/tSTg2wb9myARiVmNGPA2VpKjlBSpyhAKV0h9cDq+tbsP4/IfYYMtgFKMiewIY62oZ6Y8CYSYbzeQYC0B/6zDkTwWY7NAkZFdjszeRESgMr4BnHLIB9bsQ6AgZwVeDkd/0SUyEJYIWofUMmMrr7L/Dbd4lJBuDMhExQn2rZAJAzxOeHbACmPHp66nujrVTIB1kBTFC7HLFZcQqAVY7opDwFINQtrolPA0DvFDfA5Qp8AO9pmSHy3RIFAAAAAElFTkSuQmCC" className="sparkle" alt="sparkle icon" />
                    </li>
                </ul>

                <ul aria-hidden="true" className="marquee__content">
                <li className="marquee__item">
                        <p>SOFTWARE ENGINEER</p>
                    </li>
                    <li className="marquee__item">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAATpJREFUWEftltENgyAQhs9NeNA5quMwhXYKxqmdQx/cxBYjDUEOfhRjmsiTMeh9999/BwVdvIqL49MNkKTAoERXELUz0bOSU5ejfDDAoERdEL1M0FwQ/wMwKqGzr23ZSznBCXDlgn7gyp+zDFEAYzwug6NeYAHWwA9Xdgak1+9XmOUZXRuAWMbAj/tSTg2wb9myARiVmNGPA2VpKjlBSpyhAKV0h9cDq+tbsP4/IfYYMtgFKMiewIY62oZ6Y8CYSYbzeQYC0B/6zDkTwWY7NAkZFdjszeRESgMr4BnHLIB9bsQ6AgZwVeDkd/0SUyEJYIWofUMmMrr7L/Dbd4lJBuDMhExQn2rZAJAzxOeHbACmPHp66nujrVTIB1kBTFC7HLFZcQqAVY7opDwFINQtrolPA0DvFDfA5Qp8AO9pmSHy3RIFAAAAAElFTkSuQmCC" class="sparkle" alt="sparkle icon" />
                    </li>
                    <li className="marquee__item">
                        <p>FREELANCER</p>
                    </li>
                    <li className="marquee__item">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAATpJREFUWEftltENgyAQhs9NeNA5quMwhXYKxqmdQx/cxBYjDUEOfhRjmsiTMeh9999/BwVdvIqL49MNkKTAoERXELUz0bOSU5ejfDDAoERdEL1M0FwQ/wMwKqGzr23ZSznBCXDlgn7gyp+zDFEAYzwug6NeYAHWwA9Xdgak1+9XmOUZXRuAWMbAj/tSTg2wb9myARiVmNGPA2VpKjlBSpyhAKV0h9cDq+tbsP4/IfYYMtgFKMiewIY62oZ6Y8CYSYbzeQYC0B/6zDkTwWY7NAkZFdjszeRESgMr4BnHLIB9bsQ6AgZwVeDkd/0SUyEJYIWofUMmMrr7L/Dbd4lJBuDMhExQn2rZAJAzxOeHbACmPHp66nujrVTIB1kBTFC7HLFZcQqAVY7opDwFINQtrolPA0DvFDfA5Qp8AO9pmSHy3RIFAAAAAElFTkSuQmCC" className="sparkle" alt="sparkle icon" />
                    </li>
                    <li className="marquee__item">
                        <p>BAKER</p>
                    </li>
                    <li className="marquee__item">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAATpJREFUWEftltENgyAQhs9NeNA5quMwhXYKxqmdQx/cxBYjDUEOfhRjmsiTMeh9999/BwVdvIqL49MNkKTAoERXELUz0bOSU5ejfDDAoERdEL1M0FwQ/wMwKqGzr23ZSznBCXDlgn7gyp+zDFEAYzwug6NeYAHWwA9Xdgak1+9XmOUZXRuAWMbAj/tSTg2wb9myARiVmNGPA2VpKjlBSpyhAKV0h9cDq+tbsP4/IfYYMtgFKMiewIY62oZ6Y8CYSYbzeQYC0B/6zDkTwWY7NAkZFdjszeRESgMr4BnHLIB9bsQ6AgZwVeDkd/0SUyEJYIWofUMmMrr7L/Dbd4lJBuDMhExQn2rZAJAzxOeHbACmPHp66nujrVTIB1kBTFC7HLFZcQqAVY7opDwFINQtrolPA0DvFDfA5Qp8AO9pmSHy3RIFAAAAAElFTkSuQmCC" className="sparkle" alt="sparkle icon" />
                    </li>
                    <li className="marquee__item">
                        <p>SMISKI COLLECTOR</p>
                    </li>
                    <li className="marquee__item">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAATpJREFUWEftltENgyAQhs9NeNA5quMwhXYKxqmdQx/cxBYjDUEOfhRjmsiTMeh9999/BwVdvIqL49MNkKTAoERXELUz0bOSU5ejfDDAoERdEL1M0FwQ/wMwKqGzr23ZSznBCXDlgn7gyp+zDFEAYzwug6NeYAHWwA9Xdgak1+9XmOUZXRuAWMbAj/tSTg2wb9myARiVmNGPA2VpKjlBSpyhAKV0h9cDq+tbsP4/IfYYMtgFKMiewIY62oZ6Y8CYSYbzeQYC0B/6zDkTwWY7NAkZFdjszeRESgMr4BnHLIB9bsQ6AgZwVeDkd/0SUyEJYIWofUMmMrr7L/Dbd4lJBuDMhExQn2rZAJAzxOeHbACmPHp66nujrVTIB1kBTFC7HLFZcQqAVY7opDwFINQtrolPA0DvFDfA5Qp8AO9pmSHy3RIFAAAAAElFTkSuQmCC" className="sparkle" alt="sparkle icon" />
                    </li>
                </ul>
        </section>

        <section className="hero-bio">
            <h4>Based in Houston, TX,</h4>
            <p>I blend <span className="italic">code and creativity</span> to build web experiences that feel as good as they look.</p>
        </section>

        <section className="selfie-container">
            <Circles/>
            <BlobImage/>
            <WhiteOutline/>
        </section>
        </>
    )
}

export default HeroMobile;