import { useDispatch } from 'react-redux';
import './PizzaList.css';

function PizzaListItem({ pizza, totalCost }) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        console.log('pizza to add', pizza.id);

        const action = ({type: 'ADD_TO_CART', payload: pizza});
        dispatch(action);
        alert(pizza.name + ' Pizza added!')
    }

    return (
        <div className="pizza-box">
            <img className="pizza-img" src={pizza.image_path} />
            <h4>{pizza.name}</h4>
            {pizza.description}
            <h5>{pizza.price}</h5>
            <button onClick={handleAddToCart}>Add To Cart</button>
        </div>
    );
}

export default PizzaListItem;