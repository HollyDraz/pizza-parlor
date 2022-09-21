import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

//Checkout componet for Bryn 
/**
 * ### CHECKOUT
- [x] useSelector to import order details (NAME, ADDRESS DELIVERY/PICKUP)
        - create reducers for all needed order details
        - useSelector to get the reducer values to Checkout.jsx
- [ ] Table element for the ORDER posted
        - map pizza items into a table like in React gallery
- [ ] TOTAL tied in with REDUX
- [ ] CHECKOUT button
        - [ ] POST to the Database (ORDERS TABLE)
        - [ ] ALERT confirmation dialog
        - [ ] Clear the Cart
        - [ ] Navigate (link/router) to 'PIZZA HOME'
 */

const Checkout = () => {

        const history = useHistory();
        
        const customerName = useSelector(store => store.customerName);
        const streetAddress = useSelector(store => store.streetAddress);
        const city = useSelector(store => store.city);
        const zipCode = useSelector(store => store.zipCode);
        const totalCost = useSelector(store => store.totalCost);
        const getPizza = useSelector(store => store.getPizza);
        const order = useSelector(store => store.order);

        return  <>
                <h2>Step 3: Checkout</h2>
                <div className = "customer-info">
                        <table>
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
                        </table>
                </div>
                <div className = "get-pizza">
                        <span>{getPizza}</span>
                </div>
                <table className = "order-items">
                        <thead>
                                <tr>
                                        <th>Pizza Type</th>
                                        <th>Cost</th>
                                </tr>
                        </thead>
                        <tbody>
                                {order.map(orderItem => {
                                        return  <tr key = {orderItem.type}>
                                                        <td>{orderItem.type}</td>
                                                        <td>${orderItem.price}</td>
                                                </tr>
                                        })
                                }
                        </tbody>
                </table>
               <div className = "total-cost">
                        <h3>Total: ${totalCost}</h3>
               </div>
               <div>
                        <button>Checkout</button>
               </div>

                
                </>
} // end Checkout

export default Checkout;