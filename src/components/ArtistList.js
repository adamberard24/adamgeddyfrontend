import React from 'react'
import ArtistCard from './ArtistCard'
function ArtistList({artists, followers}){

    const artistCards = artists.map((artistObj) => {
      const numberOfFollowers = followers.filter(follower => follower.artist_id === artistObj.id).length
        return(
            <ArtistCard
            key={artistObj.id}
            name={artistObj.name}
            followers={numberOfFollowers}
            
            />

        )

    })

    return <div>
<h1>Artists You Like</h1>
<ul className="cards">{artistCards}</ul>

    </div>


}

export default ArtistList