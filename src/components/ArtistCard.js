import React, {useState, useEffect} from 'react';
  
function ArtistCard({deleteArtist,id, name, followers, key}){
    const [like, setLike] = useState(0)

    function handleDelete(e){
    fetch(`http://localhost:9292/artists/${id}`, {

    method: "DELETE"
    })
    .then(res => res.json())
    .then(() => {
        deleteArtist(id)
    })

}
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
    

    
return (
    <div>
        <h2>
            {name}
        </h2>

        <p>Number of followers: {followers}</p>
        <button onClick={handleLike}> Likes: {like} </button>
        <button onClick={handleDelete}>DELETE ARTIST</button>
    </div>
)

}

export default ArtistCard