import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Card from './Card';
import { sneakerArray } from '../../DB/Models/sneakerArray';

afterEach(cleanup);
test('renders cards component', async (done) => {
	const { getByText } = render(<Card {...sneakerArray[0]} />);
	const brandName = getByText(sneakerArray[0].brandName);
	expect(brandName).toBeInTheDocument();
	done();
});
