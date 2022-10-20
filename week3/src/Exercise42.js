import React from "react";

const onClickButton = () => {
  alert('Altert!!!');
}

function Exercise42() {

  return (
    <div>
      <button style={{margin: '10px 10px'}} type="primary" onClick={onClickButton}>Button</button>
    </div>
  );
}

export default Exercise42;