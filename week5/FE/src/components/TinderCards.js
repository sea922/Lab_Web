import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'
import axios from './axios'
import SwipeButtons from './SwipeButtons';

const TinderCards = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const req = await axios.get("/dating/cards")
            setPeople(req.data)
        }
        fetchData()
    }, [])

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }
    

    return (
        <div className='tinderCards'>
            <div className="tinderCards__container">
                {people.map(person => (
                    <TinderCard 
                        className='swipe'
                        key={person.name}
                        onSwipe={onSwipe} 
                        onCardLeftScreen={() => onCardLeftScreen(person.name)} 
                        preventSwipe={['up', 'down']}>
                            <div style={{ backgroundImage: `url(${person.imgUrl})`}} className="card">
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>
                ))}
                <SwipeButtons style={{marginTop: '100px'}}/>
            </div>
        </div>
    )
}

export default TinderCards