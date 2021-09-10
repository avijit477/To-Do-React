import React, { Fragment } from "react";
import ListItem from "./ListItem";

const ToList = (props) => {
  return (
    <Fragment>
      {props.data.map((x, idx) => {
        return (
          <ListItem
            x={x}
            key={idx}
            handleDelete={props.handleDelete}
            handleEdit={props.handleEdit}
          />
        );
      })}
    </Fragment>
  );
};

export default ToList;
