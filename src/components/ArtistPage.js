import React, {useEffect, useState} from 'react'
import ArtistList from './ArtistList'

function ArtistPage(){
    const[artists, setArtists] = useState([])
    const[followers, setFollowers] = useState([])

    useEffect(() => {
    //     fetch("http://localhost:9292/artists")
    //     .then(res => res.json())
    //     .then(artistArr => {
    //         console.log(artistArr)

    //         setArtists(artistArr)
    //     })
        fetch("http://localhost:9292/followers")
        .then(res => res.json())
        .then(followersArr => {
            console.log(followersArr)
            setFollowers(followersArr)
        })

}, [])

return (
<ArtistList
artists={artists}
followers={followers}/>

)


}

export default ArtistPage