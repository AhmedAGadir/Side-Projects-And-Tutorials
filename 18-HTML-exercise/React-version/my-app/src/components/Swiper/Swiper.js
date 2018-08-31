import React, { Component } from 'react';
import swiperInit from './SwiperAPI';
import './Swiper.css';


class Swiper extends Component {

	componentDidMount() {
		swiperInit();
	}

	render() {

		const swipeItems = [4,3,2,1].map(num => (
			<div className="swiper-slide" key={num.toString()}>
				<img src={require('../../assets/box' + num + '.jpg')} alt={'box' + num} />
			</div>
		))

		return (
			<div className="additional-wrapper"> 
				<div className="swiper-container">
					<div className="swiper-wrapper">
						{swipeItems}
					</div>
					<div className="swiper-button-prev">&lt;</div>
			    	<div className="swiper-button-next">&gt;</div>
				</div>		
			</div>
		)
	}
}

export default Swiper