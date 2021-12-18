import '../App.css';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () =>{

  const[arrowStep, setArrowStep] = useState(false);

  const arr_fun = () =>{
    setArrowStep(!arrowStep)
  }

  return(
    <div className="navbar">
      <div className="logo">
        <Link to="/"><h1>LOGO</h1></Link>
      </div>
      <div className="arrow">
        <button onClick={arr_fun} className="arr_btn"><i className={arrowStep ? "arrow_up" : "arrow_down"}></i></button>
      </div>
      <div className={arrowStep ? "links_active" : "links"}>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><a>PAGE_1</a></li>
          <li><a>PAGE_2</a></li>
        </ul>
      </div>
      <div className={arrowStep ? "forms_active" : "forms"}>
        <Link to="/signup">Sign Up</Link>
        <p>|</p>
        <Link to="/login">Log In</Link>
      </div>
    </div>
  )
}
export default Navbar
