import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends Component {


	render() {
		// const labels = [];

		// const data = this.props.data.map(d => {
		// 	labels.push(new Date(d.timestamp * 1000),)
		// 	return d.value
		// })
		// // const options = {
	 // //        scales: {
	 // //            xAxes: [{
	 // //                time: {
	 // //                    unit: 'month'
	 // //                }
	 // //            }]
	 // //        }
	 // //    }
		// // console.log(data)

		// const chartData = {
		// 	labels: ['Scatter'],
		// 	datasets:[{
		// 		labels: labels,
		// 		// fill: false,
		// 		backgroundColor: 'rgba(75,192,192,0.4)',
		// 		pointBorderColor: 'rgba(75,192,192,1)',
		// 		// pointBackgroundColor: '#fff',
		// 		// pointBorderWidth: 1,
		// 		// pointHoverRadius: 5,
		// 		// pointHoverBackgroundColor: 'rgba(75,192,192,1)',
		// 		// pointHoverBorderColor: 'rgba(220,220,220,1)',
		// 		// pointHoverBorderWidth: 2,
		// 		// pointRadius: 1,
		// 		// pointHitRadius: 10,
		// 		data: data,
		// 	}]
		// }

		// console.log(chartData)

		const labels = [];
		const data = this.props.data.map(d => {
			labels.push(new Date(d.timestamp * 1000))
			return d.value;
		})
		const options = {
	        scales: {
	            xAxes: [{
	                type: 'time',
	                time: {
	                    displayFormats: {
	                        quarter: 'MMM YYYY'
	                    }
	                }
	            }]
	        }
	    }
	    console.log(labels)

		const chartData = {
		  	labels: labels,
		  	datasets: [
			    {
					label: 'My First dataset',
					fill: false,
					lineTension: 0.1,
					backgroundColor: 'rgba(75,192,192,0.4)',
					borderColor: 'rgba(75,192,192,1)',
					borderCapStyle: 'butt',
					borderDash: [],
					borderDashOffset: 0.0,
					borderJoinStyle: 'miter',
					pointBorderColor: 'rgba(75,192,192,1)',
					pointBackgroundColor: '#fff',
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: 'rgba(75,192,192,1)',
					pointHoverBorderColor: 'rgba(220,220,220,1)',
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					pointHitRadius: 10,
					data: data
			    }
		  	]
		};



		return (
			<div className="chart">
				<Line data={chartData} options={options} />
			</div>
		)
	}
}

export default Chart;