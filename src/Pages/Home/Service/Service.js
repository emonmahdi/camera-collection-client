import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
const Service = ({product}) => { 
    const {id, name, img, description,price} = product;

    return (

        <Grid  item xs={2} sm={12} md={4} > 
             <Box
                sx={{
                boxShadow: 3,
                bgcolor: 'background.paper',
                m: 1,
                p: 1,
                width: '1', 
                }}
                >     
            <Card sx={{ boxShadow: 0, m:3  }}>
            
            <CardMedia
                component="img"
                style={{width: 'auto', height:'85px', margin:'0 auto'}}
                image={img}
                alt="green iguana"
            />
                <CardContent> 
                    <Typography variant="h5" component="div">
                    {name}
                    </Typography> 
                    <Typography variant="body2">
                    {description} 
                    </Typography>
                    <Typography variant="h6">
                    Price:{price} 
                    </Typography>
                    <NavLink style={{textDecoration:'none', marginLeft:'10px'}} to={`/product/${id}`}>
                        <Button sx={{ bgcolor: 'info.main', my:3}} variant="contained">Purches</Button>
                    </NavLink>
                    
                </CardContent> 
                
            </Card> 
            </Box>
        </Grid>


    
    );
};

export default Service;