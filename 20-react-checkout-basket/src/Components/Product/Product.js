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

	let count = null;
	if (props.count) {
		count = (
			<div className="count">
       			<select value={props.count} onChange={props.change}>
       				<option value="1">1</option>
       				<option value="2">2</option>
       				<option value="3">3</option>
       				<option value="4">4</option>
       				<option value="5">5</option>
       				<option value="6">6</option>
       				<option value="7">7</option>
       				<option value="8">8</option>
       				<option value="9">9</option>
       				<option value="10">10</option>
       			</select>
       		</div>
		)
	}

	return (
		<div className="product">
	       <div>{props.name}</div>
	       {count}
	       {props.count ? <div>£{props.price * props.count}</div> : <div>£{props.price}</div>}
	       <div>
	           {button}
	       </div>
	    </div>
	)
}


export default product