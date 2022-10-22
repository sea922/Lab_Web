import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#intro">Intro</a>
        </li>
        <li>
          <a href="#first">First section</a>
          <ul>
            <li>
              <a href="#second">Second section</a>
              <ul>
                <li>
                  <a href="#third">Third section</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="#fourth">Fourth section</a>
          <ul>
            <li>
              <a href="#fifth">Fifth section</a>
            </li>
            <li>
              <a href="#sixth">Sixth section</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#seventh">Seventh section</a>
        </li>
        <li>
          <a href="#eighth">Eighth section</a>
        </li>
      </ul>

      <svg xmlns="http://www.w3.org/2000/svg">
        <path />
      </svg>
    </nav>
  );
}

export default App;
