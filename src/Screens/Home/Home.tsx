import React, { Fragment, useContext, FC, useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import ReactPaginate from 'react-paginate';
import Card from '../../Components/Shoe/Card';
import { SneakerStore } from '../../MobX/Store';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface HomeComponentProps extends RouteComponentProps {}
const Home: FC<HomeComponentProps> = observer(({history}) => {
	const [sneakers, setSneakers] = useState([] as any);
	const [totalSneaker, setTotalSneaker] = useState([] as any);
	const Sneakers = useContext(SneakerStore);
	const pageCount = 10;

	useEffect(() => {
		Sneakers.fetchSneakers().then((data) => {
			if (Sneakers.state === 'done') {
				setSneakers(data ? data.slice(0, pageCount) : '');
				setTotalSneaker(data);
			}
		});
	}, [Sneakers]);

	const handlePageClick = async (data: any) => {
		const upperLimit = data.selected === 0 ? pageCount : (data.selected + 1) * pageCount;
		setSneakers(totalSneaker.slice(upperLimit - pageCount, upperLimit));
	};
	const viewSneaker = (model: string, id: string) => {
		// const totalShoes: any = [];
		// const getSelectedShow = sneakers.find((sneaker: any) => sneaker.id === id);
		// if (getSelectedShow) {
		// 	getSelectedShow.size.map((s: any) => {
		// 		return totalShoes.push(s.quantity);
		// 	});
		// 	localStorage.setItem('quantity', `${totalShoes.reduce((a: number, b: number) => a + b)}`);
		// }
		return history.push(`/${model.split(' ').join('-')}/${id}`);
	};
	return (
		<Fragment>
			{sneakers ? (
				<div data-testid="home-target">
					<ul className="list-group list-group-horizontal justify-content-space container my-5 flex-wrap home-cards">
						{sneakers.map((sneaker: any) => {
							const { model, id, image, brandName, price, available, releaseDate } = sneaker;
							return (
								<li key={id} onClick={() => viewSneaker(model, id)} className="mx-3 my-3">
									<Card
										image={image}
										brandName={brandName}
										price={price}
										available={available}
										model={model}
										releaseDate={releaseDate}
									/>
								</li>
							);
						})}
					</ul>

					{totalSneaker.length <= pageCount ? (
						''
					) : (
						<ReactPaginate
							previousLabel={<i className="zmdi zmdi-long-arrow-left"></i>}
							nextLabel={<i className="zmdi zmdi-long-arrow-right"></i>}
							breakLabel={'...'}
							breakClassName={'break-me'}
							pageCount={Math.ceil(totalSneaker.length / pageCount)}
							marginPagesDisplayed={4}
							pageRangeDisplayed={2}
							onPageChange={handlePageClick}
							containerClassName="pagination-custom d-flex flex-nowrap"
							activeClassName={'active'}
							disabledClassName={'text-secondary'}
						/>
					)}
				</div>
			) : (
				'Loading ...'
			)}
		</Fragment>
	);
});

export default withRouter(Home);
