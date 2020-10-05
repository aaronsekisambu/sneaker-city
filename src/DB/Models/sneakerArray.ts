import { dateConvertor } from '../../helpers/helpers';

export const sneakerArray = [
	{
		id: '1',
		brandName: 'Abacavir',
		model: 'Ziagen',
		price: 5550,
		image: 'https://5.imimg.com/data5/FO/DF/HC/SELLER-94090822/ziagen-tablets-500x500.jpg',
		releaseDate: dateConvertor(new Date()),
		description:
			'Abacavir. Abacavir (ABC) is a medication used to prevent and treat HIV/AIDS. Similar to other nucleoside analog reverse-transcriptase inhibitors (NRTIs), abacavir is used together with other HIV medications, and is not recommended by itself.',
		make: 'England',
		available: true,
	},
	{
		id: '2',
		brandName: 'Rapivab',
		model: 'peramivir',
		price: 1200,
		image:
			'https://www.newsobserver.com/news/business/30fm6m/picture176099161/alternates/LANDSCAPE_1140/3%20vials%20with%20carton%20-%20retouch%20v2',
		releaseDate: dateConvertor(new Date()),
		description: 'If you get the flu, this drug can save your life. Now it’s approved for your kids',
		make: 'India',
		available: true,
	},

	{
		id: '3',
		brandName: 'xofluza',
		model: 'baloxavir marboxil',
		price: 7340,
		image: 'https://www.roche.com/dam/jcr:c7819b49-9ac5-4f90-84f9-a66b9bbb5734/en/xofluza-740.jpg',
		releaseDate: dateConvertor(new Date()),
		description:
			'Xofluza is a one-dose oral medicine with a novel proposed mechanism of action that has demonstrated efficacy against a wide range of influenza viruses, including in vitro activity against oseltamivir-resistant strains and avian strains (H7N9, H5N1) in non-clinical studies. Xofluza is the first in a class of antivirals designed to inhibit the cap-dependent endonuclease protein, which is essential for viral replication',
		make: 'USA',
		available: true,
	},
	{
		id: '4',
		brandName: 'doxycycline',
		model: 'Vibramycin',
		price: 6300,
		image: 'https://www.seekpng.com/png/full/355-3554483_doxycycline-box-from-the-front-medicament-pour-le.png',
		releaseDate: dateConvertor(new Date()),
		description:
			'This medication is used to treat a wide variety of bacterial infections, including those that cause acne. This medication is also used to prevent malaria. This medication is known as a tetracycline antibiotic. It works by stopping the growth of bacteria.',
		make: 'Uganda',
		available: true,
	},

	{
		id: '5',
		brandName: 'mefloquine',
		model: 'lariam',
		price: 3230,
		image: 'https://www.simpleonlinepharmacy.co.uk/uploads/images/products/large/mefloquine_lariam.png',
		releaseDate: dateConvertor(new Date()),
		description:
			'Mefloquine is an anti malarial drug, sold as the brand, Lariam, that can be taken in certain areas to prevent contracting the disease Malaria. It is one of a few drugs which can be taken for this reason and the choice of drug depends on the area in which you plan to travel. Mefloquine is not effective in all areas at preventing Malaria due to resistance',
		make: 'Germany',
		available: false,
	},
	{
		id: '6',
		brandName: 'primaquine',
		model: 'Primaquine',
		price: 1250,
		image:
			'https://i2.wp.com/tajpharma.in/wp-content/uploads/Primaquine-Phosphate-Tablets-suppliers-india-7-scaled.jpg?fit=2560%2C1707&ssl=1',
		releaseDate: dateConvertor(new Date()),
		description:
			'Primaquine Phosphate Tablets are fixed-dose combination (FDC) tablets containing, indicated for the treatment Plasmodium vivax, Plasmodium ovale and against the primary exo-erythrocytic stages of Plasmodium falciparum..',
		make: 'UK',
		available: false,
	},
	{
		id: '7',
		brandName: 'Atropine',
		model: 'Sulphate',
		price: 5500,
		image: 'https://www.eyecareconcepts.com.au/uploads/8/8/3/9/88398364/image048_orig.png',
		releaseDate: dateConvertor(new Date()),
		description:
			'At the present time 0.01% atropine is only available as a compounded medicine — that means it is formulated by a compounding chemist and bottled individually on order. The compounding chemist must also be one certified and suitably equipped to produce sterile bottles of eye drops,',
		make: 'Rwanda',
		available: false,
	},
	{
		id: '9',
		brandName: 'acetaminophen',
		model: 'Excedrin',
		price: 1650,
		image:
			'https://i-cf5.gskstatic.com/content/dam/cf-consumer-healthcare/excedrin/en_US/Desktop%20images/home-product-bottle.png?auto=format',
		releaseDate: dateConvertor(new Date()),
		description:
			"One of the better over-the-counter pain relievers doctor recommended. This product doesn't and why it's suggested safe for those on blood thinners. Fast acting, adult doses and a great bargain (225 caplets).",
		make: 'England',
		available: true,
	},
	{
		id: '10',
		brandName: 'ibuprofen',
		model: 'Advil, Motrin',
		price: 2540,
		image: 'https://www.motrin.com/sites/motrin_us/files/styles/product_image/public/motrin_ib.jpg',
		releaseDate: dateConvertor(new Date()),
		description: 'TWas taking acetaminophen -codeine as prescribed by my dentist',
		make: 'England',
		available: true,
	},
	{
		id: '11',
		brandName: 'naproxen',
		model: 'Aleve',
		price: 250,
		image: 'https://www.aleve.com/sites/g/files/vrxlpx1046/files/2019-12/aleve-caplets-product_0.jpg?imwidth=5000',
		releaseDate: dateConvertor(new Date()),
		description:
			"When you're tired of taking and retaking pills every few hours to deal with long-lasting aches and pains, Aleve can help. Just 2 caplets are strong enough to provide all day pain relief.",
		make: 'UK',
		available: false,
	},
];
