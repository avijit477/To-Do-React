import React, { Fragment, useState } from "react";
import Clear from "./Clear";
import Heading from "./Heading";
import ToForm from "./ToForm";
import ToList from "./ToList";

const ToDoContainer = () => {
  const [data, setData] = useState([]);
  const [userInput, setUserInput] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setUserInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, userInput]);
    setUserInput(``);
  };
  const handleDelete = (name) => {
    let arr = data.filter((x) => x.toLowerCase().trim() !== name);
    setData(arr);
  };

  return (
    <Fragment>
      <Heading text="Grocery Bud" />
      <ToForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        userInput={userInput}
      />
      <ToList data={data} handleDelete={handleDelete} />
      <Clear />
    </Fragment>
  );
};
export default ToDoContainer;
