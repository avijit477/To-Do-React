import React, { useState } from "react";
import { CardInput, CardWrapper, BookMarkIcon, EditIcon } from "./Card.style";
import { BsBookmarksFill } from "react-icons/bs";
import { AiFillEdit, AiFillCheckCircle } from "react-icons/ai";

const Card = ({ item, bookmarked }) => {
  let [pointer, setPointer] = useState(true);
  const handleSave = () => {
    setPointer(!pointer);
  };

  return (
    <CardWrapper item={item}>
      <BookMarkIcon
        onClick={() => bookmarked(item.id, item.bookmarked)}
        item={item}
      >
        <BsBookmarksFill />
      </BookMarkIcon>

      <CardInput item={item} pointer={pointer} />
      <EditIcon>
        {pointer ? (
          <AiFillCheckCircle onClick={handleSave} />
        ) : (
          <AiFillEdit onClick={handleSave} />
        )}
      </EditIcon>
    </CardWrapper>
  );
};

export default Card;
