import React from 'react';
import { render, cleanup } from '@testing-library/react';
import NotFound from './NotFound';

afterEach(cleanup);
test('renders elements in the not found component', async (done) => {
	const { getByText } = render(<NotFound />);
	const notFound = getByText(/Not Found/i);
	expect(notFound).toBeInTheDocument();
	done();
});
