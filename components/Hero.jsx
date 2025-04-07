import Nav from "./Nav"

export default function Hero(){
    return(
        <>
        <Nav/>
        <section class="hero">
        <section id="photoContainer">
        <section className="header-text">
            <h1>Lillian Nguyen</h1>
            <p>software engineer based in Houston, TX</p>
        </section>

        <div className="scrollArrowContainer bounce">
            <span></span>
        </div>
        </section>
    </section>
        </>
    )
}