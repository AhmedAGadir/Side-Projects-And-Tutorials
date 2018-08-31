import React from 'react';
import './Puzzle.css';

const puzzle = props => {
	return (
		<div className="puzzle">
				<p>{props.text}</p>
		</div>
	)
}

export default puzzle;