import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import LeftPanel from "../LeftPanel/LeftPanel";
import RightPanel from "../RightPanel/RightPanel";
import { Partition } from "./ToDoContainer.style";

const ToDoContainer = () => {
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem("cards")) || []
  );
  const [bookmark, setBookmak] = useState([]);
  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

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
  const bookmarked = (id, status) => {
    let arr = cards.map((i, j) => {
      if (i.id === id) {
        return { ...i, bookmarked: !status };
      } else {
        return { ...i };
      }
    });
    setCards(arr);
    console.log(arr);
    // setBookmak();
  };

  // useEffect(() => {
  //   console.log(cards);
  // }, [cards]);

  return (
    <Partition>
      <LeftPanel handleCard={handleCard} />
      <RightPanel cards={cards} bookmarked={bookmarked} />
    </Partition>
  );
};
export default ToDoContainer;
