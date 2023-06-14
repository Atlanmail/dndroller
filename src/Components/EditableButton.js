import React, { useState } from 'react';
import * as Diceroller from './DiceRoller.js'
import './EditableButton.css'
const EditableButton = ({ initialText }) => {
  const [text, setText] = useState(initialText);

  const handleButtonClick = () => {
    console.log("Button clicked!")
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input className = "button" type="text" value={text} onChange={handleTextChange} />
      <button onClick={handleButtonClick}>Click me</button>
    </div>
  );
};

export default EditableButton;