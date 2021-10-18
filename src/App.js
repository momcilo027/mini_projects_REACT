import './App.css';
import React, { useState } from 'react';
import List from './List_components/List';
import { Winner_arr } from './Tic_tac_toe/Winner';

function App() {

  // COUNTER
  const [counter, setCounter] = useState(0);
  const plus_one = () =>{
    setCounter(prevState => prevState + 1);
  }
  const minus_one = () =>{
    setCounter(prevState => prevState - 1);
  }
  // end of COUNTER

  // LIST
  const teamList = [
    {
      name: 'Adam Sendler',
      id: 1,
    },
    {
      name: 'Nicole Smith',
      id: 2,
    },
    {
      name: 'Tom Hardy',
      id: 3,
    },
    {
      name: 'James Shaw',
      id: 4,
    },
  ]
  // end of LIST

  // TIC TAC TOE
  const [board, setBoard] = useState(Array(9).fill('-'));
  const [xIsNext, setXisNext] = useState(true);
  const winner = Winner_arr(board);
  const [xWins, setXwon] = useState(0);
  const [oWins, setOwon] = useState(0);
  const input_val = xIsNext ? "X" : "O"
  const handleClick = e => {
    setBoard([
      board[e.target.id] = input_val
    ])
    setBoard([...board])
    setXisNext(!xIsNext);
  }
  const handleReset = () => {
    setXwon(winner == "X" ? (xWins + 1) : xWins)
    setOwon(winner == "O" ? (oWins + 1) : oWins)
    for(var i = 0; i < 9; i++){
      setBoard([
        board[i] = '-'
      ])
      setBoard([...board])
    }
  }

  return (
    <div className="App">
      <div className="tic_tac_toe">
        <h1>Tic Tac Toe</h1>
        <div className="score">
          <h1>X : {xWins}</h1>
          <h1>O : {oWins}</h1>
        </div>
        <div className="round_winner">
          <h1>ROUND WINNER</h1>
          <h1>{winner}</h1>
          <button className="reset_btn" onClick={handleReset}>RESET BOARD</button>
        </div>
        <div className="board">
          {board.map((value, i) => (
            <button key={i} id={i} className="board_btn" onClick={handleClick}>{value}</button>
          ))}
        </div>
      </div>
      <hr />
      <div className="list_main">
        <h1>List of people</h1>
        <List list={teamList} />
      </div>
      <hr />
      <div className="counter_div">
        <h1>- Counter App -</h1>
        <h1>{counter}</h1>
        <button onClick={plus_one}>+</button>
        <button onClick={minus_one}>-</button>
      </div>
    </div>
  );
}

export default App;
