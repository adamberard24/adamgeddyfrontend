import React, {useEffect, useState} from 'react';
import ConcertList from './ConcertList'
function ConcertsPage({artists}){
    const [concerts, setConcerts] = useState([])

useEffect(() => {
fetch("http://localhost:9292/concerts")
.then(res => res.json())
.then(concertArr => {
    console.log(concertArr)
    setConcerts(concertArr)
})
}, [])

console.log(artists)

return (
    <ConcertList
    concerts={concerts}
    artists = {artists}/>
)
}

export default ConcertsPage