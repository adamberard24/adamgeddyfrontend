import React, {useState, useEffect} from 'react';

<<<<<<< HEAD
function ArtistCard({name, followers, key}){
    const [like, setLike] = useState(0)

function handleLike() {

    setLike(like++)
    id = key 
    console.log(id)


    fetch(`http://localhost:9292/artist/${id}/likes`, {
            method: "PATCH",
            headers: {"content-type" : "application/json"}, 
            body: JSON.stringify({
                    like: like
            })
        })
                .then(res => res.json())
                .then(function(newlike){
                    console.log("You liked this artist!")
                })
}

    
=======
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
>>>>>>> 67cd390fb248604ee5f4c913e931686e2ba96ba3
return (
    <div>
        <h2>
            {name}
        </h2>

        <p>Number of followers: {followers}</p>
<<<<<<< HEAD
        <button onClick= {handleLike}> Likes: {like} </button>
=======

        <button onClick={handleDelete}>DELETE ARTIST</button>
>>>>>>> 67cd390fb248604ee5f4c913e931686e2ba96ba3
    </div>
)

}

export default ArtistCard