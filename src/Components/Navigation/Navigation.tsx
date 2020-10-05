import React, { Fragment, useContext } from 'react';
import {SneakerStore} from "../../MobX/Store";
import {observer} from "mobx-react-lite";

const Navigation = observer((props: any) => {
	const Sneakers = useContext(SneakerStore);
	return (
		<Fragment>
			<nav className="navbar navbar-light bg-light" data-testid="nav-header">
				<a className="navbar-brand" href="/">
					<img
						src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-512bfa8a-01a0-4971-bd34-9cef18a159e0/air-force-1-07-womens-shoe-KyTwDPGG.jpg"
						width="30"
						height="30"
						className="d-inline-block align-top"
						alt=""
						loading="lazy"
					/>
					Sneaker City
				</a>
				<button type="button" className={`btn btn-${Sneakers.cart.length === 0 ? 'light' : 'success'}`}>
					<i className="zmdi zmdi-shopping-cart"></i>{' '}
					<span className="badge badge-light">{Sneakers.cart.length === 0 ? '' : Sneakers.cart.length}</span>
				</button>
			</nav>
		</Fragment>
	);
});

export default Navigation;
