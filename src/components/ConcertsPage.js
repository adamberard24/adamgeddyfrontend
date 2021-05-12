import React, {useEffect, useState} from 'react';
import ConcertList from './ConcertList'
function ConcertsPage(){
    const [concerts, setConcerts] = useState([])

useEffect(() => {
fetch("http://localhost:9292/concerts")
.then(res => res.json())
.then(concertArr => {
    console.log(concertArr)
    setConcerts(concertArr)
})
}, [])

return (
    <ConcertList
    concerts={concerts}/>
)
}

export default ConcertsPage