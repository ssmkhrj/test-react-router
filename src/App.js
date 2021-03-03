import { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
} from "react-router-dom";

const Home = ({ setLevel }) => {
  return (
    <>
      <h1>Choose Difficulty</h1>
      <ul>
        <li onClick={setLevel("easy")}>Easy</li>
        <li onClick={setLevel("hard")}>Hard</li>
      </ul>
      <Link to="/game">Play</Link>
    </>
  );
};

const Game = ({ level }) => {
  return (
    <>
      <h1>Welcome to the game</h1>
      <p>Your level is {level}</p>
      <Link to="/score">Score</Link>
      <br />
      <Link to="/user/10">User 10</Link>
    </>
  );
};

const Score = () => {
  return (
    <>
      <Link to="/game">Back</Link>
      <h1>Score Page</h1>
    </>
  );
};

const User = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <br />
      <Link to="/score">Score</Link>
      <br />
      <Link to="/game">Game</Link>
      <br />
      <Link to="/user/21">User 21</Link>
      <br />
    </>
  );
};

const App = () => {
  const [level, setLevel] = useState(null);
  return (
    <Router>
      <Route path="/">
        <Redirect to="/" />
      </Route>
      <Route exact path="/" render={() => <Home setLevel={setLevel} />}></Route>
      <Route exact path="/game" render={() => <Game level={level} />}></Route>
      <Route exact path="/score" render={() => <Score />}></Route>
      <Route exact path="/user/:userid" render={() => <User />}></Route>
    </Router>
  );
};

export default App;
