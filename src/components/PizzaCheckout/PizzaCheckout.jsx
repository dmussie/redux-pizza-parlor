import axios from 'axios';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function PizzaCheckout(){
    const reduxStore = useSelector( store => store );
    const dispatch = useDispatch();
    const history = useHistory();

    const handleCheckout = () => {
        const action = { type: 'CLEAR_ALL_ARRAYS' }
        dispatch(action);

        axios({
            method: "POST",
            url: '/api/order',
            data: {
                customer_name: reduxStore.orderReducer.customerName,
                street_address: reduxStore.orderReducer.customerStreetAddress,
                city: reduxStore.orderReducer.customerCity,
                zip: reduxStore.orderReducer.customerZip,
                type: '',
                total: 0,
            }
        }).then((response) => {
            console.log('order completed');
            alert('Order Received!')
        }).catch((error) => {
            alert('Could Not Receive Order!')
        })

        history.push('/');
    }

    return(
        <div>

            <header className='App-header'>
                <h1 className='App-title'>Order Checkout</h1>
            </header>

                <h2>Step 3: Checkout</h2>

            <br />
                <div key={reduxStore.orderReducer.id}>
                    <p>{reduxStore.orderReducer.customerName}</p>
                    <p>{reduxStore.orderReducer.customerStreetAddress}</p>
                    <p>{reduxStore.orderReducer.customerCity}</p>
                    <p>{reduxStore.orderReducer.customerZip}</p>

                </div>

            <br />

            <table>
                <thead>
                    <tr>
                        <th>Pizza Name</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {reduxStore.cartReducer.map(( pizza ) => 
                    <tr key={pizza.id}>
                        <td>{pizza.name}</td> 
                        <td>{pizza.price}</td>

                    </tr>
                    )}
                </tbody>
            </table>  

            <span>Total Cost </span>

            <br />

            <button onClick={handleCheckout}>CHECKOUT</button>
        </div>
    )
}

export default PizzaCheckout;