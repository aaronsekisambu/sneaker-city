export interface ISneakers {
    image: string,
    brandName: string,
    price: number,
    size: Array<{ id: string; quantity: number; number: number }>,
    model: string,
    releaseDate: any,
    id: string
}

export interface IGenerateResponse {
	[key: string]: any;
}
