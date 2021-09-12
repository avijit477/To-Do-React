import React from "react";
import Card from "../Card/Card";
import { CardFlex } from "./Cards.style";

const Cards = ({ cards, bookmarked }) => {
  return (
    <CardFlex>
      {cards.map((item) => (
        <Card key={item.id} item={item} bookmarked={bookmarked} />
      ))}
    </CardFlex>
  );
};

export default Cards;
