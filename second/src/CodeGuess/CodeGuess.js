import '../App.css';
import React, {useState} from 'react';

const CodeGuesser = () =>{

  const [code, setCode] = useState(Array(4).fill(null));
  const [isGenerated, setIsGenerated] = useState(false);
  const [help, setHelp] = useState("");
  const [helpColor, setHelpColor] = useState("help");
  const [guess, setGuess] = useState(0);
  const [guessNum, setGuessNum] = useState(1);
  const [hint, setHint] = useState(Array(5).fill(null));

  const generate = () =>{
    var num1 = Math.floor(Math.random() * (0, 10))
    var num2 = Math.floor(Math.random() * (0, 10))
    var num3 = Math.floor(Math.random() * (0, 10))
    var num4 = Math.floor(Math.random() * (0, 10))
    setCode(code[0] = num1)
    setCode(code[1] = num2)
    setCode(code[2] = num3)
    setCode(code[3] = num4)
    setCode([...code])
    setIsGenerated(!isGenerated)
    setHelp("Code has been generate successfully.")

    var hint1 = num1 + num2 + num3 + num4
    var hint2 = num1 + num2
    var hint4 = (num4 * num1) + num2
    setHint(hint[0] = ("Sum of all digits : "+hint1))
    setHint(hint[1] = ("x1 + x2 = "+hint2))
    setHint(hint[3] = ("(x4 * x1) + x2 = "+hint4))
    setHint([...hint])

    if(num3 > num4){
      var hint3 = num3 - num4
      setHint(hint[2] = ("x3 - x4 = "+hint3))
      setHint([...hint])
    }else if(num3 < num4){
      var hint3 = num4 - num3
      setHint(hint[2] = ("x4 - x3 = "+hint3))
      setHint([...hint])
    }else{
      setHint(hint[2] = ("x3 - x4 = 0"))
      setHint([...hint])
    }

    if(num2 > num3){
      var hint5 = (num2 / num3) + num4
      setHint(hint[4] = ("(x2 / x3) + x4 = "+hint5))
      setHint([...hint])
    }else if(num3 > num2){
      var hint5 = (num3 / num2) + num4
      setHint(hint[4] = ("(x3 / x2) + x4 = "+hint5))
      setHint([...hint])
    }else{
      setHint(hint[4] = ("(x2 / x3) + x4 = "+num4))
      setHint([...hint])
    }
  }
  const check = () => {
    isGenerated ? setHelp("You have already generated the code.") : generate()
    isGenerated ? setHelpColor("help_red") : setHelpColor("help")
  }

  const answer = () =>{
    const values = guess.toString().split('').map(val => parseInt(val, 10))

    if(isGenerated){
      if(guess === 0){
        setHelp("Please enter 4 digit value")
        setHelpColor("help_red")
      }else if(code[0] === values[0] && code[1] === values[1] && code[2] === values[2] && code[3] === values[3]){
        setHelp("CONGRATULATIONS")
        setHelpColor("help")
        setIsGenerated(!isGenerated)
        setGuessNum(1)
      }else{
        setGuessNum(prevState => prevState + 1)
        setHelp("wrong x"+guessNum)
        setHelpColor("help_red")
      }
    }else{
      setHelp("Please generate the code first.")
      setHelpColor("help_red")
    }
  }

  return(
    <div className="codeGuess">
      <h1 className="info">GUESS THE CODE</h1>
      <h1 className="info">X - X - X - X</h1>
      <input className="code_input" maxLength="4" autoComplete="off" placeholder="CODE" onChange={event => setGuess(event.target.value)} />
      <div className="guess_btns">
        <button className="generate" onClick={check}>Generate</button>
        <button className="guess" onClick={answer}>Guess</button>
      </div>
      <h1 className={helpColor}>{help}</h1>
      <p className="hints">
        {hint[0]} <br/>
        {hint[1]} <br/>
        {hint[2]} <br/>
        {hint[3]} <br/>
        {hint[4]}
      </p>
    </div>
  )
}
export default CodeGuesser
