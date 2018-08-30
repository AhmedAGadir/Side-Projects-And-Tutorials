import React from 'react';
import './Swiper.css';
import swiperAPI from './SwiperAPI';

function swiper(props) {

	const images = [4,3,2,1].map(num => (
		<div className="swiper-slide" key={num.toString()}>
			<img src={require('../../assets/box' + num + '.jpg')} alt={'box' + num} />
		</div>
	))

	return (
		<div className="additional-wrapper"> 
			<div className="swiper-container">
				<div className="swiper-wrapper">
					{images}
				</div>
				<div className="swiper-button-prev">&lt;</div>
		    	<div className="swiper-button-next">&gt;</div>
			</div>		
		</div>
	)
}

export default swiper