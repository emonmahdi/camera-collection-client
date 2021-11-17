import { Link } from 'react-router-dom';
import React from 'react';
import notFound from './notfound.png'


const NotFound = () => {
    return (
        <div className='text-center'>
        <h2 className='text-danger'> The page</h2>
        <div className="notfound-img">
            <img style={{height:300}} src={notFound} className='img-fluid' alt="" />
        </div>
        <div className="go-back">
            <Link to='/home'>
                <button className='btn btn-primary'>Go Back Home</button>
            </Link>
        </div>
    </div>
    );
};

export default NotFound;