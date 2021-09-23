import {useSelector} from 'react-redux';
import PizzaListItem from './PizzaListItem';

function PizzaList() {
    console.log('in PizzaList');
    const reduxStore = useSelector(store => store);
    console.log(reduxStore.pizzaReducer);
    return (
        <section>
            <ul>
            {reduxStore.pizzaReducer.map((pizza) => {
                return <PizzaListItem key={pizza.id} pizza={pizza}/>
            }
            
                
            )}
            </ul>
        </section>
    );
}

export default PizzaList;