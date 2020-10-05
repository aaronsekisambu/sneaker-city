import React, { Fragment } from 'react';

const Card = (props: any) => {
	const { image, brandName, price, size, model } = props;
	return (
		<Fragment>
			<div className="card shoe-card">
				<img src={image} className="card-img-top" alt="..." />
				<div className="card-body">
					<div className="row justify-content-cent m-auto">
						<h3 className="card-title">{brandName}</h3>
						<small className="text-black-50 p-2"> - {model}</small>
					</div>
						<p className="text-secondary  shoe-status">{size.length !== 0 ? "Available" : "Out of Stock"}</p>

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
