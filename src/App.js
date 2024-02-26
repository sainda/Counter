import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [userName,setUserName]=useState(0)
function handleButtonIncrement(){
  setUserName(userName+1)
}
function handleButtonDescrement(){
  setUserName(userName-1)
}
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter App</h1>
        <h2>{userName}</h2>
        <div className='buttons'>
        <button onClick={()=> handleButtonIncrement()}>+</button>
        <button onClick={()=> handleButtonDescrement()}>-</button>
        </div>
      </header>
    </div>
  );
}

export default App;
