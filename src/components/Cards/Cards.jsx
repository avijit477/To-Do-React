import React from "react";
import Card from "../Card/Card";
import { CardFlex } from "./Cards.style";

const Cards = ({ cards, bookmarked, handleSave, handleDelete }) => {
  return (
    <CardFlex>
      {cards.map((item) => (
        <Card
          key={item.id}
          item={item}
          bookmarked={bookmarked}
          handleSave={handleSave}
          handleDelete={handleDelete}
        />
      ))}
    </CardFlex>
  );
};

export default Cards;
