import React from 'react';
import styles from "../Hero.module.css"

const Circle = ({ circleColor, topPos, leftPos }) => {
    return(
    <div className="absolute w-12 h-12 rounded-full" style={{ backgroundColor: circleColor, top: topPos, left: leftPos }}></div>
    );
}

const Circles = () => {
  return(
  <section className={styles.circleContainer}>
    <Circle
      circleColor="rgba(68, 90, 41, 0.9)"
      topPos="7rem"
      leftPos="12.5rem"
      // circleOrder="first"
    />
    <Circle
      circleColor="rgba(210, 133, 26, 0.9)"
      topPos="10.5rem"
      leftPos="10rem"
    />
    <Circle
      circleColor="rgba(81, 68, 57, 0.9)"
      topPos="3.3rem"
      leftPos="14.6rem"
    />
  </section>
  )
}

export default Circles;