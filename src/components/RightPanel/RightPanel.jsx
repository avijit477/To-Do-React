import React from "react";
import Cards from "../Cards/Cards";
import ToForm from "../ToForm/ToForm";
import { Right } from "./RightPanel.style";

const RightPanel = ({ cards, bookmarked, handleSave }) => {
  return (
    <Right>
      <ToForm />
      <Cards cards={cards} bookmarked={bookmarked} handleSave={handleSave} />
    </Right>
  );
};

export default RightPanel;
