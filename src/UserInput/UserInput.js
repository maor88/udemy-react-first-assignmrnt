import React from "react";
import './UserInput.css';

const userInput = props => {
  return (
    <div>
      <input className="userInput" onChange={props.onTextChange} />
    </div>
  );
};

export default userInput;
