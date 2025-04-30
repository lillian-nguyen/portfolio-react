import React from 'react';

const Button = ({ children, style, onClick }) => {
    return(
        <>
        <button style={style} onClick={onClick} className="button">
        { children }
       </button>
        </>
    )
}

export default Button;