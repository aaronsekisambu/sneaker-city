import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import Details from './Details';

afterEach(cleanup);
const props = {
	match: { params: { sneakerId: '1' } },
};
test('renders details component', async (done) => {
	const { getByTestId } = render(<Details {...props} />);
	const detailComp = await waitForElement(() => getByTestId(/details-comp/i));
	expect(detailComp).toBeInTheDocument();
	done();
});
