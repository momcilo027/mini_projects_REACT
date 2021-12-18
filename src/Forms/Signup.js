import '../App.css';
import React, {useState} from 'react';

const Signup = () =>{

  return(
    <div className="signup">
      <h1>SIGN UP</h1>
      <form className="form">
        <label>E-mail</label>
        <input type="email"></input>
        <label>Password</label>
        <input type="password"></input>
        <label>Repeat password</label>
        <input type="password"></input>
        <button>Submit</button>
      </form>
    </div>
  )
}
export default Signup
