import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import Button from '../UI/Button/Button';
import './ProductList.css';

const productList = props => (
	<div className="productList">
        <ul>
            {props.data.map((product, ind) => (
                <li key={product.name}>
                    <Product 
                        name={product.name} 
                        price={product.price} 
                        add={() => props.addToBasket(ind)} />
                </li>
            ))}   
        </ul>

        <Link to='/checkout'>
            <Button classes={['purple', 'proceed']}>
                Proceed to checkout
            </Button>
        </Link>

    </div>
)


export default productList