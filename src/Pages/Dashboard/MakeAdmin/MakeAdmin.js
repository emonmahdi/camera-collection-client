import { Alert, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)

    const handleOnBlur = (e) => {
        setEmail(e.target.value)
    }

    const handleMakeAdmin = e => {
        const user = {email}
        fetch('https://floating-brushlands-69633.herokuapp.com/users/admin', {
            method: 'PUT',
            headers:{
                'content-type' : 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                console.log(data); 
                setSuccess(true)
            }
            
        })
        e.preventDefault()
    }
    return (
        <div className='bg-light p-2 shadow'>

            <Typography variant='h4'>
            Make An Admin
            </Typography> 
            <form onSubmit={handleMakeAdmin} className='mt-3'>
            <TextField id="standard-basic"
             label="Email"
             onBlur={handleOnBlur}
             variant="standard" /> <br /><br />
             <Button type='submit' variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success"> Made Admin Successfully.</Alert>}
        </div>
    );
};

export default MakeAdmin;