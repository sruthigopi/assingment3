import {  Button, TextField} from '@mui/material'
import React,{ useState } from 'react'
import axios from 'axios';


const Search = () => {
    const [movieName, setMovieName] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
      console.log('Searching for:', movieName);
  axios.get("http://localhost:3008/search",{params:{MovieName:movieName}})
  .then((response)=>{
    console.log('Search results:', response.data);
    setSearchResults(response.data);
  })
  .catch((error) => {
    console.error('Error occurred while searching:', error);
   
  });
  };
  return (
    <div style={{paddingTop:'190px'}}>
         <TextField value={movieName} style={{ width: '300px' }} onChange={(e) => setMovieName(e.target.value)}/>
           <Button variant='contained' style={{marginLeft:'50px',backgroundColor:'green'}}onClick={handleSearch}>Search</Button>

<div style={{paddingTop:'50px'}}>
    {searchResults.map((result,index)=>{
        return(
         <div key={index}>
         <h3>{result.MovieName}</h3>
         <p>Actor: {result.Actor}</p>
         <p>Actress: {result.Actress}</p>
         <p>Director: {result.Director}</p>
         <p>Camera: {result.Camera}</p>
         <p>Produce: {result.Producer}</p>
         <p>Language: {result.Language}</p>
       </div>
        )
    })}
</div>

    </div>
  )
}

export default Search