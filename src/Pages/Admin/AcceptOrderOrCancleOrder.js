import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AcceptOrderOrCancleOrder = () => {

    const {id} = useParams();
    const [order, setOrder] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      fetch(`http://localhost:5000/order/${id}`)
        .then((res) => res.json())
        .then((info) => setOrder(info));
    }, [id]);


    const handleAcceptOrder = event => {
        event.preventDefault();
        const orderStatus = event.target.orderStatus.value;
        
        const accepted = {orderStatus};

        const url = `http://localhost:5000/order-accept/${order._id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(accepted)
        })
            .then(res => res.json())
            .then(result => {
                navigate('/admin/orders');

            })
    };


    const handleCancelOrder = event => {
        event.preventDefault();
        const orderStatus = event.target.orderStatus.value;
        
        const cancelled = {orderStatus};

        const url = `http://localhost:5000/order-cancel/${order._id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cancelled)
        })
            .then(res => res.json())
            .then(result => {
                navigate('/admin/orders');

            })
    };



    return (
        <div>
            <form onSubmit={handleAcceptOrder}>
            <input type="text" hidden value='Accepted' name='orderStatus' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <input type='submit' className='btn' value='Accept Order'></input>
            </form>
            <div className="divider">OR</div>

            <form onSubmit={handleCancelOrder}>
            <input type="text" hidden value='Cancelled' name='orderStatus' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <input type='submit' className='btn' value='Cancel Order'></input>
            </form>
        </div>
    );
};

export default AcceptOrderOrCancleOrder;