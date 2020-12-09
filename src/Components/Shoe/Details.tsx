import React, { Fragment, useEffect, useState, useContext, FC } from 'react';
import { observer } from 'mobx-react-lite';
import { sneakerArray } from '../../DB/Models/sneakerArray';
import { SneakerStore } from '../../MobX/Store';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface DetailsComponentProps extends RouteComponentProps<any> {
	sneakerId: string;
}
const Details: FC<DetailsComponentProps> = observer(
	({
		history,
		match: {
			params: { sneakerId },
		},
	}) => {
		const [data, setData] = useState<any>();
		// const [count, setCount] = useState(0);
		const Sneakers = useContext(SneakerStore);

		useEffect(() => {
			if (sneakerId) {
				const selectedSneaker = sneakerArray.find((sneaker) => sneaker.id === sneakerId);
				return setData(selectedSneaker);
			}
		}, [sneakerId]);

		const shopNow = async (id: string) => {
			// setCount(count + 1);
			// const getSelectedSize = sneakerArray.find((sneaker) => sneaker.id === shoeId);
			// const quantity = localStorage.getItem('quantity');
			// if (getSelectedSize) {
			// 	return getSelectedSize.size.map((s) => {
			// 		if (sizeId === s.id) {
			// 			if (count < parseInt(quantity ? quantity : '0')) {
			return Sneakers.addItemsToCart(id);
			// 			}
			// 		}
			// 	});
			// }
		};

		const goToCart = () => {
			history.push('/cart');
		};

		return (
			<Fragment>
				{data ? (
					<div className="card shoe-details" data-testid="details-comp">
						<img src={data.image} className="card-img-top" alt="..." />
						<div className="card-body">
							<div className="row justify-content-cent m-auto">
								<h3 className="card-title">{data.brandName}</h3>
								<small className="text-black-50 p-2"> - {data.model}</small>
							</div>
							<p className="text-secondary shoe-status release-date">
								<span className="text-dark">Released:</span> {data.releaseDate}{' '}
							</p>
							<div className="row m-auto justify-content-between size-details">
								<div className="d-flex flex-column w-100">
									<div className="d-flex flex-nowrap justify-content-between">
										<p className="text-secondary">Description</p>
									</div>
									<ul className="list-group list-group-horizontal justify-content-between mb-1">
										<li className="px-1 size-number text-secondary w-100">{data.description}</li>
									</ul>
								</div>
							</div>
							<h6 className="card-text pt-4 text-center">
								<span className="text-black-50">Rfw </span>
								{data.price}
							</h6>
							<button className="btn w-100 btn-primary" onClick={() => shopNow(data?.id)}>
								Add to cart
							</button>
							<button className="btn  btn-danger w-100 mt-3" onClick={goToCart}>
								Proceed to checkout
							</button>
						</div>
					</div>
				) : (
					'Loading ...'
				)}
			</Fragment>
		);
	}
);

export default withRouter(Details);
