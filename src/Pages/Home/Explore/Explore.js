import React, { useEffect, useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import { Link } from 'react-router-dom';
import './Explore.css'
const Explore = () => { 
    const [explores, setExplores] = useState([]);

    useEffect( () => {
        fetch('https://floating-brushlands-69633.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setExplores(data))
    }, [])

    return (
        <div>
            <Navigation></Navigation>
            <div className='bg-light'>
                 <h2 className='mt-2 fw-bold'>Our Explore Products.{explores.length}</h2>
                 <div className="container mt-5">
                     <div className="row"> 
                         {
                             explores.map(product => <div className='col-lg-4 col-md-6 col-sm-12' key={product.id}>
                                 <div className="single-product rounded-3  mb-4 bg-light shadow">
                                     <img src={product.img} className='img-fluid' alt="" />
                                     <div className="content p-3 ">
                                        <h5 className='text-danger fw-bold'>{product.name}</h5>
                                        <p>{product.description}</p>
                                        <h5>Price: {product.price}</h5>
                                        <Link to={`/product/${product.id}`}>
                                             <button className='btn btn-primary mt-3'>Purches</button>
                                        </Link>
                                        
                                     </div>
                                 </div>
                             </div>)
                         }
                     </div>
                 </div>
            </div>
            
        </div>
    );
};

export default Explore;