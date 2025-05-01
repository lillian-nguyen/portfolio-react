import LocalDate from "./LocalDate"
// import Sidenav from "./Sidenav"
import UpdateBox from "./UpdateBox"
import NavBar from "./NavBar"
// import Card from "./Card"
// import CenterCard from "./CenterCard"

// export default function Hero(){
//     return(
//         <>
//         {/* <Nav/> */}
//         <Sidenav/>
//         <LocalDate/>

//         <section className="hero">
//             <Card/>
//             <section className="header-text">
//                 <h1>Lillian Nguyen</h1>
//                 <p>Software engineer based in Houston, TX</p>
//             </section>
//         </section>

//         <UpdateBox/>
//         <CenterCard/>
//         </>
//     )
// }

const HeroMobile = () => {
    return(
        <>
        <h1 className="hero-header">LILLIAN NGUYEN</h1>
        <section className="enable-animation">
            <div className="marquee">
                <ul className="marquee__content">
                    <div className="marquee__item">
                        <p>SOFTWARE ENGINEER</p>
                    </div>
                    <div className="marquee__item">
                        <p>FREELANCER</p>
                    </div>
                    <div className="marquee__item">
                        <p>BAKER</p>
                    </div>
                </ul>

                <ul aria-hidden="true" className="marquee__content">
                    <div className="marquee__item">
                        <p>SOFTWARE ENGINEER</p>
                    </div>
                    <div className="marquee__item">
                        <p>FREELANCER</p>
                    </div>
                    <div className="marquee__item">
                        <p>BAKER</p>
                    </div>
                </ul>
            </div>
        </section>

        <section className="hero-bio">
            <h4>Based in Houston, TX,</h4>
            <p>I blend <span>code and creativity</span> to build web experiences that feel as good as they look.</p>
        </section>

        {/* <UpdateBox/> */}

        <NavBar/>
        </>
    )
}

export default HeroMobile;