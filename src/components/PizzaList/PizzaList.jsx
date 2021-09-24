import { useSelector } from 'react-redux';
import PizzaListItem from './PizzaListItem';
import './PizzaList.css';
import {useHistory} from 'react-router-dom';

function PizzaList() {
    let totalCost = 0;
    console.log('in PizzaList');
    const reduxStore = useSelector(store => store);
    const history = useHistory();
    console.log(reduxStore.pizzaReducer);
const nextPage = () => {
    history.push('/order');    
}

    return (
        <section className='pizza-list'>
            <h3 className="total-cost">Total Cost: ${totalCost}</h3>
                {reduxStore.pizzaReducer.map((pizza) => {
                    return <PizzaListItem key={pizza.id} pizza={pizza} totalCost={totalCost}/>
                }
                )}
        <button onClick={nextPage}>Next</button>
                
        </section>
    );
}

export default PizzaList;