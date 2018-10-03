import React from 'react';
import Product from '../Product/Product';
import './BasketCheckout.css'

const basketCheckout = props => {

	const basketItems = props.data.filter(product => product.basket !== 0);
	console.log(basketItems)

	return (	
		<div className="basketCheckout">
			<ul>
	            {basketItems.map((product, ind) => (
	                <li key={product.name}>
	                    <Product 
	                        name={product.name} 
	                        basketCount={product.basket}
	                        price={product.price} 
	                        remove={() => props.removeFromBasket(product.name)} />
	                </li>
	            ))}   
	        </ul>

		</div>
	)
}


export default basketCheckout