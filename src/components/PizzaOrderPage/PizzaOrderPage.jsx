import {useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
//
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';



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
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4} rowSpacing={3}>
                
   
                {pizzaList.map((pizza) =>
                <Item>
                <li  onClick={() => handlePizza(pizza)}  
                key={pizza.id}>{pizza.name} {pizza.description} {pizza.price} </li> 
                 </Item>
                )}
               
            </Grid>
            </Box>
            </ul>
            <button onClick={() => history.push('/order_details')}> Next page</button>
        </div>
        </>
    )
}


export default PizzaSelect;
