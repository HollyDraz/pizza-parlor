import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Admin page for brianna (feel better <3)
/**
 * #### ADMIN PAGE
- [ ] Each PATH /admin link and router
- [ ] Display NAME, TIME OF ORDER, TYPE, TOTAL (in a Table)
- [ ] 'GET' request for data
 */


const AdminPage = () => {
    let [orderList, setOrderList] = useState([]);

    // On load, fetch order data from the server
    useEffect(() => {
        console.log('in useEffect')
        fetchOrders();
    }, []);

    const fetchOrders = () => {
        axios({
            method: 'GET',
            url: '/api/order'
        }).then((response) => {
            setOrderList(response.data);
        }).catch((err) => {
            console.log(err);
            alert('Something went wrong.');
        });
    };

    return (
        <>
        <div>
            <h1>Hello, Admin!</h1>
        </div>
        <div>
           <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Time Order Placed</th>
                <th>Type</th>
                <th>Cost</th>
            </tr>
            </thead>
            <tbody>
            {
                orderList.map(order => {
                    return <tr key={order.id}>
                        <td>{order.customer_name}</td>
                        <td>{order.time}</td>
                        <td>{order.type}</td>
                        <td>{order.total}</td>
                    </tr>
                })
            }
            </tbody>
           </table> 
        </div>
        </>
    )
}


export default AdminPage;