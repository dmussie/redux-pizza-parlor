import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function CustomerForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    let total = 0;
    //const [choice, setChoice] = useState('')
    const [customerName, setCustomerName] = useState('');
    const [customerStreetAddress, setCustomerStreetAddress] = useState('');
    const [customerCity, setCustomerCity] = useState('');
    const [customerZip, setCustomerZip] = useState('');


    const handleNextButton = (event) => {
        event.preventDefault();
        const action = {
            type: 'SET_ORDER_LIST', payload: {
                customerName: customerName,
                customerStreetAddress: customerStreetAddress,
                customerCity: customerCity,
                customerZip: customerZip
            }
        }
        dispatch(action);
        history.push('/checkout');

    }

    return (
        <div>
            <h2>Customer Information</h2>
            <form onSubmit={handleNextButton}>

                <div>
                    <input
                        value={customerName}
                        onChange={(event => setCustomerName(event.target.value))}
                        type='text'
                        placeholder='Name' />
                    <div />
                    <div>
                        <input
                            value={customerStreetAddress}
                            onChange={(event => setCustomerStreetAddress(event.target.value))}
                            type='text'
                            placeholder='Street Address'
                        />
                    </div>

                    <div>

                        <input
                            value={customerCity}
                            onChange={(event => setCustomerCity(event.target.value))}
                            type='text'
                            placeholder='City'
                        />
                    </div>
                    <div>
                        <input
                            value={customerZip}
                            onChange={(event) => setCustomerZip(event.target.value)}
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

