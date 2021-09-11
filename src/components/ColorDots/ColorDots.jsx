import React from "react";
import { ColorDot } from "./ColorDots.style";
import "animate.css";

const ColorDots = ({ color }) => {
  return (
    <ColorDot className="animate__animated animate__fadeIn" color={color} />
  );
};

export default ColorDots;
