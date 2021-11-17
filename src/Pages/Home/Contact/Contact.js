import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css'
import img from './contact.png'
const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
     const onSubmit = data => {
         console.log(data) 

        };
    return (
        <>
        <div id="contact-section"> 
            <div class="container">
                <div class="section-title text-center mb-5">
                    <h5 class="sort-title">GET IN TOUCH </h5>
                    <h2 class="second-title">Ready to Get Started?</h2>
                    <p>Your email address will not be published. Required fields are marked * </p>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="contact-img">
                            <img src={img} className='img-fluid' alt="" />
                        </div>
                    </div>
                    <div class="col-md-6">
                    <form onSubmit={handleSubmit(onSubmit) } className='p-3 border w-100 mx-auto bg-light'> 
                <input type='text' className='form-control mb-2'   {...register("name")} placeholder='Your Name' />  

                <input type='text' className='form-control mb-2'   {...register("email")} placeholder='Your Email' />
                    
                <input type='text' className='form-control mb-2' {...register("phone", { required: true })} placeholder='Price' />  
                <textarea type='text' className='form-control mb-2' {...register("description", { required: true })} placeholder='description' />  

                

                {errors.exampleRequired && <span>This field is required</span>}
                
                <input value="Contact" className='btn btn-danger' type="submit" />
            </form>
                    </div>
                </div>
            </div>
 
        </div>
        </>
    );
};

export default Contact;