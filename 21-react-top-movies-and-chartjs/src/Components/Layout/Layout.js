import React, { Fragment } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Home from '../../Containers/Home/Home';
import TimeSeries from '../../Containers/TimeSeries/TimeSeries'
import './Layout.css';

const layout = props => (
	<Fragment>
		<header>
			<nav>
				<ul>
					<li><NavLink to="/" exact>Home</NavLink></li>
					<li><NavLink to="/timeSeries" >TimeSeries</NavLink></li>
				</ul>
			</nav>
		</header>
		<main>
			<Route path="/" exact component={Home} />
			<Route path="/timeSeries" exact component={TimeSeries} />
		</main>
		<footer>
			<p>Coded by <a target="_blank" href="http://ahmedagadir.com" rel="noopener noreferrer">Ahmed Abdel Gadir</a></p>
		</footer>
	</Fragment>
)

export default layout;