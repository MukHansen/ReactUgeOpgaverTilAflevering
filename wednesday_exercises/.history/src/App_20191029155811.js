import React from "react";
import "./App.css";


function App() {
  return (
    <div className="App">
      <h1>Exercise 1</h1>
      <p>{upper("please uppercase me")}</p>
      <p>{upper(text1)}</p>
      <p>{upper(text2)}</p>
      <p>{upper(text3)}</p>
    </div>
  );
}

export default App;