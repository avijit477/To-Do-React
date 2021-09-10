import React from "react";

const Heading = (props) => {
  return (
    <div>
      <h1 className="heading">{props.text}</h1>
    </div>
  );
};

export default Heading;
