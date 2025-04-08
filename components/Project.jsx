export function ProjectContent({sectionTitle, projectName, videoSrc, projectBlurb}){
    return(
        <section className="cards individualProject" id="cocktailDB">
            <h2>{sectionTitle}</h2>
            <video src={videoSrc} autoPlay loop muted></video>
            <span className="project-title">{projectName}</span>
            <p className="project-description">{projectBlurb}</p>

                        {/* <section className="technologies flex justify-center align-center">
                            <div className="css-icons flex flex-col justify-center align-center">
                                <img src="assets/css-icon.svg" id="css" alt="css icon" />
                            <span>CSS</span>
                            </div>
                            <div className="javascript-icons flex flex-col justify-center align-center">
                                <img src="assets/js-icon.svg" id="javascript" alt="javascript icon" />
                                <span>JavaScript</span>
                            </div>
                        </section> */}
        </section>
    )
}