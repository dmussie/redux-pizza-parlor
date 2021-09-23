import {useSelector} from 'react-redux';

function Admin () {
   let totalCost = 0;
   const myReduxStore = useSelector(store => store);
   // map through pizza cost item thing, and add cost to total 
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Time Order Placed</th>
                    <th>Type</th>
                    <th>Cost</th>  
                </tr>
            </thead>

            <tbody>
                {
                    reduxStore.map(order => (
                        <tr>
                            <td>order.name</td>
                            <td>order.time</td>
                            <td>order.type</td>
                            <td>order.cost</td>
                        </tr>
                    ))
                    
                }
                
            </tbody>
            
            
        </table>
        </>
    )
}