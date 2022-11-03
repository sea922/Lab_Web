import React, { useEffect, useState } from 'react'

function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve({id: 1, name: "Adam"})
    }, 1000);
  })
}

function Exercise4() {
  const [id, setId] = useState("loading...");
  const [name, setName] = useState("loading...");

  useEffect(() => {
    fetchUser().then((user) => {
      setId(user.id);
      setName(user.name);
    })
  })
  return (
    <div>
      <p> ID: {id}</p>
      <p> Name: {name}</p>
    </div>
  )
}

export default Exercise4;
