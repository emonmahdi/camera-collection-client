import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    console.log(user?.email);
    const [orders, setOrders] = useState([]); 
    console.log(orders);
    const emai = user?.email 
    useEffect( () => {
        fetch(`https://floating-brushlands-69633.herokuapp.com/order/${emai}`)
            .then(res => res?.json())
            .then(data => setOrders(data));
    }, []);

    // delete order 
    const handleDeleteOrder = id => { 
        const procced = window.confirm('Are you sure you want to Remove Order');
        if(procced){
             const url = `https://floating-brushlands-69633.herokuapp.com/order/${id}`;
                 fetch(url, { 
                     method: 'DELETE', 
                 })
                 .then(res => res.json()) 
                 .then(data => {
                     if(data.deletedCount > 0){ 
                         alert('Delete Successfully'); 
                         const remaingOrder = orders.filter(order => order?._id !== id);
                         setOrders(remaingOrder);
                     }
                 })
              }
     }
    return (
        <div> 
            <h2 className='text-center my-3 fw-bold text-danger'>My Orders Items:{orders?.length}</h2> 
            <div className="container  mx-auto">
                <div className='row'>
                    {
                        orders.map(order => <div className='col-lg-6 p-3 mb-4 shadow bg-light ' key={order?._id}> 
                                
                            <div className="single-order">
                                <img src={order?.getDetails?.img} className='img-fluid' alt="" />
                                <h3 className='text-dark fw-bold mt-2'>{order?.getDetails?.name}</h3>
                                <h5 className='my-3'>Id: {order?.getDetails?._id}</h5>
                                <h6>Price : <span className='text-danger  fw-bold'>${order?.getDetails?.price}</span></h6>
                                <h6>Status : {order?.status}</h6>
                                <button onClick={() => handleDeleteOrder(order?._id)}  className='btn btn-danger mt-3'>Remove Order</button>
                            </div> 
                            
                        </div>)
                    }
                 </div>
            </div>
        </div>
    );
};

export default MyOrders;