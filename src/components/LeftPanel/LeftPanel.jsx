import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import ColorDots from "../ColorDots/ColorDots";
import { Left, PlusIcon, LeftPanelHeading } from "./LeftPanel.style";

const colorArray = ["#F5972C", "#F3542A", "#7049F0", "#0AA4F6", "#C6D947"];

const LeftPanel = () => {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <Left>
      <LeftPanelHeading>Notepad</LeftPanelHeading>
      <PlusIcon onClick={handleVisible}>
        <AiFillPlusCircle fontSize={"30px"} color={"tomato"} />
      </PlusIcon>
      {visible && colorArray.map((color) => <ColorDots color={color} />)}
    </Left>
  );
};

export default LeftPanel;
