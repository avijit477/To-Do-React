import React from "react";
import { ColorDot } from "./ColorDots.style";
import "animate.css";

const ColorDots = ({ color, handleCard }) => {
  return (
    <ColorDot
      onClick={() => handleCard(color)}
      className="animate__animated animate__fadeIn"
      color={color}
    />
  );
};

export default ColorDots;
