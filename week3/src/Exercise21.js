import React, { useState } from 'react';


export default function Exercise21 () {
  const [name] =  useState('Adam');
  const [age] = useState(35);

  return (
    <>
    <p>
      My name is {name}
    </p>
    <p>
      My age is {age}
    </p>
    </>
  )
}