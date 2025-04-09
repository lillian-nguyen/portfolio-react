export function ProjectContent({sectionTitle, projectName, videoSrc, projectBlurb, technologies}){
    return(
        <section className="cards individualProject">
            <h2>{sectionTitle}</h2>
            <video src={videoSrc} autoPlay loop muted></video>
            <span className="project-title">{projectName}</span>
            <p className="project-description">{projectBlurb}</p>

            <section className="technologies">
                {technologies.map((tech, index) => (
                    <Technologies
                        key={index}
                        techImgSrc={tech.imgSrc}
                        techName={tech.name}
                    />
                ))}
            </section>
        </section>
    )
}

export function Technologies({techImgSrc, techName}){
    return(
        <section className="technologies">
                <section className="icons">
                    <img src={techImgSrc} alt={techName} />
                    <span>{techName}</span>
                </section>
        </section>
    )
}