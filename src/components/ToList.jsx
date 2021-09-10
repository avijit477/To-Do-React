import React, { Fragment } from "react";
import ListItem from "./ListItem";
import { v4 as uuidv4 } from "uuid";

const ToList = (props) => {
  return (
    <Fragment>
      {props.data.map((x) => {
        return <ListItem x={x} key={x.id} handleDelete={props.handleDelete} />;
      })}
    </Fragment>
  );
};

export default ToList;
