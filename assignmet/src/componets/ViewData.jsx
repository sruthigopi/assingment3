import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from "axios"
import React, { useEffect, useState } from 'react'
import AddMovie from './AddMovie';

// view data
const ViewData = () => {
    var [movies,setMovies]=useState([]);
    var [update ,setUpdate] =useState(false);
    var [singleValue ,setSingleValue] =useState([])
    useEffect(()=>{
        axios.get('http://localhost:3008/viewmovie')
        .then((response)=>{
setMovies(response.data)
        })
    },[])

//   delete value  
var deleteValues =(id)=>{
console.log(id);
axios.delete("http://localhost:3008/deletemovie/"+id)
.then((response)=>{
    alert("Movie Deleted");
    window.location.reload(false)
})
.catch(err=>console.log(err))
}

const updateValues =(value) =>{
    console.log("Update clicked");
setUpdate(true);
setSingleValue(value)
}

var finalJSX =
<TableContainer  style={{paddingTop:"130px"}}>
<Table style={{padding:"30px"}}>
    <TableHead >
        <TableRow >
            <TableCell style={{color:"blue",fontSize:'20px'}}>Movie Name</TableCell>
            <TableCell style={{color:"blue",fontSize:'20px'}}>Actor</TableCell>
            <TableCell style={{color:"blue",fontSize:'20px'}}>Actress</TableCell>
            <TableCell style={{color:"blue",fontSize:'20px'}}>Director</TableCell>
            <TableCell style={{color:"blue",fontSize:'20px'}}>Realeased Year</TableCell>
            <TableCell style={{color:"blue",fontSize:'20px'}}>Camara</TableCell>
            <TableCell style={{color:"blue",fontSize:'20px'}}>Producer</TableCell>
            <TableCell style={{color:"blue",fontSize:'20px'}}>Language</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
{movies.map((val,i)=>{
return(
<TableRow key={i}>
<TableCell>{val.MovieName}</TableCell>
<TableCell>{val.Actor}</TableCell>
<TableCell>{val.Actress}</TableCell>
<TableCell>{val.Director}</TableCell>
<TableCell>{val.ReleasedYear}</TableCell>
<TableCell>{val.Camera}</TableCell>
<TableCell>{val.Producer}</TableCell>
<TableCell>{val.Language}</TableCell>
<TableCell>
    <Button variant='contained' style={{backgroundColor:'red'}} onClick={()=>deleteValues(val._id)}>Delete</Button>
</TableCell>
<TableCell>
    <Button variant='contained' style={{backgroundColor:'yellow',color:'black'}} onClick={()=>updateValues(val)}>Edit</Button>
</TableCell>
</TableRow>
)
})}
        
    </TableBody>
</Table>
</TableContainer>

if(update) finalJSX =<AddMovie data={singleValue} method='put' />
  return finalJSX
}

export default ViewData