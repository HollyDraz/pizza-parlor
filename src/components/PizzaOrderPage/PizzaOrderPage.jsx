import {useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
//imports for grid
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
//Card import 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
//import for button 
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const PizzaSelect = () => {
    //history to next page 
    const history = useHistory(); 
    const dispatch = useDispatch();
    let [pizzaList, setPizzaList] = useState([]); 
    const order = useSelector(store => store.order);

    useEffect(() => {
        console.log('useEffect - page load');
        getPizza();
      }, []); 

    const getPizza = () => {
        axios({
            method: 'GET',
            url: '/api/pizza'
        }).then((response) => {
           setPizzaList(response.data);
        }).catch((err)=>{
            console.log(err, 'problem in GET for pizza order page');
        });
    };
    
    const handlePizza = (pizzaInput) => {
        console.log('in handle pizza', pizzaInput);
        console.log(order.includes(pizzaInput));
        if(order.includes(pizzaInput)){
            alert('Each item can only be added to the cart once. Sorry for any inconvenience!');
            return;
        }
        pizzaInput.quantity = 1;
        dispatch({type: 'SET_ORDER', payload: pizzaInput});
        dispatch({type: 'SET_TOTAL_COST', payload: Number(pizzaInput.price)});
    }

    return(
        <>
        <div>
            <h3>Select pizza</h3>
            <ul>
            <Box className="box" sx={{ flexGrow: 1 }}>
            <Grid className="grid"  xs="auto" container spacing={4} rowSpacing={3} columnSpacing={{xs:4, sm: 5, md:6 }}>
                {pizzaList.map((pizza) =>
              
                    <Card variant="outlined">
                        <CardContent className='pizza-info'>
                <p onClick={() => handlePizza(pizza)}  
                key={pizza.id}> 
                {pizza.name} <br/>
                {pizza.description}  <br/>
                {pizza.price} </p> 
                
                        </CardContent>
                    </Card>
                 
                )}
               
            </Grid>
            </Box>
            </ul>
            <Button color="error" variant="contained" onClick={() => history.push('/order_details')}> Next page</Button>
        </div>
        </>
    )
}


export default PizzaSelect;
