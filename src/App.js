import React from 'react';
import Button from './Components/Button.js';
import * as DiceRoller from './Components/DiceRoller.js'
import './App.css'
const App = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <h1>My App</h1>
      <Button text="Click me" onClick={DiceRoller.isValidDicestring} />
    </div>
  );
};

export default App;