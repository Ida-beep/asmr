import React from "react";
import Sketch from "react-p5";

/**
 * This P5 component is responsible for all TOUCH sound
 */
export default (props) => {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(10, 10).parent(canvasParentRef);
  };

  const draw = (p5) => {};

  return <Sketch setup={setup} draw={draw} />;
};
