import React, { Fragment, useContext, FC } from 'react';
import { observer } from 'mobx-react-lite';
import { SneakerStore } from '../../MobX/Store';
import { toJS } from 'mobx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import { RouteComponentProps, withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			// flexGrow: 1,
			maxWidth: 752,
			margin: '3rem auto',
			textAlign: 'center',
		},
		demo: {
			backgroundColor: theme.palette.background.paper,
		},
		title: {
			margin: theme.spacing(4, 0, 2),
		},
	})
);

interface CartComponentProps extends RouteComponentProps {}
const Cart: FC<CartComponentProps> = observer (({ history }) => {
	const classes = useStyles();
	const sneakers = useContext(SneakerStore);
	const cartItems = toJS(sneakers.cart);

	console.log('here', toJS(sneakers.cart));

	return (
		<Fragment>
			{cartItems.length === 0 ? (
				<div className="d-flex flex-column justify-content-center">
					<h1 className="display-5 text-center  text-danger pt-5">
						<i className="zmdi zmdi-shopping-cart-plus px-2 "></i> No item in cart
					</h1>
					<small
						className="text-secondary text-center m-auto"
						style={{ cursor: 'pointer' }}
						onClick={() => history.push('/')}
					>
						<i className="zmdi zmdi-long-arrow-left px-2 "></i>Go shopping
					</small>
				</div>
			) : (
				<div className={classes.root}>
					<h1 className="display-5">Cart Summary</h1>
					<Grid>
						<Grid item xs={12} md={6} style={{ margin: '0 auto' }}>
							<div className={classes.demo}>
								<List >
									{cartItems.map((item, id) => (
										<ListItem className="border-bottom" key={id}>
											<ListItemText primary={item.name} secondary={item.count} />
											<small>RFW {item.count * item.price}</small>
											<ListItemSecondaryAction>
												<IconButton edge="end" aria-label="delete">
													<DeleteIcon />
												</IconButton>
											</ListItemSecondaryAction>
										</ListItem>
									))}
								</List>
							</div>
						</Grid>
					</Grid>
					<Grid item xs={12} md={6} style={{ margin: '0 auto' }}>
						<div className={classes.demo}>
							<List>
								<ListItem className="border-bottom">
									<ListItemText
										primary="Total"
										className="text-success"
										secondary={
											cartItems.length !== 0
												? cartItems
														.map((item) => item.count)
														.reduce(
															(accumulator, currentValue) => accumulator + currentValue
														)
												: ''
										}
									/>

									<ListItemSecondaryAction>
										<small className="text-success">
											<span className="px-2">RFW </span>
											{cartItems.length !== 0
												? cartItems
														.map((item) => item.price * item.count)
														.reduce(
															(accumulator, currentValue) => accumulator + currentValue
														)
												: ''}
										</small>
									</ListItemSecondaryAction>
								</ListItem>
							</List>
						</div>
					</Grid>
				</div>
			)}
		</Fragment>
	);
});

export default withRouter(Cart);
