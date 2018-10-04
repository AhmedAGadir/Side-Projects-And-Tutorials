import React, { Fragment } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Home from '../../Containers/Home/Home';
import './Layout.css';

const layout = props => (
	<Fragment>
		<header>
			<nav>
				<ul>
					<li><NavLink to="/" exact>Home</NavLink></li>
					<li><NavLink to="/search" >Search</NavLink></li>
				</ul>
			</nav>
		</header>
		<main>
			<Route path="/" exact component={Home} />
			<Route path="/search" exact render={() => <h1>(Under Construction...)</h1>} />
		</main>
		<footer>
			<p>Coded by <a target="_blank" href="http://ahmedagadir.com" rel="noopener noreferrer">Ahmed Abdel Gadir</a></p>
		</footer>
	</Fragment>
)

export default layout;