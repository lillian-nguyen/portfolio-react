export default function About({sectionTitle, showSelfie, paragraph1, paragraph2, buttonText, classification}){
    return (
        <section className="cards about-container" id="about-section" style={{backgroundColor: classification === 'about' ? '#A1ADB3' :  '#CDD3C9'}}>
            <section className="card">
                <h2>{sectionTitle}</h2>
            </section>
          {showSelfie &&  <section id="selfie-container">
                    <img id="selfie" src="src/assets/beach.jpg" alt="Lillian Nguyen selfie"/>
                    <div className="active-button"><div className="inner-active-button"></div></div>
            </section>}
            <p className="biop1">{paragraph1}</p>
            <p>{paragraph2}</p>

            {buttonText && <button>{buttonText}</button>}
        </section>
    )
}