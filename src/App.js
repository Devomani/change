import React, { useState } from "react";
import "./App.css";

export const App = () => {
  const [Color, setColor] = useState("");
  const [Change, setChange] = useState();

  return (
    <div className="App">
      <h1>Here's a Magical Color Changer</h1>
      <div className="color-background" style={{ boxShadow: `5px 5px 20px 10px ${Color}`, backgroundColor: Color }}></div>
      <input type="text" placeholder="Type your color" onChange={(e) => setChange(e.target.value)} />
      <button onClick={() => setColor(Change)}>SELECT</button>
    </div>
  );
};

export default App;