import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import LeftPanel from "../LeftPanel/LeftPanel";
import RightPanel from "../RightPanel/RightPanel";
import { Partition } from "./ToDoContainer.style";

const ToDoContainer = () => {
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem("cards")) || []
  );
  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);
  // useEffect(() => {
  //   cards.forEach((i) => {
  //     i.editState = true;
  //   });
  // }, []);

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
  const handleSave = (id, status, value) => {
    let arr = cards.map((i, j) => {
      if (i.id === id) {
        return { ...i, editState: !status, content: value };
      } else {
        return { ...i };
      }
    });
    setCards(arr);
    console.log(arr);
  };

  return (
    <Partition>
      <LeftPanel handleCard={handleCard} />
      <RightPanel
        cards={cards}
        bookmarked={bookmarked}
        handleSave={handleSave}
      />
    </Partition>
  );
};
export default ToDoContainer;
