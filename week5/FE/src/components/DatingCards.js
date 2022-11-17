import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import axios from "../axios";

export default function DatingCards() {

  const [people, setPeople] = useState([]);

  useEffect(()=>{
    async function fetchData() {
      const req = await axios.get("/dating/cards")
      setPeople(req.data)
    }
    fetchData()
  }, [])

  const swiped = (direction, nameToDelete) => {
    console.log(
      "reciving " + nameToDelete
    );
  }

  const outOffFrame = (name) => {
    console.log(
      name + "left to the screen !!"
    );
  }


  return (
    <div className='datingCards'>
      <div className='datingCards__container'>
        {
          people.map((person) => {
            return (
              <TinderCard className="swipe" key={person.name} preventSwipe={['up', 'down']}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOffFrame(person.name)}
              >
                <div style={{backgroundImage: `url(${person.imgUrl})`}} >
                  <h3>{person.name}</h3>
                </div>
              </TinderCard>
            )
          })
        }
      </div>
    </div>
  )
}
