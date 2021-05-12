import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import ConcertPage from './components/ConcertsPage'
import ArtistPage from './components/ArtistPage'

function App() {
return (
  <div>
   <Header/>
   <Sidebar/>
  <ConcertPage/>
  <ArtistPage/>
  </div>

)
    
  
}

export default App;
