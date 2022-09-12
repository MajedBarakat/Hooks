import {useState } from 'react';
import './App.css';
import List from './components/List';
import {movieData} from './components/Data'
import Navzit from './components/Navzit';
import Add from './components/Add'

function App() {
  const [movies ,setMovies] = useState(movieData)
  const [searchRating, setSearchRating] = useState(0)
  const [searchname, setname] = useState('')
  const handleMovies = (newMovies)=>{
    setMovies([...movies,newMovies])
  }

  return (
    <div>
      <Navzit setSearchRating={setSearchRating} setname={setname} />
      <List movies={movies} searchRating={searchRating} searchname={searchname}/>
      <Add handleMovies={handleMovies} />

    </div>
  );
}

export default App;
