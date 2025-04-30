import React from 'react';

const CardItem = ({ imgSrc, alt, headertext, variant = "default" }) => (
    <section className={`update-card card-${variant}`}>
        <img src={imgSrc} alt={alt} />
        <hr />
        <h6>{headertext}</h6>
    </section>
)

const CenterCard = () => {
    return(
        <section className="centercard">
        <section className="update-content">
            <CardItem
                imgSrc=""
                alt ="alt here"
                headertext="this is example header 1"
            />
             <CardItem
                imgSrc=""
                alt ="alt here"
                headertext="this is example header 1"
                variant="highlight"
            />
       </section>
        </section>
    )
}

export default CenterCard;