import '../App.css';
import React, {useState} from 'react';

const Seat = ({id, value}) =>{

  return(
    <div id={id} className="seat">
      {value}
    </div>
  )
}
export default Seat
