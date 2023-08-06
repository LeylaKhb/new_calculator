import React from 'react';
import './App.css';
import CalculatorFrame from "./components/CalculatorFrame";
import Calculator from "./models/Calculator";

function App() {
  return (
    <div className="App">
      <CalculatorFrame calculator={new Calculator()}></CalculatorFrame>
    </div>
  );
}

export default App;
