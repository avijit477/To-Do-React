import React from "react";
import { FiEdit, FiDelete } from "react-icons/fi";

const ListItem = ({ x, handleDelete }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div>{x.content}</div>
      <span>
        <FiEdit />
      </span>
      <span onClick={() => handleDelete(x.id)}>
        <FiDelete />
      </span>
    </div>
  );
};

export default ListItem;
