import React, { Fragment, FC } from 'react';

const Card: FC<any> = (props: any) => {
	const { image, brandName, price, size, model } = props;
	return (
		<Fragment>
			<div className="card shoe-card" data-testid="card-target">
				<img src={image} className="card-img-top" alt="..." />
				<div className="card-body">
					<div className="row justify-content-cent m-auto">
						<h3 className="card-title">{brandName}</h3>
						<small className="text-black-50 p-2"> - {model}</small>
					</div>
					{size ? (
						<div className="text-secondary  shoe-status ">
							<div className="row justify-content-between m-auto">
								{size.length > 1 ? (
									<span className="text-secondary pt-1">Check Availability</span>
								) : (
									size.map((s: any) =>
										s.quantity !== 0 ? (
											<span className="text-success" key={s.id}>
												{' '}
												Size {s.number} - Available
											</span>
										) : (
											<span className="text-danger" key={s.id}>
												{' '}
												Size {s.number} - Out of Stock
											</span>
										)
									)
								)}
							</div>
						</div>
					) : (
						<p className="text-secondary  shoe-status">Out of Stock</p>
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
