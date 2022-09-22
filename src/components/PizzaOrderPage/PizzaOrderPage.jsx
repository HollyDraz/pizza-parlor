import {useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

const PizzaSelect = () => {
    //history to next page 
    const history = useHistory();
    //create setters and getters 
    const dispatch = useDispatch();
    //create getter here 

    return(
        <>
        <div>
            <h3>Select pizza</h3>
            
            <button>next page</button>
        </div>
        </>
    )
}


export default PizzaSelect;
