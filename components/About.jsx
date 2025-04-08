export default function About(){
    return (
        <section className="cards about-container" id="about-section">
            <section className="card">
                <h2>Hi! I'm Lillian</h2>
            </section>
            <section id="selfie-container">
                    <img id="selfie" src="src/assets/beach.jpg" alt="Lillian Nguyen selfie"/>
                    <div className="active-button"><div className="inner-active-button"></div></div>
            </section>
            <p className="biop1">I’m a full-stack software engineer dedicated to building websites and applications that serve my local community. My background in biology and healthcare brings a strong foundation in analytical thinking, problem-solving, and collaboration to every project. I develop client solutions that blend accessibility, aesthetics, and engaging user experiences, primarily using HTML, CSS, and JavaScript.
            </p>
            <p>When I'm not coding, you can find me baking sweet treats, going for a run, or diving into a good book - all of which spark joy and fuel my creativity. Let's connect and bring your vision to life!</p>
        </section>
    )
}