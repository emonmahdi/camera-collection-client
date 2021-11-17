import React, { useEffect, useState } from 'react';

const MangeOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    console.log(allOrders)
    useEffect( () => {
        fetch('https://floating-brushlands-69633.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setAllOrders(data));
    }, []);
     // delete order 
     const handleDeleteOrder = id => { 
        const procced = window.confirm('Are you sure you want to Remove Order');
        if(procced){
             const url = `https://floating-brushlands-69633.herokuapp.com/orders/${id}`;
                 fetch(url, { 
                     method: 'DELETE', 
                 })
                 .then(res => res.json()) 
                 .then(data => {
                     if(data.deletedCount > 0){ 
                         alert('Delete Successfully'); 
                         const remaingOrder = allOrders.filter(order => order?._id !== id);
                         setAllOrders(remaingOrder);
                     }
                 })
              }
     }
    return ( 
        <div className='mt-3'>
            <h2 className='text-center mb-4 fw-bold text-danger'>All Order Manage Area {allOrders.length}</h2>
            <div className="container ">
                <div className="row"> 
                    {
                    allOrders.map(sOrder => <div  className="col-lg-6  " key={sOrder._id}> 
                                
                            <div className="single-order bg-light text-dark rounded shadow p-5 mb-3">
                                <h4>Order Title: {sOrder.getDetails.name} </h4>
                                <h5>User Email: {sOrder.email} </h5>
                                <h6>User Name:  {sOrder.name}</h6>
                                <h6>Order ID: {sOrder.getDetails._id}</h6>
                                <span>Status: {sOrder.status}</span>
                                <h5 className='mt-3'>
                                <button onClick={() => handleDeleteOrder(sOrder?._id)}  className='btn btn-warning mt-3'>Remove Order</button>
                                </h5>
                                
                            </div> 
                    </div>) 
                    }
                </div>
            </div> 
        </div> 
    );
};

export default MangeOrders;