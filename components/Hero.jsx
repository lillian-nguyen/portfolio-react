// import Nav from "./Nav"
import LocalDate from "./LocalDate"
import Sidenav from "./Sidenav"
import UpdateBox from "./UpdateBox"
import Card from "./Card"
import CenterCard from "./CenterCard"

export default function Hero(){
    return(
        <>
        {/* <Nav/> */}
        <Sidenav/>
        <LocalDate/>
        <section className="hero">
        <Card/>
        <section className="header-text">
            <h1>Lillian Nguyen</h1>
            <p>Software engineer based in Houston, TX</p>
        </section>
        </section>
        <UpdateBox/>
        <CenterCard/>
        </>
    )
}