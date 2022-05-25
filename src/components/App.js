import React, { useState } from "react";
import "../styles/App.css";

const Stack = () => {

  return (
    <div id="stack">
      <div className="block-container">
        <div className="op-container">
        </div>
        <div id="result">
          
        </div>
      </div>
    </div>
  );
};

const Queue = () => {

  return (
    <div id="queue">
      <div className="block-container">
        <div className="op-container">
          
        </div>
        <div id="result">

        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [structure, setStructure] = useState("stack");


  return (
    <div id="main">
      <h1 className="head">Stack and Queue Visualiser</h1>
      <div className="ds-selector">
        <select id="selectDS">
          <option value="stack">Stack</option>
          <option value="queue">Queue</option>
        </select>
      </div>
      {structure === "stack" && <Stack />}
      {structure === "queue" && <Queue />}
    </div>
  );
};

export default App;
