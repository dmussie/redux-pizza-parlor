import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';


function CustomerForm() {
    const [choice, setChoice] = useState('')
    const [customer, setCustomer] = useState({
        name: '',
        streetAdress: '',
        city: '',
        zip: '',
        choice: {
            pickup: '',
            delivery: ''
        }
    });

    const handleSubmit = () => {

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <div>
                    <input
                        value={customer.name}
                        onChange={(event => setCustomer(event.target.value))}
                        type='text'
                        placeholder='Name' />
                    <div />
                    <div>
                        <input
                            value={customer.streetAdress}
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
                <div>
                    <input
                        onClick={() => setChoice('pickup')}
                        type='radio'
                        value={customer.choice.pickup} />
                    <label for='pickup'>PickUp</label>

                    <input
                        onClick={() => setChoice('delivery')}
                        type='radio'
                        value={customer.choice.delivery} />
                    <label for='delivery'>Delivery</label>

                </div>

                <span><input type='submit' value='Next' /></span>
            </form>

        </div>
    )
}

export default CustomerForm;

