import React, { Fragment, useState } from "react";
import Clear from "./Clear";
import Heading from "./Heading";
import ToForm from "./ToForm";
import ToList from "./ToList";
import { v4 as uuidv4 } from "uuid";

const ToDoContainer = () => {
  const [data, setData] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [replaceId, setReplaceId] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setUserInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userInput.length) {
      alert("Cannot accept empty To-Do");
    } else if (!replaceId.length) {
      let content = userInput;
      let id = uuidv4();
      setData([...data, { id, content }]);
    } else {
      let idx = data.findIndex((i) => i.id === replaceId);
      let arr = [...data];
      arr.splice(idx, 1, { id: replaceId, content: userInput });
      setData(arr);
    }
    setUserInput("");
    setReplaceId("");
    console.log(data);
  };
  const handleDelete = (id) => {
    let arr = data.filter((x) => x.id !== id);
    setData(arr);
  };
  const handleEdit = (id) => {
    let item = data.find((i) => i.id === id);
    setUserInput(item.content);
    setReplaceId(id);
  };
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
export default ToDoContainer;
