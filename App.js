import React from "react";
import "./App.css";
import Matrix3x3 from "./Matrix3x3";  // <-- Import your custom component

function App() {
  return (
    <div className="App">
      <Matrix3x3 />  {/* Use it like any other React component */}
    </div>
  );
}

export default App;
