import React from 'react';

function ConcertCard({ venue, cost, artist_id, day}){
    
return (
<li classname="card">
<h4>{artist_id}</h4>
<p>Cost: {cost}</p>
<p>Venue: {venue}</p>
<p>Date: {day}</p>



</li>

)

}

export default ConcertCard