import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Exercise0 from './Exercise0';
import Exercise01 from './Exercise01';
import Exercise02 from './Exercise02';
import Exercise04 from './Exercise04';
import reportWebVitals from './reportWebVitals';

import MySection from './MySection';
import MyButton from './MyButton';
import MyComponent from './Exercise1';
import Exercise11 from './Exercise11';
import Exercise12 from './Exercise12';
import Exercise13 from './Exercise13';
import Exercise21 from './Exercise21';
import Exercise22 from './Exercise22';
import Exercise23 from './Exercise23';
import MyInput from './Exercise3';
import Exercise41 from './Exercise41';
import Exercise42 from './Exercise42';
import Exercise43 from './Exercise43';
import Exercise44 from './Exercise44';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Exercise0 />
    <Exercise01 />
    <Exercise02 />
    <MySection>
      <MyButton>My Button Text</MyButton>
    </MySection>
    <Exercise04 />
    <MyComponent/>
    <Exercise11/>
    <Exercise12/>
    <Exercise13/>
    <Exercise21/>
    <Exercise22/>
    <Exercise23/>
    <MyInput/>
    <Exercise41/>
    <Exercise42/>
    <Exercise43/>
    <Exercise44/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
