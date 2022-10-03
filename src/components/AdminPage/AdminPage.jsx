import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminPage.css';


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
            console.log('response', response.data)
            console.log('orderList', orderList);
            formatDates(response.data);
        }).catch((err) => {
            console.log(err);
            alert('Something went wrong.');
        });
    };

    const formatDates = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "2-digit"}
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    return (
        <>
        <div>
            <h2>Hello, Admin!</h2>
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
                        <td>{formatDates(order.time)}</td>
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