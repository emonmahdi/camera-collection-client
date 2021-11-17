 import { Alert, Button, CircularProgress,Box, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useLocation, useHistory, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import Navigation from '../Shared/Navigation/Navigation';
import loginImg from './login.jpg'
const Login = () => {
     
    const [loginData, setLoginData] = useState({})
    const {user, loginUser, signInWithGoogle, isLoading, authError} = useAuth();

    const location = useLocation();
    const history = useHistory(); 
 
    const handleOnChange = e => {
        const field = e.target.name
        const value = e.target.value 
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)

        e.preventDefault()
    }

    const handleLoginSubmit = e => {
         loginUser(loginData?.email, loginData?.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn =(e)=> {
        signInWithGoogle(location, history)

        e.preventDefault();
    }
    
    return (
        <Box>
        <Navigation></Navigation>     
        <Container>
            <h2 className='text-info text-warning mt-3'>Please Login Here</h2>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                     <img src={loginImg} style={{width:'90%'}} alt="" />
                </Grid> 
                {/* ========================== */}
                <Grid item xs={12} md={6} sx={{mt:8}}>
                    <Typography variant='body1'>Login</Typography>
                    <form onSubmit={ handleLoginSubmit }> 
                        <TextField
                        sx={{width:'75%',mb:3}}
                        id="filled-password-input"
                        label="Your Email"
                        name='email'
                        onChange={handleOnChange}
                        variant="standard" 
                        />
                        <TextField
                        sx={{width:'75%'}}
                        id="filled-password-input"
                        label="Your Password"
                        type='password'
                        name='password'
                        onChange={handleOnChange}
                        variant="standard" 
                        />
                        <Button sx={{width:'75%', my:2}} variant='contained' type='submit'>Submit</Button>
                        <NavLink style={{textDecoration:'none'}} to='/register'>
                            <Button  variant='text'>You are New User? Please Register</Button>
                        </NavLink>
                    </form>
                    <p>-------------OR--------------</p>
                    <Button onClick={handleGoogleSignIn} variant='contained'>Google Sign In</Button>

                    {isLoading && <CircularProgress />}
                    {user.email && <Alert severity="success"> Congratulations Your Register Successfully.</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                
            </Grid>
        </Container> 
        </Box>
    );
};

export default Login;