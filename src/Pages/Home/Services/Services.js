import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
import Box from '@mui/material/Box'; 
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
const Services = () => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        fetch('https://floating-brushlands-69633.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <Box sx={{ flexGrow: 1, py:7 }}>
               <Container> 
               <Typography  sx={{ fontWeight: 'bold', m: 4 }} variant="h4" component="div">
                     Camera We Provide
                </Typography> 
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.slice(0,6).map(product => <Service
                        key={product._id}
                        product ={product}
                        ></Service>)
                    }
                </Grid>
                </Container>
            </Box>
 
    );
};

export default Services;