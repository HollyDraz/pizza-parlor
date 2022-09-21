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
                <span>Here's the checkout page!</span>
                </>
} // end Checkout

export default Checkout;