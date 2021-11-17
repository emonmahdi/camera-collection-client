import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import {makeStyles} from '@mui/styles';

 

const Navigation = () => {
  
    const {user, logOut} = useAuth();

    const useStyle = makeStyles({
      naItem:{
        color:'#fff',
        textDecoration:'none'
      }
    })

    const {navItem} = useStyle();
    return (
  <>  
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton 
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Smart Camera
          </Typography>
          <Link to='/home' style={{textDecoration:'none', marginRight:'10px'}}>
              <Button className={navItem}  variant="contained" color="inherit">Home</Button>
          </Link>  
          {
            user?.email ?
            <Box> 
                <NavLink style={{textDecoration:'none', marginLeft:'10px'}} to='/dashboard'>
                <Button variant="contained" color="inherit">Dashboard</Button>
                </NavLink>
           
                 <Button onClick={logOut} style={{textDecoration:'none',color:'#000',marginLeft:'10px'}} variant="contained" color="inherit">Log Out</Button>
            </Box>
            : 
            <NavLink style={{textDecoration:'none', marginLeft:'10px'}} to='/login'>
              <Button variant="contained" color="inherit">Login</Button>
           </NavLink>
          }
          
          
        </Toolbar>
      </AppBar>
    </Box>
  </>
    );
};

export default Navigation;