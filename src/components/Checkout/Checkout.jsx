import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Checkout.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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

        return  <Container className = "checkout-page">
                        <Typography variant="h3">Step 3: Checkout</Typography>
                        <Container style={{display: "flex", justifyContent: "space-between"}}>
                                <Card className = "customer-info" elevation={10} sx={{minWidth: 250, minHeight: 100, backgroundColor: "olive", color: "white"}}>
                                        <CardContent>
                                                <Typography sx={{fontSize: 20}}>
                                                        Customer Info
                                                </Typography>
                                                <Typography>
                                                        {customerName}
                                                </Typography>
                                                <Typography>
                                                        {streetAddress}
                                                </Typography>
                                                <Typography>
                                                        {city} {zipCode}
                                                </Typography>
                                        </CardContent>  
                                </Card>
                                <Card elevation={10} sx={{minWidth: 100, maxHeight: 65, backgroundColor: "olive", color: "white"}} className = "get-pizza">
                                        <CardContent>
                                                <Typography sx={{fontSize: 20}}>
                                                        For {getPizza}
                                                </Typography>    
                                        </CardContent>
                                </Card>
                        </Container>
                        <br />
                       
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
                                                        return  <tr key = {orderItem.id}>
                                                                        <td>{orderItem.name}</td>
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

                        
                </Container>
} // end Checkout

export default Checkout;