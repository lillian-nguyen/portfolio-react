import React from 'react';

const Square = ({ className = "" }) => {
    return(
        <div className={`square ${className}`}></div>
    );
}

export default Square;