import React from 'react';

function ArtistCard({name, followers}){
return (
    <div>
        <h2>
            {name}
        </h2>

        <p>Number of followers: {followers}</p>
    </div>
)

}

export default ArtistCard