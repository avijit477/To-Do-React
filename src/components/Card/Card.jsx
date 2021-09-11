import React from "react";
import { CardInput, CardWrapper, BookMarkIcon, EditIcon } from "./Card.style";
import { BsBookmarksFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";

const Card = ({ item }) => {
  return (
    <CardWrapper item={item}>
      <BookMarkIcon>
        <BsBookmarksFill />
      </BookMarkIcon>

      <CardInput item={item} />

      <EditIcon>
        <AiFillEdit />
      </EditIcon>
    </CardWrapper>
  );
};

export default Card;
