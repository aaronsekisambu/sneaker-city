import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../../Screens/Home/Home';
import Details from '../Shoe/Details';
import Navigation from '../Navigation/Navigation';
import NotFound from '../../Screens/NotFound/NotFound';
import Login from '../Authentication/Login';
import GetStarted from '../Authentication/GetStarted';
import Cart from '../Drawers/Cart';

const App = () => {
	return (
		<Fragment>
			<div data-testid="app-routing">
				<BrowserRouter>
					<Navigation />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/:model/:sneakerId" component={Details} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/getStarted" component={GetStarted} />
						<Route exact path="/cart" component={Cart} />
						<Route component={NotFound} />
					</Switch>
				</BrowserRouter>
			</div>
		</Fragment>
	);
};

export default App;
