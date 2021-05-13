import React, {useState, useEffect} from 'react';


function ConcertCard({ venue, cost, artist_id, day, name}){

const [favorite, setFavorite] = useState(false)


    

    
return (
<li classname="card">
<h1>Artist: {name}</h1>
<p>Cost: {cost}</p>
<p>Venue: {venue}</p>
<p>Date: {day}</p>
    <div>
        {favorite ? (
      <button onClick = {()=> setFavorite(true)} >Remove from Favorites</button>      
        ) : (
<button onclick = {()=> setFavorite(false)} >Add to favorites</button> )}
    </div>






</li>

)

        }



export default ConcertCard