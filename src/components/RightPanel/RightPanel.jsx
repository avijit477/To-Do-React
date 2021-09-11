import React from "react";
import Cards from "../Cards/Cards";
import ToForm from "../ToForm/ToForm";
import { Right } from "./RightPanel.style";

const RightPanel = ({ cards }) => {
  return (
    <Right>
      <ToForm />
      <Cards cards={cards} />
    </Right>
  );
};

export default RightPanel;
