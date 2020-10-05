import React, { Fragment, useContext, FC, useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import ReactPaginate from 'react-paginate';
import Card from '../../Components/Shoe/Card';
import { SneakerStore } from '../../MobX/Store';

const Home: FC<any> = observer((props: any) => {
	const { history } = props;
	const [sneakers, setSneakers] = useState([] as any);
	const [totalSneaker, setTotalSneaker] = useState([] as any);
	const Sneakers = useContext(SneakerStore);
	const pageCount = 2;

	useEffect(() => {
		Sneakers.fetchSneakers().then((data) => {
			if (Sneakers.state === 'done') {
				setSneakers(data ? data.slice(0, 2) : '');
				setTotalSneaker(data);
			}
		});
	}, [Sneakers]);

	const handlePageClick = async (data: any) => {
		const upperLimit = data.selected === 0 ? pageCount : data.selected * pageCount;
		setSneakers(totalSneaker.slice(upperLimit - pageCount, upperLimit));
	};
	const viewSneaker = (model: string, id: string) => {
		const totalShoes: any = [];
		const getSelectedShow = sneakers.find((sneaker: any) => sneaker.id === id);
		if (getSelectedShow) {
			getSelectedShow.size.map((s: any) => {
			return 	totalShoes.push(s.quantity);
			});
			localStorage.setItem('quantity', `${totalShoes.reduce((a: number, b: number) => a + b)}`);
		}
		return history.push(`/${model.split(' ').join('-')}/${id}`);
	};
	return (
		<Fragment>
			{sneakers ? (
				<div>
					<ul className="list-group list-group-horizontal justify-content-space container my-5 flex-wrap home-cards">
						{sneakers.map((sneaker: any) => {
							const { model, id } = sneaker;
							return (
								<li key={sneaker.id} onClick={() => viewSneaker(model, id)} className="mx-3 my-3">
									<Card
										image={sneaker.image}
										brandName={sneaker.brandName}
										price={sneaker.price}
										size={sneaker.size}
										model={sneaker.model}
										releaseDate={sneaker.releaseDate}
									/>
								</li>
							);
						})}
					</ul>

					<ReactPaginate
						previousLabel={<i className="zmdi zmdi-long-arrow-left"></i>}
						nextLabel={<i className="zmdi zmdi-long-arrow-right"></i>}
						breakLabel={'...'}
						breakClassName={'break-me'}
						pageCount={totalSneaker ? totalSneaker.length-1 : 0}
						marginPagesDisplayed={2}
						pageRangeDisplayed={1}
						onPageChange={handlePageClick}
						containerClassName="pagination-custom d-flex flex-nowrap"
						activeClassName={'active'}
					/>
				</div>
			) : (
				'Loading ...'
			)}
		</Fragment>
	);
});

export default Home;
