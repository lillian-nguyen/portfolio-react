import React from "react"

const Marquee = ({className, items = []}) => {
    const renderItems = () => (
        items.map((element, index) => (
            <React.Fragment key={index}>
                <li className="marqueeItem">
                    <p>{element.text}</p>
                </li>
                <li className="marqueeItem">
                    <img 
                    src={element.iconSrc}
                    alt={element.iconAlt || ''}
                    aria-hidden="true"
                    className={`${className} ${element.iconClass}`}
                    />
                </li>
            </React.Fragment>
        ))
    )

    return(
        <section className={`marquee enableAnimation ${className}`}>
            <ul className="marqueeContent">
                {renderItems()}
            </ul>
            <ul className="marqueeContent" aria-hidden="true">
                {renderItems()}
            </ul>
        </section>
    )
}

export {Marquee}