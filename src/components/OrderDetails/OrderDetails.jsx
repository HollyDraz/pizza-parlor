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
import {Box, 
        FormControl, 
        FormLabel, 
        FormControlLabel, 
        RadioGroup, 
        Radio,
        Button,
        } from '@mui/material';
import './OrderDetails.css'

const customerInfo = () => {
    const history = useHistory(); // useHistory
    //useSelector & useDispatch
    const name = useSelector(store => store.name); // getter
    const address = useSelector(store => store.address); // getter
    const city = useSelector(store => store.city); // getter
    const zip = useSelector(store => store.zip); // getter
    const delivery = useSelector(store => store.delivery); // getter
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
  const handleDelivery = (event) => {
      // Pass the data to our reducer
      dispatch({ type: 'SET_DELIVERY', payload: event.target.value});
  }

    return (
        <>
            
            <h3>Step 2: Customer Information</h3>
            <div>
                <Box sx={{position: 'absolute',
            left: 25,
            top: '22%',
            margin: '5px',
            padding: '10px',
            width: '40%',
            
            }}>
                <Box sx={{p: 2,
               
                }}>
                <input value={name} onChange={handleName} className="input" type="text" placeholder='Name'/>
                <br />
                </Box>
                <Box sx={{p: 2,
               
                }}>
                <input value={address} onChange={handleAddress} className="input" type="text" placeholder='Address'/>
                <br />
                </Box>
                <Box sx={{p: 2,
               
                }}>
                <input value={city} onChange={handleCity} className="input" type="text" placeholder='City'/>
                <br />
                </Box>
                <Box sx={{p: 2,
                size: 50,
               
                }}>
                <input value={zip} onChange={handleZip} className="input" type="text" placeholder='Zip'/>
                </Box>
                
                </Box>
            <Box sx={{ border: '1px solid',
                        borderRadius: 25,
                        display: "flex",
                        justifyContent: "right",
                        p: 20}}>
                  <FormControl>
                        <FormLabel id='delivery-options-label'>
                            Delivery Options  
                        </FormLabel>
                        <RadioGroup
                        name='delivery-options'
                        aria-labelledby='delivery-options-label'
                        value={delivery}
                        onChange={handleDelivery}
                        >
                        <FormControlLabel control={<Radio />} label='Pick Up' value='Pick Up'/>
                        <FormControlLabel control={<Radio />} label='Delivery' value='Delivery'/>
                        </RadioGroup>
                  </FormControl>
            </Box>
            <Box sx={{height: '50',}} >
            <Button style={{marginTop: 5}} size="large" variant="contained" color="primary" className="Next-button" onClick={() => history.push('/checkout')}>Next</Button>
            </Box>
            </div>
        </>
    );
}

export default customerInfo;