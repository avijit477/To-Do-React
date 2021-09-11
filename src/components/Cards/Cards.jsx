import React from "react";
import Card from "../Card/Card";
import { CardFlex } from "./Cards.style";

const Cards = ({ cards }) => {
  return (
    <CardFlex>
      {cards.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </CardFlex>
  );
};

export default Cards;
