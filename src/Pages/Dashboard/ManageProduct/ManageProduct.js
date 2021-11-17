import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageProduct = () => {
    const [allProduct, setAllProduct] = useState([]); 
    useEffect( () => {
        fetch('https://floating-brushlands-69633.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setAllProduct(data))
    }, [])

    // delete product
    const handleDeleteProduct = id => {
        const procced = window.confirm('Are you sure you want to delete product?')
        if(procced){
            fetch(`https://floating-brushlands-69633.herokuapp.com/products/${id}`,{
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('Product Delete Successfully');
                    const remaingProduct = allProduct.filter(product => product._id !== id)
                    setAllProduct(remaingProduct);
                }
            })

        }
    }
    return (
        <div>
            <h2>Manage All Products Here.{allProduct.length} </h2>
            <div className='bg-light'> 
                 <div className="container mt-5">
                     <div className="row"> 
                         {
                             allProduct.map(product => <div className='col-lg-4 col-md-6 col-sm-12' key={product.id}>
                                 <div className="single-product rounded-3  mb-4 bg-light shadow">
                                     <img src={product.img} className='img-fluid' alt="" />
                                     <div className="content p-3 ">
                                        <h5 className='text-danger fw-bold'>{product.name}</h5>
                                        <p>{product.description}</p>
                                        <h5>Price: {product.price}</h5>
                                         
                                        <button onClick={() => handleDeleteProduct(product._id)} className='btn btn-warning mt-3'>Delete</button>
                                        
                                        
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

export default ManageProduct;