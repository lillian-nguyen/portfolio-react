import Nav from "./Nav"

export default function Hero(){
    return(
        <>
        <Nav/>
        <section className="hero">
        {/* <section id="photoContainer"> */}
        {/* <section id="hero-content">
            <img id="selfie" src="src/assets/beach.jpg" alt="Lillian Nguyen selfie"/>
            <section className="header-text">
                <h1>Lillian Nguyen</h1>
                <p>software engineer based in Houston, TX</p>
            </section>
        </section> */}
        
        <section className="header-text">
            {/* <img id="selfie" src="src/assets/beach.jpg" alt="Lillian Nguyen selfie"/> */}
            <h1>Lillian Nguyen</h1>
            <p>software engineer based in Houston, TX</p>
        </section>

        <div className="scrollArrowContainer bounce">
            <span></span>
        </div>
        </section>
    {/* </section> */}
        </>
    )
}