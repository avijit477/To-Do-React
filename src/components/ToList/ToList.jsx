import React, { Fragment } from "react";
import ListItem from "../ListItem/ListItem";

const ToList = (props) => {
  return (
    <Fragment>
      {props.data.map((x) => {
        return (
          <ListItem
            x={x}
            key={x.id}
            handleDelete={props.handleDelete}
            handleEdit={props.handleEdit}
          />
        );
      })}
    </Fragment>
  );
};

export default ToList;
