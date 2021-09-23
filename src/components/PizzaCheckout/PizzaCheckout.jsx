import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function PizzaCheckout(){
    const reduxStore = useSelector( store => store );
    const history = useHistory();

    const handleCheckout = () => {
        // const action = { type: 'CLEAR_ALL_ARRAYS' }
        // dispatch(action);
        history.push('/');
    }

    return(
        <div>

            <header className='App-header'>
                <h1 className='App-title'>Order Checkout</h1>
            </header>

                <h2>Step 3: Checkout</h2>

            <br/>

                <h3>{/* import the mailing information */}Address</h3> <p>delivery method</p>

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
                        <td>Sausage</td>
                        <td>price</td>
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