import React from "react";

const ToForm = ({ handleChange, handleSubmit, userInput }) => {
  return (
    <form className="ToForm" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        className="input"
        onChange={(e) => handleChange(e)}
        value={userInput}
      />
      <input type="submit" className="submitBtn" value="Submit" />
    </form>
  );
};

export default ToForm;
