import { useDispatch } from 'react-redux';
import './PizzaList.css';

function PizzaListItem({ pizza }) {
    const dispatch = useDispatch();

    const handleAddToCart = (params) => {
        console.log('pizza to add', pizza.id);
        const action = ({type: 'ADD_TO_CART', payload: pizza});
        dispatch(action);
        alert(pizza.name + ' Pizza added!')
    }

    return (
        <div className="pizza-box">
            <img className="pizza-img" src={pizza.image_path} />
            <br />
            {pizza.name}
            <br />
            {pizza.description}
            <br />
            {pizza.price}
            <br />
            <button onClick={handleAddToCart}>Add To Cart</button>
        </div>
    );
}

export default PizzaListItem;