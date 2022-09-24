import {useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


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
        console.log(order.includes(pizzaInput.id));
        pizzaInput.quantity = 1;
        dispatch({type: 'SET_ORDER', payload: pizzaInput});
        dispatch({type: 'SET_TOTAL_COST', payload: Number(pizzaInput.price)});
    }

    return(
        <>
        <div>
            <h3>Select pizza</h3>
            <ul>
                {pizzaList.map((pizza) =>
                <li  onClick={() => handlePizza(pizza)}  
                key={pizza.id}>{pizza.name} {pizza.description} {pizza.price} </li> 
                )}
                
            </ul>
            <button onClick={() => history.push('/order_details')}> Next page</button>
        </div>
        </>
    )
}


export default PizzaSelect;
