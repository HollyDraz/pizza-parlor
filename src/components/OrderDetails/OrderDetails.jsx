//order detail for alex

/**
 * ## ORDER DETAILS
- [ ] FORM Element with NAME ADDRESS CITY 
      ZIP
- [ ] Radio Buttons for PICKUP and DELIVERY
        - [ ] POST request axios
- [ ] Next Navigation link to CHECKOUT pag
 */
// imports
import { useSelector, useDispatch } from 'react-redux';
// Allows us to navigate to another page
import { useHistory } from 'react-router-dom'; // history import
//import {Box, FormControl, FormControlLabel, RadioGroup, Radio} from '@mui/material'

const customerInfo = () => {
    const history = useHistory(); // useHistory
    //useSelector & useDispatch
    const name = useSelector(store => store.name); // getter
    const address = useSelector(store => store.address); // getter
    const city = useSelector(store => store.city); // getter
    const zip = useSelector(store => store.zip); // getter
//     const delivery = useSelector(store => store.delivery); // getter
    const dispatch = useDispatch();

    // dispatch to index.js
    const handleName = (event) => {
        // Pass the data to our reducer
        dispatch({ type: 'SET_NAME', payload: event.target.value});
    }
    const handleAddress = (event) => {
      // Pass the data to our reducer
      dispatch({ type: 'SET_ADDRESS', payload: event.target.value});
  }
  const handleCity = (event) => {
      // Pass the data to our reducer
      dispatch({ type: 'SET_CITY', payload: event.target.value});
  }
  const handleZip = (event) => {
      // Pass the data to our reducer
      dispatch({ type: 'SET_ZIP', payload: event.target.value});
  }
//   const handleDelivery = (event) => {
//       // Pass the data to our reducer
//       dispatch({ type: 'SET_DELIVERY', payload: event.target.value});
//   }

    return (
        <>
            
            <h3>Step 2: Customer Information</h3>
            <div>
                <input value={name} onChange={handleName} className="input" type="text" placeholder='Name'/>
                <br />
                <input value={address} onChange={handleAddress} className="input" type="text" placeholder='Address'/>
                <br />
                <input value={city} onChange={handleCity} className="input" type="text" placeholder='City'/>
                <br />
                <input value={zip} onChange={handleZip} className="input" type="text" placeholder='Zip'/>
                <button onClick={() => history.push('/checkout')} className="button">Next</button>
            </div>
            {/* <Box>
                  <FormControl>
                        <FormLabel id='delivery-options-label'>
                            Delivery Options  
                        </FormLabel>
                        <RadioGroup
                        name='delivery-options'
                        aria-labellby='delivery-options-label'
                        value={delivery}
                        onChange={handleDelivery}
                        >
                        <FormControlLabel control={<Radio />} label='Pick Up' value='Pick Up'/>
                        <FormControlLabel control={<Radio />} label='Delivery' value='Delivery'/>
                        </RadioGroup>
                  </FormControl>
            </Box> */}
        </>
    );
}

//   const delivery = (state = '', action) => {
//       if (action.type === 'SET_DELIVERY') {
//           // dispatch will have type of 'SET_DELIVERY'
//           // and payload with the value to set
//           return action.payload;
//       } else if (action.type === 'CLEAR_ALL') {
//           return '';
//       }
//       return state;
//   }

export default customerInfo;