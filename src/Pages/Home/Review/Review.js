import React, { useEffect, useState } from 'react';
import avater from './avater.jpg'
import './Review.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faStar } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faStar} />


const Review = () => {
    const [reviews, setAllReviews] = useState([]);
    console.log(reviews)
    useEffect( () => {
        fetch('https://floating-brushlands-69633.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setAllReviews(data));
    }, []);
    return (
        <div className='review'>
            <h2>Review Our Client</h2>
            <div className="container">
                <div className="row">
                    {
                        reviews.map(review => <div key={review._id} className='col-lg-4 col-md-6'>

                        <div className="single-review shadow bg-light"> 
                            <div className='d-flex aligh-items-center justify-content-between'>
                                <div>
                                    <img src={avater} className='img-fluid avater' alt="" />
                                </div>
                                <div>
                                    <h5 className='text-primary'>{review.name}</h5>  
                                    <p className='fw-bold '> Rating : {review.review} <span className='text-warning'>  {element}{element} {element} {element} {element}</span></p>
                                </div>
                            </div>
                            <p>{review.description}</p>
                        </div>

                        </div>)
                    }
                    
                     
                </div>
            </div>
        </div>
    );
};

export default Review;