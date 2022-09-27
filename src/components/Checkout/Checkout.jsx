import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Checkout.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const Checkout = () => {

        const history = useHistory();
        const dispatch = useDispatch();
        
        const customerName = useSelector(store => store.name);
        const streetAddress = useSelector(store => store.address);
        const city = useSelector(store => store.city);
        const zipCode = useSelector(store => store.zip);
        const totalCost = useSelector(store => store.totalCost);
        const delivery = useSelector(store => store.delivery);
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
                                type: delivery,
                                total: totalCost,
                                pizzas: order,
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

        const theme = createTheme({
                palette: {
                    primary: {
                        main: '#972a31'
                    }
                }
            }); // end theme

        return  <Container className = "checkout-page">
                        <Typography variant="h3">Checkout</Typography>
                        <br />
                        <Container style={{display: "flex", justifyContent: "right"}}>
                                <Container maxWidth="md" className = "order-info">
                                        <Grid container spacing={2} className = "order-table" style={{display: "flex", justifyContent: "left"}}>
                                                {order.map(orderItem => {
                                                        return <Grid item xs={6} sm={4} md={3}>
                                                                        <Card key = {orderItem.id} elevation={10} sx={{backgroundColor: "lightgrey"}}>
                                                                                <CardMedia 
                                                                                        component="img"
                                                                                        height="100"
                                                                                        image={orderItem.image_path}
                                                                                        alt={orderItem.description}
                                                                                />
                                                                                <CardContent>
                                                                                        <Typography>{orderItem.name}</Typography>
                                                                                        <Typography>${orderItem.price}</Typography>
                                                                                </CardContent>
                                                                                
                                                                        </Card>
                                                                </Grid>

                                                        
                                                        })
                                                }  
                                        </Grid>
                                </Container>
                                <Card className = "customer-info" elevation={10} sx={{minWidth: 150, maxHeight: 150, backgroundColor: "darkolivegreen", color: "white"}}>
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
                        </Container>
                        <br />
                        <Container style={{display: "flex", justifyContent: "right"}}>
                                <Card elevation={10} sx={{minWidth: 100, maxHeight: 65, backgroundColor: "darkolivegreen", color: "white"}} className = "get-pizza">
                                        <CardContent>
                                                <Typography sx={{fontSize: 20}}>
                                                        For {delivery}
                                                </Typography>    
                                        </CardContent>
                                </Card>
                        </Container>
                        <br />
                        <Container style={{display: "flex", justifyContent: "right"}} className = "total-cost">
                                <Typography sx={{fontSize: 20}}>Total: ${totalCost.toFixed(2)}</Typography>     
                        </Container>
                        <br />
                        <Container style={{display: "flex", justifyContent: "right"}} className = "checkout-button">
                                <ThemeProvider theme={theme}>
                                        <Button style={{marginTop: 5}} size="large" variant="contained" color="primary" className="submit-order" onClick={submitOrder}>Checkout</Button>
                                </ThemeProvider>
                        </Container>
                </Container>
} // end Checkout

export default Checkout;