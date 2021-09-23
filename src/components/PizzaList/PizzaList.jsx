import {useSelector} from 'react-redux';

function PizzaList() {
    console.log('in PizzaList');
    const reduxStore = useSelector(store => store);
    console.log(reduxStore.pizzaReducer);
    return (
        <section>
            <ul>

            {reduxStore.pizzaReducer.map((pizza) => 
                <li key={pizza.id}>{pizza.name} {pizza.description} {pizza.price} <img src={pizza.image_path}/></li>
            )}
            </ul>
        </section>
    );
}

export default PizzaList;