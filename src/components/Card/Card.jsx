import React, { useState, useEffect } from "react";
import { CardInput, CardWrapper, BookMarkIcon, EditIcon } from "./Card.style";
import { BsBookmarksFill } from "react-icons/bs";
import { AiFillEdit, AiFillCheckCircle } from "react-icons/ai";

const Card = ({ item, bookmarked, handleSave }) => {
  const [content, setContent] = useState(item.content || "");
  return (
    <CardWrapper item={item}>
      <BookMarkIcon
        onClick={() => bookmarked(item.id, item.bookmarked)}
        item={item}
      >
        <BsBookmarksFill />
      </BookMarkIcon>

      <CardInput
        value={content}
        item={item}
        onChange={(e) => setContent(e.target.value)}
      />
      <EditIcon>
        {item.editState ? (
          <AiFillEdit
            onClick={() => handleSave(item.id, item.editState, content)}
          />
        ) : (
          <AiFillCheckCircle
            onClick={() => handleSave(item.id, item.editState, content)}
          />
        )}
      </EditIcon>
    </CardWrapper>
  );
};

export default Card;
