function PizzaListItem({pizza}) {
    return(
        <div className="pizza-box">
                    <img className="pizza-img" src={pizza.image_path}/>
                    <br />
                    {pizza.name} 
                    <br />
                    {pizza.description} 
                    <br />
                    {pizza.price}
                    </div>
    );
}

export default PizzaListItem;