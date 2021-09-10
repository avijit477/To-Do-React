import React, { Fragment, useState } from "react";
import Clear from "./Clear";
import Heading from "./Heading";
import ToForm from "./ToForm";
import ToList from "./ToList";
import { v4 as uuidv4 } from "uuid";

const ToDoContainer = () => {
  const [data, setData] = useState([]);
  const [userInput, setUserInput] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setUserInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let content = userInput;
    let id = uuidv4();
    setData([...data, { id, content }]);
    setUserInput("");
    console.log(data);
  };
  const handleDelete = (id) => {
    let arr = data.filter((x) => x.id !== id);
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