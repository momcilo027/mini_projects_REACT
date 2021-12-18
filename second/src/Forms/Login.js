import '../App.css';
import React, {useState} from 'react';

const Login = () =>{

  return(
    <div className="signup">
      <h1>LOG IN</h1>
      <form className="form">
        <label>E-mail</label>
        <input type="email"></input>
        <label>Password</label>
        <input type="password"></input>
        <button>Submit</button>
      </form>
    </div>
  )
}
export default Login
