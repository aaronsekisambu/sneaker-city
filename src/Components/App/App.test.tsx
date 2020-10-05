import React from 'react';
import { render, within, cleanup, waitForElement } from '@testing-library/react';
import App from './App';

afterEach(cleanup);
test('renders app component with the navigation component', async (done) => {
  const { getByTestId } = render(<App />);
  const appRouting = await waitForElement(() =>getByTestId(/app-routing/i));
  const navInApp = within(appRouting).getAllByTestId('nav-header');
   expect(navInApp.length).toBe(1);
  done();
});