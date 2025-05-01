import React from 'react';

const UpdateItem = ({ imgSrc, alt, text }) => (
    <section className="update-item">
        <img src={imgSrc} alt={alt} />
        <span>{text}</span>
    </section>
)

const UpdateBox = () => {
    return(
        <section className="updatebox">
        <h3 id="update-header">life lately</h3>
        <hr />
        <section className="update-content">
            <UpdateItem
                imgSrc={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAYNJREFUWEftVsFRw0AMlDogHVACVEBSCpUAlVBKQgWhBDqADoRlfDc6RTpLNjNmmPjpOWtXu9KeETZ+cGN8uBL4HwoQ0Z5nCRFP2Zn6FQWIiCbgEyIeMiRWExiwnwHgqYAiYqpm6rDVmSLwMuAzofAzS2Dyd+8VFvIzaCXA30VmoktAdXfQBSdyR9HueCajiktAeyu7K4Ce/5Fv68w4vnJX42r1ptvr1FCmsUdiXihARCFwLuL5LxSardUQIKIzANzNdT6Bs0LVf2/9jIY+AOCxzFMlMMjGKfYgwLsrpeTvBpAxE1+IuBvTU8j1CQA3CQJS3gxZhngbFPiJb0GAX7wCwG3QghK/fPxiRTtz8I6I9+4WRIYwGr+RWmYOGJ41XUaCJgLeWKDzwCBRZQ6sX3NBWSHWDSIn6cZB8+JXNqDOdAd09jIqO1/2NuE/q8Dr2f1JCRFQ3Ul509evtnoJAbl+mxCoAZT9+7EuvrQC4h5Y9BO62gKrizXvFimwBvCqwJ9T4BuslvAhaJSZlQAAAABJRU5ErkJggg=="}
                alt="icon"
                text="coding @ Gridiron Survivor"
            />
            <UpdateItem
                imgSrc={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAUBJREFUWEftllEOgyAQRNmTtZ6s9WS1J9s6liUDIgE1sWngp0rq7OwsCU/cxUsuru9+w4Cq3p1zD+ccfrEmSuaNZxF5tqTlNaF3o+9YfxSRaUlAVV9UvFRnLJnJNFLSmkRkMAPqhe3dnGLbuuA9uI8SyTSBFJFeSBMd+4ZDvayBLduqiqIYla3BP/D4BitU0NlnwATJCDoKc0WkNedEZwFLvCkBFk8jl3kmNcUPjSAxgM5xeLFWZ6Jk5pQE0k5quz8tgW6gJ9AT6An0BP4ugRTJVkwIsklBg2+1zE2JLYYXoyv7a4RkKZSWLrdw9bKBVh70V/gXStPlxWzbiAd0G3EhdchkhO8swQVibeVQrZpiTCTDhVwDhRfcruWDZgNkhM9Nc+GQSq3TjVGBkm+1MJrT2J3AEePRuThLaK/O5Ql8AApnMjAUqcy0AAAAAElFTkSuQmCC"}
                alt="icon"
                text="reading: Before the Coffee Gets Cold"
            />
            <UpdateItem
                imgSrc={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAWVJREFUWEfFl1sSwiAMRZOVaVemrkxdWSwd6ABNwg2jlk8FcnJDHmU6efHJ9mkaQESuNTwzv2acgQGywVs20hjPvy0zEBCAiDyJSDNaO/1i5iWqgguQvU7GocXMkENN6KybReROREVyCICIwmFQiaOed3QhCAtAUJeNfY81GknB4ToAgNKnlHsDIdr2eTAawMj73btAqMywNACI9/1Ll/XQUGciMyQ9AJLvtQJoppg1ogdAvCkOp/iOilMtjqrCDhCIJ6C4u6UBOQMg0e2PMgKwHUIeKiBRGKCRDWxOHscRIO12Uqp5xd4+5GHWqRxJw00FLwTl4oFCjTPhQuToul88KE56FuQQpLyG+78B49aHvpLONiPgoatbDsXoV+1Yta5NTL8YSCx11I5oznBfKjgFBuuGPfqX+oM7okFT7KQa0FgGARRlMsjFqXZlVEs1AfpSCgHUIfr7p9ls4o/OTSswuhj9/wPn+Lkh3L6wQAAAAABJRU5ErkJggg=="}
                alt="icon"
                text="Baking: chocolate toffee cookies"
            />
       </section>
        </section>
    )
}

export default UpdateBox;