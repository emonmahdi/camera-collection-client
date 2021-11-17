import React from 'react';
import banner from './img/banner2.png'
import './Banner.css'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Typography,Container } from '@mui/material';
import { Link } from 'react-router-dom';



const verticalAlign = {
    display: 'flex',
    alignItems: 'center',
    height:450,

}

const Banner = () => {
    return (
        <>
        <div className="banner">
            <div className="container banner">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="hero-text">
                            <h1>Your Business Or Security Smile  
                            Saved Here</h1>
                            <p className='my-4'> We are provide CC Camera And Your Business  And Any Appertment save our Camera service</p>
                            <Link to='explore'>
                                <button className='btn btn-warning'>Get Explore</button> 
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="img">
                             <img src={banner} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <Box  sx={{ flexGrow: 1 }}>
            <Container >
                <Grid container spacing={2}>
                <Grid style={verticalAlign} sx={{textAlign: 'left'}} item xs={12} md={6}>
                   <Box>
                   <Typography style={{ fontWeight:600}} variant='h3'>
                            
                    </Typography>
                    <Typography style={{color:'gray', fontWeight:'300'}} variant='p'>
                            <br />
                    </Typography> 
                    
                    
                   </Box>
                </Grid>
                <Grid style={verticalAlign} item xs={12} md={6}>
                    
                </Grid>
                
                </Grid>
            </Container>
        </Box> */}
        </>
    );
};

export default Banner;