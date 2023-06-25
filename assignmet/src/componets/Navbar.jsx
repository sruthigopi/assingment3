import { AppBar, Button,  Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
 
  return (
    <div>
        <AppBar >
           <Toolbar style={{backgroundColor:'#92a8d1'}}>
            <Typography variant='h4' style={{color:'white',fontFamily:'cursive', paddingRight:'520px'}}>Movie Magic</Typography>
         <Button variant='contained' style={{marginRight:'50px'}}><Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link></Button> 
         <Button variant='contained' style={{marginRight:'50px'}}><Link to={'/add'} style={{textDecoration:'none',color:'white'}}>Add Movie</Link></Button>
         <Button  variant='contained' style={{marginRight:'50px'}}><Link to={'/about'} style={{textDecoration:'none',color:'white'}}>About Us</Link> </Button>
         <Button  variant='contained'><Link to={'/search'} style={{textDecoration:'none',color:'white'}}>Search Movie</Link> </Button>
          {/* search */}
          
           </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar