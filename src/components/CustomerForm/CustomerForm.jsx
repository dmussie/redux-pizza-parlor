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

    const handleNextButton = (event) => {
        event.preventDefault();
        const action = {type:'NEXT', payload:customer}
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
                        onChange={(event => setCustomer(event.target.value))}
                        type='text'
                        placeholder='Name' />
                    <div />
                    <div>
                        <input
                            value={customer.street_address}
                            onChange={(event => setCustomer(event.target.value))}
                            type='text'
                            placeholder='Street Address'
                        />
                    </div>

                    <div>

                        <input
                            value={customer.city}
                            onChange={(event => setCustomer(event.target.value))}
                            type='text'
                            placeholder='City'
                        />
                    </div>
                    <div>
                        <input
                            value={customer.zip}
                            onChange={(event) => setCustomer(event.target.value)}
                            type='number'
                            placeholder='Zip'
                        />
                    </div>

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

                <span><input type='submit' value='Next' /></span>
            </form>

        </div>
    )
}

export default CustomerForm;

