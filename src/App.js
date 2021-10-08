import './App.css';
import React, { useState } from 'react';
import List from './List_components/List';

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

  return (
    <div className="App">
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
