import React, { Component, Fragment } from 'react';
import Swiper from './components/Swiper/Swiper';
import Puzzle from './components/Puzzle/Puzzle';
import Form from './components/Form/Form';

// change this to be a stateless component
// perhaps use a layout component
class App extends Component {

	static defaultProps = {
		text: '	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim quibusdam, quam iste aliquam esse cupiditate repellendus fugit iusto perspiciatis voluptas rem veniam ab modi, quia quo odit architecto, distinctio dolores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore voluptatibus, nostrum quia quisquam quaerat',
		formSteps: [
		    [{
		        title: 'First Name',
		        type: 'text',
		      },
		      {
		        title: 'Last Name',
		        type: 'text',
		      }
		    ],
		    [{
		        title: 'Telephone Number',
		        type: 'tel',
		        pattern: "/^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/",
		      },
		      {
		        title: 'Email Address',
		        type: 'email',
		      }
		    ]
		]
	};

	render() {
		return (
			<Fragment>
		    	<h1>Page Title</h1>
	    		<Swiper />
	    		<hr/>
	    		<div className="puzzle-form-wrap">
	    			<Puzzle text={this.props.text}/>
	    			<Form formSteps={this.props.formSteps}/>
	    		</div>
		    	<hr/>
		    	<footer><p>Page footer</p></footer>
			</Fragment>
		);
	}
}

export default App;
