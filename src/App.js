import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [number,setnumber]=useState(0)
function handleButtonIncrement(){
  setnumber(number+1)
}
function handleButtonDecrement(){
  setnumber(number-1)
}
function Reset(){
  setnumber (0)
}
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter App</h1>
        <h2>{number}</h2>
        <div className='buttons'>
        <button onClick={()=> handleButtonIncrement()}>+</button>
        <button onClick={()=> handleButtonDecrement()}>-</button>
        <button className='reset' onClick={()=> Reset()}>Reset</button>

        </div>
      </header>
    </div>
  );
}

export default App;
