import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import ConcertPage from './components/ConcertsPage'
import ArtistPage from './components/ArtistPage'
import React, {useState, useEffect} from "react";

function App() {
  const[artists, setArtists] = useState([])

  useEffect(() => {
      fetch("http://localhost:9292/artists")
      .then(res => res.json())
      .then(artistArr => {
          console.log(artistArr)
          setArtists(artistArr)
      })
    }, [])

   console.log(artists)

  //  artistName = artists.map(function(artist){
  //       return artist.name
  //   })

  //   console.log(artistName)

return (
  <div>
   <Header/>
   <Sidebar/>
  <ConcertPage
    artists = {artists}
  />
  <ArtistPage/>
  </div>

)
    
  
}

export default App;
