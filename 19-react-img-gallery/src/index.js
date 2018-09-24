import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// could improve performance by using different images for differnt innerWidth values
// import background from './src/Gallery/pattern.png';
// document.querySelector('body').style.backgroundImage = `url(${background})`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

