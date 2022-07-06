import React from 'react'
import { useState } from 'react'
import Board from './components/Board'
import History from './components/History'
import "./Styles/Root.scss"
import { calculateWinner } from './helper'
import StatusMessage from './components/StatusMessage'

const NEW_GAME = [{board: Array(9).fill(null),isXNext : true}];
const App = () => {

  const [history ,setHistory] = useState(NEW_GAME);
  const [currentMove , setCurrentmove] = useState(0);
  const current =history[currentMove];

  console.log('history' , history);

  const {winner , winningSquares} = calculateWinner(current.board);
  
  

  const handleSquareClick = position => {
    if (current.board[position] || winner ) {
      return;
    }
    setHistory(prev => {
      const last = prev[prev.length - 1];


      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : 'O';
        }
        
        return square;
      });

      return prev.concat({ board: newBoard , isXNext : !last.isXNext});
    });
    setCurrentmove(prev => prev+1); 
   
  };

  const moveTo = (move) =>{
    setCurrentmove(move);
  }

  const new_game= () => { 
    setHistory(NEW_GAME)
    setCurrentmove(0)
   };

  return (
    <div class="app">
    <h1>TIC <span class="text-green">TAC</span> TOE</h1>
    <StatusMessage winner={winner} current={current}/>
    <Board board={current.board} handleSquareClick={handleSquareClick} winningSquares={winningSquares}/>
    <button onClick={new_game} class={`btn-reset ${winner ? 'active' : ''}`}>Start New Game </button>
    <h2 style={{fontWeight:'normal' , fontFamily:'cursive'}}>Current Game History</h2>
    <History history={history} moveTo={moveTo} currentMove={currentMove}/>
    <div class="bg-balls"></div>
    </div>
  )
}

export default App