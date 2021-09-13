import React from "react";
import { SearchBox } from "./ToForm.style";

const ToForm = ({ handleChange, handleSubmit, userInput }) => {
  return (
    <form className="ToForm" onSubmit={(e) => handleSubmit(e)}>
      <SearchBox
        type="text"
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
