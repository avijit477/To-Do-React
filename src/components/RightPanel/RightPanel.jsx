import React, { Fragment } from "react";
import Clear from "../Clear/Clear";
import Heading from "../Heading/Heading";
import ToForm from "../ToForm/ToForm";
import ToList from "../ToList/ToList";

const RightPanel = ({
  handleChange,
  handleSubmit,
  handleEdit,
  userInput,
  handleDelete,
  data,
}) => {
  return (
    <Fragment>
      <Heading text="Grocery Bud" />
      <ToForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        userInput={userInput}
      />
      <ToList data={data} handleDelete={handleDelete} handleEdit={handleEdit} />
      <Clear />
    </Fragment>
  );
};

export default RightPanel;
