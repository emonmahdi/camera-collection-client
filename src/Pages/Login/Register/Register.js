import React, { useState } from 'react';
import { Alert, Button, Box, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import regImg from './register.jpg' 
import { Link, NavLink, useHistory, useLocation} from 'react-router-dom'; 
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Register = () => {  
    const [loginData, setLoginData] = useState({})
    const {user, authError,registerUser, isLoading} = useAuth();
    const history = useHistory()

    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value 
        const newLoginData = { ...loginData }
        newLoginData[field] = value; 
        setLoginData(newLoginData)

        e.preventDefault() 
    }

    const handleLoginSubmit = (e) => {
        if(loginData.password !== loginData.password2){
            alert('Your Password Did not mach');
            return;
        } 
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }

    return ( 
        <Box>
        <Navigation></Navigation>  
        <Container>
        <h2 className='text-info text-warning mt-3'>Please Register Here</h2>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                 <img src={regImg} style={{width:'90%'}} alt="" />
            </Grid> 
            {/* ======================== */}
            <Grid item xs={12} md={6} sx={{mt:8}}>
                <Typography variant='body1'>Register</Typography>
                {!isLoading && <form onSubmit={ handleLoginSubmit }> 
                    <TextField
                    sx={{width:'75%',mb:2}}
                    id="filled-password-input"
                    label="Your Name"
                    name='name' 
                    onBlur={handleOnBlur}
                    variant="standard" 
                    />
                    <TextField
                    sx={{width:'75%',mb:2}}
                    id="filled-password-input"
                    label="Your Email"
                    name='email'
                    type='email'
                    onBlur={handleOnBlur}
                    variant="standard" 
                    />
                    <TextField
                    sx={{width:'75%',mb:2}}
                    id="filled-password-input"
                    label="Your Password"
                    type='password'
                    name='password'
                    onBlur={handleOnBlur}
                    variant="standard" 
                    />
                    <TextField
                    sx={{width:'75%',mb:2}}
                    id="filled-password-input"
                    label="Re-Type Your Password"
                    type='password'
                    name='password2'
                    onBlur={handleOnBlur}
                    variant="standard" 
                    />
                    <Button sx={{width:'75%', my:2}} variant='contained' type='submit'>Submit</Button>
                    <NavLink  style={{textDecoration:'none'}} to='/login'>
                        <Button  variant='text'>Already Login User? Please Login</Button>
                    </NavLink>
                </form>}
                {isLoading && <CircularProgress />}
                {user.email && <Alert severity="success"> Congratulations Your Register Successfully.</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}
            </Grid>
            
        </Grid>
    </Container>
    </Box>
    );
};

export default Register;