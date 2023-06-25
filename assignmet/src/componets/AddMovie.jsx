import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from "axios"
import '../style.css'
import { useNavigate } from "react-router-dom";

const AddMovie = (props) => {
  var navigate = useNavigate();
  console.log("props data",props.data);
console.log("props data",props.method)

var [inp,setInp]=useState(props.data);

  const inputHandler =(e)=>{
    const {name,value} =e.target;
    setInp((inp)=>({...inp,[name]:value}));
    console.log(inp)
  }

  const readHndler =()=>{
console.log("clicked");
if(props.method === "post"){
axios.post("http://localhost:3008/addmovie",inp)
.then((response)=>{
  alert("Movie Added Successfully");
  navigate("/");
})
.catch(err=>console.log(err));
  }
  if(props.method==="put"){
    axios.put("http://localhost:3008/editmovie/"+inp._id,inp)
    .then((response)=>{
      alert("Movie Updated");
      window.location.reload(false);
    })
  }
}
  return (
    
    <div className='all'  >
      <Typography variant='h4' style={{color:'red',fontFamily:'cursive'}}>Add Movie</Typography>
      <div className='frw' >
   <div className='fst'>
    <span className='scd'>Movie Name</span>   <TextField name='MovieName' value={inp.MovieName} onChange={inputHandler}/> 
  <span className='scd'>Released Year</span>  <TextField  name='ReleasedYear' value={inp.ReleasedYear} onChange={inputHandler}/> 
   </div> 

   <div className='fst'>
    <span className='scd'>Actor</span>  <TextField name='Actor' value={inp.Actor} onChange={inputHandler}/>
   <span className='scd '>Camara </span> <TextField name='Camera' value={inp.Camera} onChange={inputHandler}/>
   </div>  

   <div className='fst'>
     <span className='scd'>Actress</span>  <TextField name='Actress' value={inp.Actress} onChange={inputHandler}/>
   <span className='scd'>  Producer </span> <TextField name='Producer' value={inp.Producer} onChange={inputHandler}/>
   </div> 

   <div className='fst'>
    <span className='scd'> Director </span>   <TextField name='Director' value={inp.Director} onChange={inputHandler}/>
   <span className='scd'> Language </span> <TextField name='Language' value={inp.Language} onChange={inputHandler}/>
   </div>  
   </div>
   <Button variant='contained' onClick={readHndler}>Submit</Button>
    </div>
  )
}

export default AddMovie