import React, { useState } from 'react';
import './List.css';

const List = ({ list }) =>{

  const teamA = [];
  const teamB = [];

  list.map(member =>{
    for(let i = 0; i <= list.length; i++){
      if(member.id === i && i < (list.length / 2 + 1)){
        teamA.push({
          name: member.name,
          id: member.id,
        });
      }else if(member.id === i && i >= (list.length / 2)){
        teamB.push({
          name: member.name,
          id: member.id,
        });
      }
    }
  })

  const [arrayA, setArrayA] = useState(teamA)
  const [arrayB, setArrayB] = useState(teamB)
  const [iDA, setIdA] = useState();
  const [iDB, setIdB] = useState();

  const getIdA = (e) =>{
    setIdA(parseInt(e.target.id));
  }

  const handleMoveA = (e) =>{
    const memberClicked = arrayA.find(
      (member) => member.id === +e.target.id
    );
    const filteredArray = arrayA.filter(
      (member) => member.id !== memberClicked.id
    );
    setArrayA([...filteredArray]);
    setArrayB([...arrayB, memberClicked]);
  }

  const getIdB = (e) =>{
    setIdB(parseInt(e.target.id));
  }

  const handleMoveB = (e) =>{
    const memberClicked = arrayB.find(
      (member) => member.id === +e.target.id
    );
    const filteredArray = arrayB.filter(
      (member) => member.id !== memberClicked.id
    );
    setArrayB([...filteredArray]);
    setArrayA([...arrayA, memberClicked]);
  }

  return(
    <div className="list">
      <div className="team">
        <h1>Team A</h1>
        <ul>
          {arrayA.map(member =>{
            return (
              <li id={member.id} key={member.id} onHover={getIdA} onClick={ handleMoveA }>{member.name}</li>
            )
          })}
        </ul>
      </div>
      <div className="team">
        <h1>Team B</h1>
        <ul>
          {arrayB.map(member =>{
            return (
              <li id={member.id} key={member.id} onHover={getIdB} onClick={ handleMoveB }>{member.name}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
export default List
