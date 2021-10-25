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
    setXisNext(!xIsNext)
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
  // end of TIC TAC Toe

  // CODE cracker

  const [code, setCode] = useState(Array(4).fill(null));
  const [enteredValue, setEnteredValue] = useState(0);
  const [hint, setHint] = useState('test');
  const [generated, setGenerated] = useState(false);

  const generate_code = () =>{
    var num1 = Math.floor(Math.random() * (0, 10))
    var num2 = Math.floor(Math.random() * (0, 10))
    var num3 = Math.floor(Math.random() * (0, 10))
    var num4 = Math.floor(Math.random() * (0, 10))
    setCode(code[0] = num1)
    setCode(code[1] = num2)
    setCode(code[2] = num3)
    setCode(code[3] = num4)
    setCode([...code])
    setGenerated(!generated)
    console.log(code)
  }

  const try_and_hints = () =>{
    var code1 = code[0]
    var code2 = code[1]
    var code3 = code[2]
    var code4 = code[3]

    var vals = enteredValue.toString().split('').map(val => parseInt(val, 10))
    var val1 = vals[0]
    var val2 = vals[1]
    var val3 = vals[2]
    var val4 = vals[3]

    if(code1 == val1){

    }

  }

  // end of CODE cracker

  return (
    <div className="App">
      <div className="pw">
        <h1>Crack the code...</h1>
        <h1>X - X - X - X</h1>
        <button className="generate" onClick={generated ? null : generate_code}>Generate</button> <br/>
        <input id="code" name='code' className="code" placeholder="XXXX" maxlength="4" onChange={event => setEnteredValue(event.target.value)}/> <br/>
        <button className="try" onClick={try_and_hints}>TRY</button>
        <div>
          <h1>HINTS</h1>
          <h3>{hint}</h3>
        </div>
      </div>
      <hr />
      <div className="tic_tac_toe">
        <h1>Tic Tac Toe</h1>
        <div className="score">
          <h1>X : {xWins}</h1>
          <h1>O : {oWins}</h1>
        </div>
        <div className="round_winner">
          <h1 className={(winner == '-' || winner == null) ? 'next_info' : 'winner_info'}>{(winner == '-' || winner == null) ? 'NEXT ON MOVE' : 'WINNER'}</h1>
          <h1>{(winner == '-' || winner == null) ? input_val : winner}</h1>
          <button className="reset_btn" onClick={handleReset}>RESET BOARD</button>
        </div>
        <div className="board">
          {board.map((value, i) => (
            <button key={i} id={i} className="board_btn" onClick={(value == '-' && ( winner == '-' || winner == null )) ? handleClick : null}>{value}</button>
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
