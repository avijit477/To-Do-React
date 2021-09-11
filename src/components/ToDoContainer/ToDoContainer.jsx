import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import LeftPanel from "../LeftPanel/LeftPanel";
import RightPanel from "../RightPanel/RightPanel";
import { Partition } from "./ToDoContainer.style";

const ToDoContainer = () => {
  const [cards, setCards] = useState([]);

  const handleCard = (color) => {
    let id = uuidv4();
    let obj = {
      id: id,
      color: color,
      content: "",
      editState: false,
      bookmarked: false,
    };
    setCards((cards) => {
      return [...cards, obj];
    });
  };

  useEffect(() => {
    console.log(cards);
  }, [cards]);

  return (
    <Partition>
      <LeftPanel handleCard={handleCard} />
      <RightPanel cards={cards} />
    </Partition>
  );
};
export default ToDoContainer;
