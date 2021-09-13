import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import LeftPanel from "../LeftPanel/LeftPanel";
import RightPanel from "../RightPanel/RightPanel";
import { Partition } from "./ToDoContainer.style";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const ToDoContainer = () => {
  const [userInput, setUserInput] = useState("");
  const [loader, setLoader] = useState(true);
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem("cards")) || []
  );
  const [showCards, setShowCards] = useState(cards);
  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
    setShowCards(cards);
  }, [cards]);
  useEffect(() => {
    let arr = cards.map((i) => ({ ...i, editState: true }));
    setCards(arr);
    setLoader(false);
  }, []);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let arr = cards.filter((x) => {
      return x.content.toLowerCase().startsWith(userInput.toLowerCase().trim());
    });

    setShowCards(arr);
    setUserInput(``);
  };

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
  };

  const handleDelete = (id) => {
    let arr = cards.filter((x) => x.id !== id);
    setCards(arr);
  };

  return (
    <Partition>
      <LeftPanel handleCard={handleCard} />
      {loader ? (
        <Loader
          type="Circles"
          color="purple"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      ) : (
        <RightPanel
          cards={showCards}
          bookmarked={bookmarked}
          handleSave={handleSave}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          userInput={userInput}
          handleDelete={handleDelete}
        />
      )}
    </Partition>
  );
};
export default ToDoContainer;
