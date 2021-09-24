import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory} from 'react-router-dom';


function CustomerForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    let total=0;
    //const [choice, setChoice] = useState('')
    const [customer, setCustomer] = useState({
        customer_name: '',
        street_address: '',
        city: '',
        zip: '',
        // choice: {
        //     pickup: '',
        //     delivery: ''
        // }
    });

    console.log(customer);

    const handleNextButton = (event) => {
        event.preventDefault();
        console.log('does it work?', customer);
        const action = {type:'SET_ORDER_LIST', payload:customer}
        dispatch(action);
        history.push('/checkout');
        
    }
    
    return (
        <div>
            <h2>Customer Information</h2>
            <form onSubmit={handleNextButton}>

                <div>
                    <input
                        value={customer.customer_name}
                        onChange={(event => setCustomer.customer_name(event.target.value))}
                        type='text'
                        placeholder='Name' />
                    <div />
                    <div>
                        <input
                            value={customer.street_address}
                            onChange={(event => setCustomer.street_address(event.target.value))}
                            type='text'
                            placeholder='Street Address'
                        />
                    </div>
                    
                    

                        <input
                            value={customer.city}
                            onChange={(event => setCustomer.city(event.target.value))}
                            type='text'
                            placeholder='City'
                        />
                   
                    
                        <input
                            value={customer.zip}
                            onChange={(event) => setCustomer.zip(event.target.value)}
                            type='number'
                            placeholder='Zip'
                        />
                    

                </div>
                {/* <div>
                    <input
                        onClick={() => setChoice(choice)}
                        type='radio'
                        value={customer.choice.pickup} />
                    <label for='pickup'>PickUp</label>

                    <input
                        onClick={() => setChoice(choice)}
                        type='radio'
                        value={customer.choice.delivery} />
                    <label for='delivery'>Delivery</label>

                </div> */}

                <button type='Submit'>Submit</button>
                {/* <span><input type='submit' value='Next' /></span> */}
            </form>

        </div>
    )
}

export default CustomerForm;

