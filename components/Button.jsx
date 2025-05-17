import React from 'react';

const iconUrl = {
    hamburger: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAI5JREFUWEftlkEOgCAMBHd/Ji9TXyY/q6lRIwGvWw7lyGWXASYlgheD85EF5iJgZoviTZCsT85LwMwOAJICAHaSm5f4FvCNVUEAQHkozPUGRKdvYpJAEugIKGT0JyKlB8JF1Bfwz6nG36g4QkJZIAnMReD+gj4VKVa4iCrJ0l2BQkRX6GgoVXAfZeQ8kAROiicuISwfoZAAAAAASUVORK5CYII=',
    close: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjMjEyNjNCIiBkPSJtMTIgMTAuNTg3bDQuOTUtNC45NWwxLjQxNCAxLjQxNGwtNC45NSA0Ljk1bDQuOTUgNC45NWwtMS40MTUgMS40MTRsLTQuOTUtNC45NWwtNC45NDkgNC45NWwtMS40MTQtMS40MTVsNC45NS00Ljk1bC00Ljk1LTQuOTVMNy4wNSA1LjYzOHoiLz48L3N2Zz4='
};

const Button = ({ variant = 'hamburger', style, onClick, className }) => {

    return(
        <button 
        variant = {variant}
        style={style} 
        onClick={onClick} 
        className={`${className} ${variant}`}
        >
            <img src={iconUrl[variant]} alt={`${variant} icon`} />
       </button>
    );
};

export default Button;