import React, {useState, useEffect} from 'react';

function ArtistCard({deleteArtist,id, name, followers}){

    function handleDelete(e){
    fetch(`http://localhost:9292/artists/${id}`, {

    method: "DELETE"
    })
    .then(res => res.json())
    .then(() => {
        deleteArtist(id)
    })

    }
return (
    <div>
        <h2>
            {name}
        </h2>

        <p>Number of followers: {followers}</p>

        <button onClick={handleDelete}>DELETE ARTIST</button>
    </div>
)

}

export default ArtistCard