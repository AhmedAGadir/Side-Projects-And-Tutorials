import React from 'react';
import Product from '../Product/Product';
import './BasketCheckout.css'

const basketCheckout = props => {

	const basketItems = props.data.filter(product => product.basket !== 0);
	
	let subtotal;
	if (basketItems.length === 0) {
		subtotal = 0;
	} else {
		subtotal = basketItems.map(product => product.basket * product.price).reduce((a,b) => a + b);
	}

	return (	
		<div className="basketCheckout">
			<ul>
	            {basketItems.map((product, ind) => (
	                <li key={product.name}>
	                    <Product 
	                        name={product.name} 
	                        count={product.basket}
	                        price={product.price} 
	                        remove={() => props.removeFromBasket(product.name)}
	                        change={e => props.changeBasket(e, product.name)} />
	                </li>
	            ))}   
	        </ul>

	        <p>Subtotal: £{subtotal}</p>

		</div>
	)
}


export default basketCheckout