import React from 'react';
import ConcertCard from './ConcertCard'
function ConcertList({concerts}){

// const filteredConcerts = concerts.filter((concertObj) => {
//     return concertObj
// })

const concertCards = concerts.map((concertObj) => {
    return(
        <ConcertCard
        key={concertObj.id}
        venue={concertObj.venue}
        cost={concertObj.cost}
        artist_id={concertObj.artist_id}
        day={concertObj.day}
        />

    )
})
    return (
<div>
        <h1>Upcomming Shows</h1>
        <ul className="cards">{concertCards}</ul>
        </div>
    )
}

export default ConcertList