import React from "react";
import Card from "../Card/Card";
import { CardFlex } from "./Cards.style";

const Cards = ({ cards, bookmarked, handleSave }) => {
  return (
    <CardFlex>
      {cards.map((item) => (
        <Card
          key={item.id}
          item={item}
          bookmarked={bookmarked}
          handleSave={handleSave}
        />
      ))}
    </CardFlex>
  );
};

export default Cards;
