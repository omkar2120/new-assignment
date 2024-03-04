import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckBoxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
  };

  return (
    <div className="App">
      <label>
        <input
          type="checkbox"
          name="option1"
          checked={checkedItems.option1 || false}
          onChange={handleCheckBoxChange}
        />
        Option 1
      </label>

      <label>
        <input 
        type="checkbox" 
        name="option2"
        checked={checkedItems.option2 || false}
        onChange={handleCheckBoxChange}
        />
        Option 2
      </label>

      <label>
        <input
         type="checkbox"
          name="option3"
          checked={checkedItems.option3 || false}
          onChange={handleCheckBoxChange}
          />
          Option 3
      </label>

      <div>
        {Object.entries(checkedItems)
          .filter(([key, value]) => value)
          .map(([key]) => (
            <span style={{ margin:'20px'}} key={key}>{key}</span>
          ))}
      </div>
    </div>
  );
}

export default App;