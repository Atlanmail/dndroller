import React, { useEffect, useState } from "react";

import '../App.css'


export default function Button() {
  const [storedValue, setStoredValue] = useState(0)
  const [inputValue, setInputValue] = useState('');

  const handleBigButtonClick = () => {
    // Run a function using the stored value as a parameter
    console.log('Running function with stored value:', storedValue);
  };


  const handleSmallButtonClick = () => {
    // Update the stored value with the input value
    setStoredValue(inputValue);
  };

  return (
    <div>
      <div className="big-button-container">
        <button className="big-button" onClick={handleBigButtonClick}>
          {storedValue}
        </button>
      </div>
      <div className="small-button-container">
        <button className="small-button" onClick={handleSmallButtonClick}>
          Update
        </button>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="input-field"
        />
      </div>
    </div>
  )
}