import React, { Fragment } from "react";
import Clear from "../Clear/Clear";
import Heading from "../Heading/Heading";
import ToForm from "../ToForm/ToForm";
import ToList from "../ToList/ToList";
import { Right } from "./RightPanel.style";

const RightPanel = ({
  handleChange,
  handleSubmit,
  handleEdit,
  userInput,
  handleDelete,
  data,
}) => {
  return (
    <Right>
      <ToForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        userInput={userInput}
      />
      {/* <Heading text="Grocery Bud" /> */}
      <ToList data={data} handleDelete={handleDelete} handleEdit={handleEdit} />
      <Clear />
    </Right>
  );
};

export default RightPanel;
