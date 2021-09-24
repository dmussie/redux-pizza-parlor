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
        history.push('/');
    }

    console.log('in reducer', reduxStore.orderReducer);

    return(
        <div>

            <header className='App-header'>
                <h1 className='App-title'>Order Checkout</h1>
            </header>

                <h2>Step 3: Checkout</h2>

            <br />
                <div key={reduxStore.orderReducer.id}>
                    <h3>{reduxStore.orderReducer.customer_name}</h3>
                    <h3>{reduxStore.orderReducer.street_address}</h3>
                    <h3>{reduxStore.orderReducer.city}</h3>
                    <h3>{reduxStore.orderReducer.zip}</h3>

                </div>
                <h3>Address</h3> 
                <p>delivery method</p>

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