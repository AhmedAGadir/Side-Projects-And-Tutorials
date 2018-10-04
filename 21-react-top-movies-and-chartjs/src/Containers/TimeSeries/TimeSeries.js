import React, { Component, Fragment } from 'react';
import './TimeSeries.css';
import Chart from '../../Components/Chart/Chart';
import Loader from '../../Components/UI/Loader/Loader';

class TimeSeries extends Component {
	constructor(props) {
		super(props)
		this.state = {
			timeSeriesData: null,
			timeSeriesError: false,
		}
	}

	componentDidMount() {
		fetch('https://my-json-server.typicode.com/sky-uk/monitoring-tech-test/data')
			.then(res => res.json())
			.then(timeSeriesData => {
				console.log('timeseries data', timeSeriesData);
				this.setState({timeSeriesData})
			})
			.catch(err => {
				console.log(err);
				this.setState({timeSeriesError: true})
			})
	}

	render() {
		if (!this.state.timeSeriesData) return (
			<Loader style = {{
				position: 'absolute',
			    top: '50%',
			    left: '50%',
			    transform: 'translate(-50%,-50%) scale(1.2)'
			}}/>
		)
		if (this.state.timeSeriesError) return <h1>Error, could not load timeseries data</h1>
		
		return (
			<Fragment>
				<h1>TimeSeries Data</h1>
				<Chart data={this.state.timeSeriesData} />
			</Fragment>
		)
	}
}

export default TimeSeries;