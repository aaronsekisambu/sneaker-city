import React from 'react';
import { render, cleanup, waitForElement, within } from '@testing-library/react';
import Home from './Home';
import { sneakerArray } from '../../DB/Models/sneakerArray';

afterEach(cleanup);
test('renders cards component', async (done) => {
	const { getByTestId } = render(<Home />);
	const homeTarget = await waitForElement(() => getByTestId(/home-target/i));
	const cardTarget = within(homeTarget).getAllByTestId('card-target');
	expect(cardTarget.length).toBe(sneakerArray.length);
	done();
});
