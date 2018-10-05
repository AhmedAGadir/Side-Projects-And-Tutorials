import React, { Fragment } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Home from '../../Containers/Home/Home';
import Views from '../../Containers/Views/Views'
import './Layout.css';

const layout = props => (
	<Fragment>
		<header>
			<nav>
				<ul>
					<li><NavLink to="/" exact>Home</NavLink></li>
				</ul>
			</nav>
		</header>
		<main>
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/views/:id" exact component={Views} />
			<Route render={() =><h1>404 Not Found</h1>} /> 
		</Switch>
		</main>
		<footer>
			<p>Coded by <a target="_blank" href="http://ahmedagadir.com" rel="noopener noreferrer">Ahmed Abdel Gadir</a></p>
		</footer>
	</Fragment>
)

export default layout;