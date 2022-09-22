import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Checkout.css';

//Checkout componet for Bryn 
/**
 * ### CHECKOUT
- [x] useSelector to import order details (NAME, ADDRESS DELIVERY/PICKUP)
        - create reducers for all needed order details
        - useSelector to get the reducer values to Checkout.jsx
- [x] Table element for the ORDER posted
        - map pizza items into a table like in React gallery
- [x] TOTAL tied in with REDUX
- [x] CHECKOUT button
        - [ ] POST to the Database (ORDERS TABLE)
        - [ ] ALERT confirmation dialog
        - [ ] Clear the Cart
        - [ ] Navigate (link/router) to 'PIZZA HOME'
- [] make it look better
 */

const Checkout = () => {

        const history = useHistory();
        const dispatch = useDispatch();
        
        const customerName = useSelector(store => store.name);
        const streetAddress = useSelector(store => store.address);
        const city = useSelector(store => store.city);
        const zipCode = useSelector(store => store.zip);
        const totalCost = useSelector(store => store.totalCost);
        const getPizza = useSelector(store => store.getPizza);
        const order = useSelector(store => store.order);

        const submitOrder = () => {
                console.log('in submitOrder');
                axios ({
                        method: 'POST',
                        url: '/api/order',
                        data: {
                                customer_name: customerName,
                                street_address: streetAddress,
                                city: city,
                                zip: zipCode,
                                type: getPizza,
                                total: totalCost,
                                pizzas: order
                        }
                }).then(response => {
                        alert('Order submitted! Click OK to start new order.');
                        dispatch({type: 'CLEAR_ALL'});
                        history.push('/');
                }).catch(error => {
                        console.log(error);
                        alert('Something went wrong in submitOrder');
                });
        } // end submitOrder

        return  <div className = "checkout-page">
                <h2>Step 3: Checkout</h2>
                <div className = "customer-info">
                        <table>
                                <tbody>
                                        <tr>
                                                <td>
                                                        {customerName}
                                                </td>
                                        </tr>
                                        <tr>
                                                <td>
                                                        {streetAddress}
                                                </td>
                                        </tr>
                                        <tr>
                                                <td>
                                                        {city} {zipCode}
                                                </td>
                                        </tr>
                                </tbody>
                             
                        </table>
                </div>
                <br />
                <div className = "get-pizza">
                        <span>For {getPizza}</span>
                </div>
                <div className = "order-info">
                        <table className = "order-table">
                                <thead>
                                        <tr>
                                                <th>Pizza Type</th>
                                                <th>Quantity</th>
                                                <th>Cost</th>
                                        </tr>
                                </thead>
                                <tbody>
                                        {order.map(orderItem => {
                                                return  <tr key = {orderItem.type}>
                                                                <td>{orderItem.type}</td>
                                                                <td>{orderItem.quantity}</td>
                                                                <td>${orderItem.price}</td>
                                                        </tr>
                                                })
                                        }
                                </tbody>
                        </table>
                </div>
              
               <div className = "total-cost">
                        <h3>Total: ${totalCost}</h3>
               </div>
               <div>
                        <button className="submit-order" onClick={submitOrder}>Checkout</button>
               </div>

                
                </div>
} // end Checkout

export default Checkout;