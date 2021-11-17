import React from 'react';
import img from './u2.jpg'
import './Upcomming.css'
const Upcomming = () => {
    return (
        <div className='upcomming'>
            <h2>Our <span className='text-danger'>Upcomming Camera</span> </h2>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 text-start">
                        <div className='up-text'>
                            <h3>Most Security Based Camera In the World</h3>
                            <p>With a massive range of powerful new features with a gorgeous new interface, Our app is easier to use and more versatile than ever before.</p>
                            <button className='btn btn-info'>Learn More</button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="img">
                            <img src={img} className='img-fluid shadow rounded-3' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Upcomming;