import React from 'react';

const Circle = ({ circleColor, topPos, leftPos }) => {
    return(
    <div className="absolute w-12 h-12 rounded-full" style={{ backgroundColor: circleColor, top: topPos, left: leftPos }}></div>
    );
}

const Circles = () => {
  return(
  <section className="circle-container">
    <Circle
      circleColor="rgba(68, 90, 41, 0.6)"
      topPos="7rem"
      leftPos="12rem"
      // circleOrder="first"
    />
    <Circle
      circleColor="rgba(210, 133, 26, 0.6)"
      topPos="9rem"
      leftPos="8.5rem"
      // circleOrder="first"
    />
    <Circle
      circleColor="rgba(81, 68, 57, 0.9)"
      topPos="5rem"
      leftPos="16rem"
      // circleOrder="first"
    />
  </section>
  )
}

export default Circles;