import './App.css';
import CodeGuesser from './CodeGuess/CodeGuess';
import Navbar from './Navbar/Navbar';
import Signup from './Forms/Signup';
import Login from './Forms/Login';
import Seats from './Seats/Seats';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Seats />
              <CodeGuesser />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
