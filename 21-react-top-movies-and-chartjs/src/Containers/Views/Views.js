import React, { Component, Fragment } from 'react';
import './Views.css';
import Chart from '../../Components/Chart/Chart';
import Loader from '../../Components/UI/Loader/Loader';

class Views extends Component {
	constructor(props) {
		super(props)
		this.state = {
			viewsData: null,
			viewsError: false,
		}
	}

	componentDidMount() {
		// could use this.props.match.params.id to dynamically fetch and load data
		fetch('https://my-json-server.typicode.com/sky-uk/monitoring-tech-test/data')
			.then(res => res.json())
			.then(viewsData => {
				console.log('views data', viewsData);
				this.setState({viewsData})
			})
			.catch(err => {
				console.log(err);
				this.setState({viewsError: true})
			})
	}

	render() {

		if (!this.state.viewsData) return (
			<Loader style = {{
				position: 'absolute',
			    top: '50%',
			    left: '50%',
			    transform: 'translate(-50%,-50%) scale(1.2)'
			}}/>
		)
		if (this.state.viewsError) return <h1>Error, could not load views data</h1>
		
		return (
			<Fragment>
				<h1>Views Data for <span className="title">{this.props.match.params.id}</span></h1>
				<Chart data={this.state.viewsData} />
			</Fragment>
		)
	}
}

export default Views;