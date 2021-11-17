import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const {user} = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)

        axios.post('https://floating-brushlands-69633.herokuapp.com/review', data)
           .then(res => {
                if(res.data.insertedId){
                    alert('Review Added Successfully');
                    reset();
                }
           })

       };
    return (
        <div>
            <h2>Review Add Here</h2>
            <form onSubmit={handleSubmit(onSubmit) } className='p-3 border w-50 mx-auto bg-light'>  

                    <input type='text' className='form-control mb-2'   {...register("name")} value={user.displayName}  />

                    <input type='text' value={user.email} className='form-control mb-2' {...register("email", { required: true })} placeholder='Email' /> 
                    

                    <textarea type='text'  className='form-control mb-2' {...register("description", { required: true })} placeholder='description' />  
    
                    <input type='number' className='form-control mb-2' {...register("review", { required: true })} placeholder='Review Number (0 - 5)' /> 

                {errors.exampleRequired && <span>This field is required</span>}
                
                <input value="Add Review" className='btn btn-danger' type="submit" />
            </form>
        </div>
    );
};

export default Review;