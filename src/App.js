import React from 'react';
import Button from './Components/Button.js';
import * as DiceRoller from './Components/DiceRoller.js'
import './App.css'
import EditableButton from './Components/EditableButton.js';
const App = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <h1>My App</h1>
      <EditableButton initialText={"d4+2"}/>
    </div>
  );
};

export default App;