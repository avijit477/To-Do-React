import React, { useState } from "react";
import {
  CardInput,
  CardWrapper,
  BookMarkIcon,
  EditIcon,
  DeleteIcon,
} from "./Card.style";
import { BsBookmarksFill } from "react-icons/bs";
import { AiFillEdit, AiFillCheckCircle, AiFillDelete } from "react-icons/ai";

const Card = ({ item, bookmarked, handleSave, handleDelete }) => {
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
      <DeleteIcon>
        <AiFillDelete onClick={() => handleDelete(item.id)} />
      </DeleteIcon>
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
