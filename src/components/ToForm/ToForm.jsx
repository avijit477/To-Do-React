import React from "react";

const ToForm = ({ handleChange, handleSubmit, userInput }) => {
  console.log(userInput);
  return (
    <form className="ToForm" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        className="input"
        onChange={(e) => handleChange(e)}
        // onSubmit={(e) => handleSubmit(e)}
        value={userInput}
      />
      <input
        type="submit"
        className="submitBtn"
        value="Submit"
        // onClick={(e) => handleSubmit(e)}
      />
    </form>
  );
};

export default ToForm;
