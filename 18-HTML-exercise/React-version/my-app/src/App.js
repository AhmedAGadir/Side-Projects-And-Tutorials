import React, { Component } from 'react';
import './App.css';

import Swiper from './components/Swiper/Swiper';

class App extends Component {
  render() {
    return (
    	<div className="App">
        	<h1>Page Title</h1>
        
        	<main>
        		<Swiper />
        		<hr/>
        		<div className="puzzle-form-wrap">
        		</div>
        	</main>

        	<footer>
        		<hr/>
        		<p>Page footer</p>
        	</footer>

    	</div>
    );
  }
}

export default App;
