import { action, computed, makeAutoObservable, observable, runInAction, toJS } from 'mobx';
import { createContext } from 'react';
import { sneakerArray } from '../DB/Models/sneakerArray';

export class Store {
	@observable
	public data: Array<any> = [];
	public cart: Array<any> = [];
	public state: string = 'pending' || 'pending' || 'done' || 'error';

	constructor() {
		makeAutoObservable(this);
	}

	@computed
	public addItemsToCart(id: string) {
		const checkAdded = sneakerArray.find((sneaker) => sneaker.id === id);
		console.log('beula', checkAdded);
		if (checkAdded) {
			// const selected = checkAdded.find((s) => s.id === sizeId);
			const checkCart = toJS(this.cart);
			if (checkCart.length > 0) {
			    const findInCart = this.cart.find((item) => item.id === id);
				if (!findInCart) {
					this.cart.push({ id: checkAdded.id, count: 1, name: checkAdded.brandName, price: checkAdded.price });
				} else {
					findInCart.count = findInCart.count + 1;
				}
			}
			if (checkCart.length === 0) {
			this.cart.push({ id: checkAdded.id, count: 1, name: checkAdded.brandName, price: checkAdded.price });
			// // this.cart.push(checkAdded);
			}
		}
	}

	@action
	async fetchSneakers() {
		this.data = [];
		this.state = 'pending';
		try {
			return runInAction(() => {
				this.state = 'done';
				return (this.data = sneakerArray);
			});
		} catch (error) {
			runInAction(() => {
				this.state = 'error';
			});
		}
	}
}

export const SneakerStore = createContext(new Store());
