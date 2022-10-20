import React from 'react';
import MyButton2 from './Button/Button2';

const second = {
  text: 'Second Button',
    disabled: true
}

function Exercise13({}){
  return(
    <main>
      <MyButton2/>
      <MyButton2 text={second.text} disabled={second.disabled}/>
    </main>
  )
}



export default Exercise13;