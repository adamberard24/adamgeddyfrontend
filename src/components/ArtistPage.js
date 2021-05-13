import React, {useEffect, useState} from 'react'
import ArtistList from './ArtistList'
import AddNewArtist from './AddNewArtist'

function ArtistPage(){
    const[artists, setArtists] = useState([])
    const[followers, setFollowers] = useState([])



    useEffect(() => {
        fetch("http://localhost:9292/artists")
        .then(res => res.json())
        .then(artistArr => {
            console.log(artistArr)

            setArtists(artistArr)
        })
        

        fetch("http://localhost:9292/followers")
        .then(res => res.json())
        .then(followersArr => {
            console.log(followersArr)
            setFollowers(followersArr)
        })

}, [])

function handleAddNewArtist(newArtist){

    const updatedArtists = [...artists, newArtist]

    setArtists(updatedArtists)
    }

return (

    <div>
<ArtistList
artists={artists}
followers={followers}/>

<AddNewArtist onAddNewArtist={handleAddNewArtist}/>

</div>
)


}

export default ArtistPage