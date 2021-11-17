import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const {Id} = useParams();  
    const {user} = useAuth();
    // console.log(user);

    const [singleDetails, setSingleDetails] = useState([]);
    // console.log(singleDetails)
    
    const [getDetails, setGetDetails] = useState({})
    console.log(getDetails)

    useEffect( () => {
        fetch('https://floating-brushlands-69633.herokuapp.com/products') 
            .then(res => res.json())
            .then(data => setSingleDetails(data))
    }, []) 

    useEffect( () => {
      const details = singleDetails.find(td => td.id == Id );
      setGetDetails(details);
    }, [singleDetails]);
 
      // ===========================================
      const { register, handleSubmit, reset, formState: { errors } } = useForm();
         const axios = require('axios');
         const onSubmit = data => {
             console.log(data) 
          //    data.status = 'Pending';
             data.getDetails= getDetails;
          axios.post('https://floating-brushlands-69633.herokuapp.com/myorder', data)
              .then(res => {
                  if(res.data.insertedId){
                      alert('Order Booking Confirm');
                      reset();
                  }
              })
         }

    return (
        <>
        <Navigation></Navigation>
        <div className='container my-4 pb-5'>
            <div className="row">
            <div className="col-lg-5">
                <h3 className='mb-3 fw-bold'>Booking Order Information</h3>
                   
                    <form onSubmit={handleSubmit(onSubmit) } className='p-3 border bg-light'> 
                        <input type='text' className='form-control mb-2'   {...register("name")} value={user.displayName} placeholder='Name' />
                          

                        <input type='text' value={user.email} className='form-control mb-2' {...register("email", { required: true })} placeholder='Email' />  
 

                        <input type='text' className='form-control mb-2' {...register("address", { required: true })} placeholder='Address' /> 

                        <input type='number' className='form-control mb-2' {...register("phone", { required: true })} placeholder='Phone' /> 

                        <input type='text' className='form-control mb-2' {...register("status",  { required: true })} />  

                        {errors.exampleRequired && <span>This field is required</span>}
                        
                        <input className='btn btn-warning' value='Order Booking' type="submit" />
                    </form>
                </div>
                {/* ======================================= */}
                 <div className="col-lg-7 bg-light">
                    <div className="single-details-services p-3 text-center">
                        <div className="title">
                            <h2 className='fw-bold mb-4'>{getDetails?.name}</h2> 
                        </div>
                        <div className="single-details-img  rounded">
                            <img src={getDetails?.img} className='img-fluid mx-auto rounded-3 shadow' alt="" />
                        </div> 
                        <p className='my-4'>{getDetails?.description}</p>
                        <span className='text-primary fw-bold'>Price: {getDetails?.price}</span> 
                    </div>
                </div>
                {/* ============================= */}
                
            </div>
        </div>
        </>
    );
};

export default ServiceDetails;