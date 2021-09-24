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

    return(
        <div>

            <header className='App-header'>
                <h1 className='App-title'>Order Checkout</h1>
            </header>

                <h2>Step 3: Checkout</h2>

            <br/>
                {/* {reduxStore.orderReducer.map(( user, i ) => {
                    <h3 key={i}>
                        {user.customer_name} 
                        {user.street_address}
                        {user.user}
                        {user.zip}
                    </h3>
                })} */}
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
                    <tr>
                        {reduxStore.cartReducer.map(( pizza, i ) => 
                            <td key={i}>{pizza.name}</td>
                        )}
                    </tr>
                </tbody>
            </table>  

            <span>Total Cost </span>

            <br />

            <button onClick={handleCheckout}>CHECKOUT</button>
        </div>
    )
}

export default PizzaCheckout;