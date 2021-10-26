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
  const [hint, setHint] = useState(Array(5).fill(null));
  const [generated, setGenerated] = useState(false);
  const [cong, setCong] = useState(null)

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

    if(num1 > num2){
      var one_two = num1 / num2
      setHint(hint[2] = ("x1 / x2 = "+one_two))
      setHint([...hint])
    }else if(num1 < num2){
      var two_one = num2 / num1
      setHint(hint[2] = ("x2 / x1 = "+two_one))
      setHint([...hint])
    }else{
      setHint(hint[2] = ("x1 / x2 = 0"))
      setHint([...hint])
    }

    if(num4 > num2){
      var four_two = num4 - num2
      setHint(hint[4] = ("x4 - x2 = "+four_two))
      setHint([...hint])
    }else if(num4 < num2){
      var two_four = num2 - num4
      setHint(hint[4] = ("x2 - x4 = "+two_four))
      setHint([...hint])
    }else{
      setHint(hint[4] = ("x4 - x2 = 0"))
      setHint([...hint])
    }

    var sum = num1 + num2 + num3 + num4
    var one_four = num1 + num4
    var three_four = num3 * num4
    setHint(hint[3] = ("x3 * x4 = "+three_four))
    setHint(hint[0] = ("Sum of code is : "+sum))
    setHint(hint[1] = ("x1 + x4 = "+one_four))
    setHint([...hint])
    setCong(null)
  }

  const try_and_hints = () =>{

    var vals = enteredValue.toString().split('').map(val => parseInt(val, 10))

    if(code[0] == vals[0] && code[1] == vals[1] && code[2] == vals[2] && code[3] == vals[3]){
      setCong("CONGRATULATIONS")
      setHint(hint[0] = ("You cracked the CODE"))
      setHint(hint[1] = null)
      setHint(hint[2] = null)
      setHint(hint[3] = null)
      setHint(hint[4] = null)
      setHint([...hint])
      setGenerated(!generated)
    }

  }

  // end of CODE cracker

  return (
    <div className="App">
      <div className="pw">
        <h1>Crack the code...</h1>
        <h1>X - X - X - X</h1>
        <button className="generate" onClick={generated ? null : generate_code}>Generate</button> <br/>
        <input id="code" name='code' className="code" placeholder="XXXX" maxlength="4" autocomplete="off" onChange={event => setEnteredValue(event.target.value)}/> <br/>
        <button className="try" onClick={try_and_hints}>TRY</button>
        <div>
          <h1>{cong}</h1>
          <p>
            {hint[0]} <br/>
            {hint[1]} <br/>
            {hint[2]} <br/>
            {hint[3]} <br/>
            {hint[4]}
          </p>
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
