import React, { useState } from 'react';
import * as Diceroller from './DiceRoller.js'
import './EditableButton.css'
const EditableButton = ({ initialText }) => {
  const [text, setText] = useState(initialText);
  const [textMemory, setTextMemory] = useState(initialText);
  const [isEditing, setIsEditing] = useState(false);


  const handleButtonClick = (event) => {
    ///console.log(event.target.className);
    ///console.log(text)

    if (event.target.className == "button") {
      console.log(text)
    }    


  };  

  const handleTextChange = (event) => {
    
    const textToChange = event.target.value;

    setText(textToChange);
  };

  const handleBlur = (event) => {
    if (Diceroller.isValidDicestring(text) == true) {
      setTextMemory(text);
      
    }
    else {
      setText(textMemory);
    }
  }
  

  return (
    <div className="editable-button-container">
        <button className="button" onClick={handleButtonClick} data="button">
            <input type="text" value={text} onInput={handleTextChange} onBlur={handleBlur} className="text" data = "text"/>
            
        </button>
    </div>
  );
};

export default EditableButton