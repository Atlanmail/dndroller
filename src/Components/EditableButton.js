import React, { useState } from 'react';
import * as Diceroller from './DiceRoller.js'
import './EditableButton.css'
const EditableButton = ({ initialText }) => {
  const [text, setText] = useState(initialText);

  const handleButtonClick = (event) => {
    ///console.log(event.target.className);
    ///console.log(text)

    if (event.target.className == "button") {

    }
    else {
        console.log("editing")
    }
  };

  const handleTextChange = (event) => {
    
    const textToChange = event.target.value;
    setText(textToChange);
  };

  return (
    <div className="editable-button-container">
        <button className="button" onClick={handleButtonClick} data="button">
            <input type="text" value={text} onChange={handleTextChange} className="text" data = "text"/>
            
        </button>
    </div>
  );
};

export default EditableButton;