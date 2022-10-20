import React from "react";

const smartPeople = [
  {name: 'John', age: '23', IQ: '210'},
  {name: 'KO', age: '53', IQ: '190'},
  {name: 'Long', age: '73', IQ: '170'},
  {name: 'Khanh', age: '67', IQ: '160'},
  {name: 'Huong', age: '12', IQ: '192'},
  {name: 'Huyen', age: '22', IQ: '180'},
  {name: 'Chi', age: '20', IQ: '200'},
]

const name = smartPeople.map((item, index) =>  item);
console.log('first ', name)

function Exercise43() {

  return (
    <div className="App">
      <ul>
        {smartPeople.map((item, index)=> (
          <li key={item}>Name: {item.name} - Age: {item.age} - IQ: {item.IQ}</li>
        ))}
      </ul>
    </div>
  );
}

export default Exercise43;