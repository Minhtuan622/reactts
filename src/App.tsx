import React from 'react';
import './App.css';
import MainGame from "./TicTacToe/MainGame";

function App() {
  return (
    <div className="bg-slate-800 h-[100vh] flex justify-center items-center">
      <MainGame/>
    </div>
  );
}

export default App;
