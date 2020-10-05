import React from 'react';
import { render, within, cleanup, waitForElement } from '@testing-library/react';
import App from './App';

afterEach(cleanup);
test('renders navigation component', async (done) => {
  const { getByText, getAllByTestId, getByTestId } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // act(() => {
  const appRouting = await waitForElement(() =>getByTestId(/app-routing/i));
  const navInApp = within(appRouting).getAllByTestId('nav-header');
   expect(navInApp.length).toBe(1);
  // })
  // expect(linkElement).toBeInTheDocument();
  done();
});