import React, { Component } from 'react';
//npm install --save react-router-dom;
import { NavLink, Route } from 'react-router-dom';
import Trending from '../../Containers/Trending/Trending';
import Logo from '../UI/Logo/Logo';
import './Layout.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Layout extends Component {


	render() {

		return (
			<div className="layout">
				<header>
					<div className='logo'>
						<Logo />	
					</div>
					<nav>
						<ul>
							<li><NavLink to="/" exact>Trending</NavLink></li>
							<li><NavLink to="/search">Search</NavLink></li>
						</ul>
					</nav>
				</header>
				<main>
					<Route path="/" exact component={Trending} />
					<Route path="/search" render={() => <h1>Search for GIFs</h1>} />
				</main>
				<footer>
					<p>Coded by <a href="https://ahmedagadir.com" target="_blank" rel="noopener noreferrer">Ahmed Abdel Gadir</a> with <span title="what is this?"><FontAwesomeIcon icon="stroopwafel" /></span></p>
				</footer>
			</div>
		)
	}
} 

export default Layout;