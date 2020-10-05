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
	public addItemsToCart(shoeId: string, number: number, sizeId: string, count: number) {
		const checkAdded = sneakerArray.find((sneaker) => sneaker.id === shoeId);
		if (checkAdded) {
			const selected = checkAdded.size.find((s) => s.id === sizeId);
			const checkCart = toJS(this.cart);
			if (checkCart.length > 0) {
                const findInCart = this.cart.find((item) => item.shoeId === shoeId && item.id === sizeId);
                
				if (!findInCart) {
					this.cart.push({ ...selected, shoeId: checkAdded.id, count: 1 });
				} else {
					findInCart.count = findInCart.count + 1;
				}
			}
			if (checkCart.length === 0) {
				this.cart.push({ ...selected, shoeId: checkAdded.id, count: count });
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
