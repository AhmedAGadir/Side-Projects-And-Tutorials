import React from 'react';
import './Product.css'
import Button from '../UI/Button/Button';

const product = props => {

	let button;
	if (props.add) {
		button = <Button click={props.add} classes={["blue"]}>Add to basket</Button>
	}
	if (props.remove) {
		button = <Button click={props.remove} classes={["blue"]}>Remove</Button>
	}	
	return (
		<div className="product">
	       <div>{props.name}</div>
	       {props.basketCount ? <div className="basketCount">{props.basketCount}</div> : null}
	       {props.basketCount ? <div>£{props.price * props.basketCount}</div> : <div>£{props.price}</div>}
	       <div>
	           {button}
	       </div>
	    </div>
	)
}


export default product