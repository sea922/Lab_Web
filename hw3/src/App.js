import "./App.css";
import avatar from "./img/avt.jpg";
import star from "./img/blank-square.png";
import ScrollIntoView from "react-scroll-into-view";

function App() {
  return (
    <div class="main">
      <nav>
        <div class="menu">
          <ul>
            <li>
              <ScrollIntoView selector={"#profile"}>
                <button className="mdl-button mdl-js-button mdl-button--raised">
                  Profile
                </button>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector={"#experience"}>
                <button className="mdl-button mdl-js-button mdl-button--raised">
                  Experiences
                </button>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector={"#ability"}>
                <button className="mdl-button mdl-js-button mdl-button--raised">
                  Abilities
                </button>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector={"#project"}>
                <button className="mdl-button mdl-js-button mdl-button--raised">
                  Projects
                </button>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector={"#contact"}>
                <button className="mdl-button mdl-js-button mdl-button--raised">
                  Contact
                </button>
              </ScrollIntoView>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container">
        <div class="content-1" id="profile">
          <h1 class="title">Profile</h1>
          <div class="student">I am a student</div>
        </div>
        <hr />
        <div class="content-2">
          <div class="content-2-left">
            <h2 class="">About me</h2>
            <p>
              I am a lovely cat. I have passion in IT and I want to become data
              analyst.
            </p>
          </div>
          <div class="content-2-center">
            <img src={avatar} />
          </div>
          <div class="content-2-right">
            <h2 class="">Details</h2>
            <b>Name:</b>
            <div>Truong Van Sy</div>
            <b>Age:</b>
            <div>23 years</div>
            <b>Location:</b>
            <div>UIT, VNU-HCM</div>
          </div>
        </div>
        <div class="content-3" id="experience">
          <h1 class="title">Experiences</h1>
          <hr />
          <div class="content-3-top">
            <div class="content-3-left">
              <h3>Education</h3>
              <b>UIT, VNU-HCM</b>
              <div>Apr 2019 - June 2024</div>
            </div>
            <div class="content-3-right">
              <b>Information System</b>
              <p>
                The education was mainly System design-basec course, but I also
                learned about Web, Data analysis and more. During my time
                college, I specialized in OOP, data science. Now, I'm learning
                web development
              </p>
            </div>
          </div>
          <hr />
          <div class="content-3-bottom">
            <div class="content-3-bottom-left">
              <h3>Working experiences</h3>
              <b>FPT Software | Backend</b>
              <div>Sep 2020 - Sep 2021</div>
            </div>
            <div class="content-3-bottom-right">
              <b>Freelancer</b>
              <p>Development product about Web application</p>
            </div>
          </div>
        </div>
        <hr />
        <div class="content-4" id="ability">
          <h1 class="title">Abilities</h1>
          <hr />
          <h2>Skills</h2>
          <div class="content-4-top">
            <div class="content-4-top-left">
              <div>HTML/CSS</div>
              <div>SQL</div>
              <div>JQuery</div>
              <div>Javascript</div>
            </div>
            <div class="content-4-top-center">
              <div class="content-4-top-center-1">
                <img class="skill star" src={star} />
                <img class="skill star" src={star} />
                <img class="skill star" src={star} />
                <img class="skill star" src={star} />
                <img class="skill" src={star} />
              </div>
              <div class="content-4-top-center-2">
                <img class="skill star" src={star} />
                <img class="skill star" src={star} />
                <img class="skill star" src={star} />
                <img class="skill" src={star} />
                <img class="skill" src={star} />
              </div>
              <div class="content-4-top-center-3">
                <img class="skill star" src={star} />
                <img class="skill star" src={star} />
                <img class="skill" src={star} />
                <img class="skill" src={star} />
                <img class="skill" src={star} />
              </div>
              <div class="content-4-top-center-4">
                <img class="skill star" src={star} />
                <img class="skill star" src={star} />
                <img class="skill star" src={star} />
                <img class="skill star" src={star} />
                <img class="skill star" src={star} />
              </div>
            </div>
            <div class="content-4-top-right">
              <div>Object Oriented Programming</div>
              <div>SEO</div>
              <div>React</div>
            </div>
            <div class="content-4-top-center">
              <div class="content-4-top-center-1">
                <img class="skill star" src={star} />
                <img class="skill star" src={star} />
                <img class="skill star" src={star} />
                <img class="skill star" src={star} />
                <img class="skill star" src={star} />
              </div>
              <div class="content-4-top-center-2">
                <img class="skill star" src={star} />
                <img class="skill star" src={star} />
                <img class="skill " src={star} />
                <img class="skill" src={star} />
                <img class="skill" src={star} />
              </div>
              <div class="content-4-top-center-3">
                <img class="skill star" src={star} />
                <img class="skill star" src={star} />
                <img class="skill star" src={star} />
                <img class="skill star" src={star} />
                <img class="skill" src={star} />
              </div>
            </div>
          </div>
          <div class="link-github" id="project">
            <div>
              <i>See my profile on github</i>
            </div>
            <button>
              <a href="https://github.com/siidev">See project on Github</a>
            </button>
          </div>
          <hr />
          <h2>Languages</h2>
          <div class="content-4-bottom">
            <div class="content-4-bottom-left">
              <div>Vietnamese (Native)</div>
              <div>English (TOIEC 700)</div>
            </div>
            <div class="content-4-bottom-center">
              <div class="content-4-top-center-1">
                <img class="skill star" src={star} />
                <img class="skill star" src={star} />
                <img class="skill star" src={star} />
                <img class="skill star" src={star} />
                <img class="skill star" src={star} />
              </div>
              <div class="content-4-top-center-2">
                <img class="skill star" src={star} />
                <img class="skill star" src={star} />
                <img class="skill star" src={star} />
                <img class="skill" src={star} />
                <img class="skill" src={star} />
              </div>
            </div>
            <div class="content-4-bottom-right">
              <div>Japanese</div>
              <div>French</div>
            </div>
            <div class="content-4-bottom-center">
              <div class="content-4-top-center-1">
                <img class="skill star" src={star} />
                <img class="skill" src={star} />
                <img class="skill" src={star} />
                <img class="skill" src={star} />
                <img class="skill" src={star} />
              </div>
              <div class="content-4-top-center-2">
                <img class="skill star" src={star} />
                <img class="skill star" src={star} />
                <img class="skill" src={star} />
                <img class="skill" src={star} />
                <img class="skill" src={star} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
