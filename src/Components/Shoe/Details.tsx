import React, { Fragment, useEffect, useState, useContext, FC } from 'react';
import { observer } from 'mobx-react-lite';
import { sneakerArray } from '../../DB/Models/sneakerArray';
import { SneakerStore } from '../../MobX/Store';

const Details: FC<any> = observer((props: any) => {
	const {
		match: {
			params: { sneakerId },
		},
	} = props;
	const [data, setData] = useState();
	const [count, setCount] = useState(0);
	const Sneakers = useContext(SneakerStore);

	useEffect(() => {
		if (sneakerId) {
			const selectedSneaker = sneakerArray.find((sneaker) => sneaker.id === sneakerId);
			return setData(selectedSneaker);
		}
	}, [sneakerId]);

	const shopNow = async (shoeId: string, number: number, sizeId: string) => {
		setCount(count + 1);
		const getSelectedSize = sneakerArray.find((sneaker) => sneaker.id === shoeId);
		const quantity = localStorage.getItem('quantity');
		if (getSelectedSize) {
			return getSelectedSize.size.map((s) => {
				if (sizeId === s.id) {
					if (count < parseInt(quantity ? quantity : '0')) {
						return Sneakers.addItemsToCart(shoeId, number, sizeId, 1);
					}
				}
			});
		}
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
						{data.size.length !== 0 ? (
							<div className="row m-auto justify-content-between size-details">
								<div className="d-flex flex-column w-100">
									<div className="d-flex flex-nowrap justify-content-between">
										<p className="text-secondary">Size available</p>
										<p className="text-secondary">Quantity</p>
									</div>
									{data.size.map((s: any) => (
										<ul
											className="list-group list-group-horizontal justify-content-between mb-1"
											key={s.id}
										>
											<li className="px-1 size-number text-secondary w-100">{s.number}</li>
											{s.quantity > 0 ? (
												<li
													className="px-1 size-quality text-secondary w-100 row justify-content-center"
													onClick={() => shopNow(data.id, s.quantity, s.id)}
												>
													{s.quantity}
												</li>
											) : (
												<p className="px-1 text-secondary w-100 out-of-stock">Out of Stock</p>
											)}
										</ul>
									))}
								</div>
							</div>
						) : (
							<p>Loading ...</p>
						)}
						<h6 className="card-text pt-4 text-center">
							<span className="text-black-50">Rfw </span>
							{data.price}
						</h6>
					</div>
				</div>
			) : (
				'Loading ...'
			)}
		</Fragment>
	);
});

export default Details;
