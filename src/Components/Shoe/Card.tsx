import React, { Fragment, FC } from 'react';

const Card: FC<any> = (props: any) => {
	const { image, brandName, price, available, model } = props;
	return (
		<Fragment>
			<div className="card shoe-card" data-testid="card-target">
				<img src={image} className="card-img-top" alt="..." />
				<div className="card-body">
					<div className="row justify-content-cent m-auto">
						<h3 className="card-title">{brandName}</h3>
						<small className="text-black-50 p-2"> - {model}</small>
					</div>
					{available ? (
						<div className="text-secondary  shoe-status ">
							<div className="row justify-content-between m-auto">
								<span className="text-secondary pt-1">Check Availability</span>
								<span className="text-success">Available</span>
							</div>
						</div>
					) : (
						<p className="text-danger  shoe-status">Out of Stock</p>
					)}

					<h6 className="card-text pt-2">
						<span className="text-black-50">Rfw </span>
						{price}
					</h6>
				</div>
			</div>
		</Fragment>
	);
};

export default Card;
