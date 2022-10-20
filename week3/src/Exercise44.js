import React from "react";

const card = {
  title: 'Elon Musk',
  description: 'Elon ReeveMusk FRS is a business magnate, industrial designer, and engineer. ',
  avatar: 'https://vtv1.mediacdn.vn/thumb_w/650/2022/4/26/1000-1650949519392431771941.jpeg',
  cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLUN9wAKFQNR4dmHy3dYC90Fe8dgDdqZKEIwMlSxVn&s',
}

function Exercise43() {

  return (
    <div className="App" style={{border: '1px solid #d0f0c0'}}>
      <div>{card.title}</div>
      <div>{card.description}</div>
      <img src={card.avatar} style={{height:'200px', width: '200px'}}/>
      <img src={card.cover} style={{height:'200px', width: '200px'}}/>
    </div>
  );
}

export default Exercise43;