import React from 'react';
import styles from "../Hero.module.css"

const Circle = ({ circleColor, topPos, leftPos }) => {
    return(
    <div className="absolute w-12 h-12 rounded-full" style={{ backgroundColor: circleColor, top: topPos, left: leftPos }}></div>
    );
}

const Circles = ({circleData}) => {
  const defaultCircles = [
    {circleColor: "rgba(68, 90, 41, 0.9)", topPos: "7rem", leftPos: "12.5rem"},
    {circleColor: "rgba(210, 133, 26, 0.9)", topPos: "10.5rem", leftPos: "10rem"},
    {circleColor: "rgba(81, 68, 57, 0.9)", topPos: "3.3rem", leftPos: "14.6rem"}
  ];

  const circles = circleData || defaultCircles;
  return(
    <section className={styles.circleContainer}>
      {circles.map((circle, index) => (
        <Circle
          key={index}
          circleColor={circle.circleColor}
          topPos={circle.topPos}
          leftPos={circle.leftPos}
        />
      ))}

    </section>

  // <section className={styles.circleContainer}>
  //   <Circle
  //     circleColor="rgba(68, 90, 41, 0.9)"
  //     topPos="7rem"
  //     leftPos="12.5rem"
  //   />
  //   <Circle
  //     circleColor="rgba(210, 133, 26, 0.9)"
  //     topPos="10.5rem"
  //     leftPos="10rem"
  //   />
  //   <Circle
  //     circleColor="rgba(81, 68, 57, 0.9)"
  //     topPos="3.3rem"
  //     leftPos="14.6rem"
  //   />
  // </section>
    
  )
}

export default Circles;