import './App.css';
import React from 'react';

const array = ['First','Second', 'Third'];
const object = {
  first: 1,
  second: 2, 
  third: 3
};

console.log('first ', array);

function Exercise04() {
  return (
    <section>
      <h1>Array</h1>
      <ul>
        {array.map((item, index)=> {
          return (
            <li key={item}>{item}</li>
          )
        })}
      </ul>
      <h1>Objetct</h1>
      <ul>
        {
          Object.keys(object).map((i) => {
            return(
              <li key={i}>
              <strong>{i}: </strong>
              {object[i]}
            </li>
            )
          })
        }
      </ul>
    </section>
  );
}

export default Exercise04;
 