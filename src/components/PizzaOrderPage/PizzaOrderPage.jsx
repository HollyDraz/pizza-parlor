// Pizza order page: Holly 
// To Do:
/*# PIZZA ORDER PAGE
- [ ] Total: with shopping cart
- [ ] Redux for Total
- [ ] Body
- [ ] Append our 'GET' of Pizza options.//hold 
- [ ] Axios request // hold 
- [ ] Next Navigation (Router/Link) to 
    Order Detail page
    */



// select pizza 
//imports
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

