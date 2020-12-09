import React, { FC, Fragment, useContext } from 'react';
import { SneakerStore } from '../../MobX/Store';
import { observer } from 'mobx-react-lite';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface NavigationComponentProps extends RouteComponentProps {}
const Navigation: FC<NavigationComponentProps> = observer(({ history }) => {
	const Sneakers = useContext(SneakerStore);
	const goBackHome = () => {
		history.push('/');
	};
	const login = () => {
		history.push('/login');
	};

	const getStarted = () => {
		history.push('/getStarted');
	};
	const goToCart = () => {
		history.push('/cart');
	};
	return (
		<Fragment>
			<nav className="navbar navbar-light bg-light" data-testid="nav-header">
				<button className="navbar-brand text-dark btn btn-outline-light" onClick={goBackHome}>
					<img
						src="https://image.freepik.com/free-vector/pharmacy-logo-vector_23987-171.jpg"
						width="30"
						height="30"
						className="d-inline-block align-top"
						alt=""
						loading="lazy"
					/>
					Pharmacy Online
				</button>
				<div className="d-flex flex-row">
					<button
						type="button"
						className={`btn btn-${Sneakers.cart.length === 0 ? 'light' : 'success'}`}
						onClick={goToCart}
					>
						<i className="zmdi zmdi-shopping-cart"></i>{' '}
						<span className="badge badge-light">
							{Sneakers.cart.length === 0
								? ''
								: Sneakers.cart
										.map((item) => item.count)
										.reduce((accumulator, currentValue) => accumulator + currentValue)}
						</span>
					</button>
					<button type="button" className="btn btn-outline-info mx-2" onClick={login}>
						<i className="zmdi zmdi-account-circle px-2"></i>
						Login
					</button>
					<button type="button" className="btn btn-primary mx-2" onClick={getStarted}>
						<i className="zmdi zmdi-account-add px-2"></i>
						Get Started
					</button>
				</div>
			</nav>
		</Fragment>
	);
});

export default withRouter(Navigation);
