import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MyComponent from "./components/MyComponent";
import Lazy from "./components/Lazy";
import Exercise4 from "./components/Exercise4";
import Exercise5 from "./components/Exercise5";
import Exercise6 from "./components/Exercise6";
import Exercise7 from "./components/Exercise7";
import Exercise71 from "./components/Exercise71";
import Exercise8 from "./components/Exercise8";
import Exercise9 from "./components/Exercise9";

function App() {
  return (
    <div>
      <div className="App">
        <h2>Exercise 1</h2>
        <Router>
          <Route path="/" component={MyComponent} exact />
        </Router>
        <h2>Exercise 2 + 3</h2>
        <Lazy />
        <h2>Exercise 4</h2>
        <Exercise4 />
        <h2>Exercise 5</h2>
        <Exercise5 />
        <h2>Exercise 6</h2>
      </div>
      <Exercise6 />
      <div className="App">
        <h2>Exercise 7</h2>
        <Exercise7 />
        <Exercise71 />
        <h2>Exercise 8</h2>
        <Exercise8 />
        <h2>Exercise 9</h2>
        <Exercise9 />
      </div>
    </div>
  );
}

export default App;
