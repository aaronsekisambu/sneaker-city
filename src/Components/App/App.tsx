import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../../Screens/Home/Home';
import Details from '../Shoe/Details';
import Navigation from '../Navigation/Navigation';

const App = () => {
	return (
		<Fragment>
			<div data-testid="app-routing">
				<Navigation />
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/:model/:sneakerId" component={Details} />
					</Switch>
				</BrowserRouter>
			</div>
		</Fragment>
	);
};

export default App;
