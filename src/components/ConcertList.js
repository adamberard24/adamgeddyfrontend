import { assertIfStatement } from '@babel/types';
import React from 'react';
import ConcertCard from './ConcertCard'
function ConcertList({concerts, artists}){

console.log(artists)

// const filteredConcerts = concerts.filter((concertObj) => {
//     return concertObj
// })
// const artistName = artistArr.map((each_artist) => {
//     return each_artist.name
// })

const concertCards = concerts.map((concertObj) => { 
// const numberOfArtist = artists.map(artistt => console.log(artistt.name))
       return ( <ConcertCard
        key={concertObj.id}
        venue={concertObj.venue}
        // name= {artistt.name}
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