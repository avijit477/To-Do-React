import React from "react";
import Cards from "../Cards/Cards";
import ToForm from "../ToForm/ToForm";
import { Right } from "./RightPanel.style";

const RightPanel = ({
  cards,
  bookmarked,
  handleSave,
  handleSubmit,
  handleChange,
  userInput,
  handleDelete,
}) => {
  return (
    <Right>
      <ToForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        userInput={userInput}
      />
      <Cards
        cards={cards}
        bookmarked={bookmarked}
        handleSave={handleSave}
        handleDelete={handleDelete}
      />
    </Right>
  );
};

export default RightPanel;
