import React from 'react';
import Button from './Button';
import './App.css'
const App = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <h1>My App</h1>
      <Button text="Click me" onClick={handleClick} />
    </div>
  );
};

export default App;