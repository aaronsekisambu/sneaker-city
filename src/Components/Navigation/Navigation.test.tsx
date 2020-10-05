import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Navigation from './Navigation';

afterEach(cleanup);
test('renders elements in the navigation component', async (done) => {
	const { getByTestId } = render(<Navigation />);
	const linkElement = getByTestId(/nav-header/i);
	expect(linkElement).toBeInTheDocument();
	done();
});
