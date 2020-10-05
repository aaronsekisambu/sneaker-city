import React from 'react';
import { render, within, cleanup, waitForElement } from '@testing-library/react';
import Details from './Details';

afterEach(cleanup);
test('renders details component', async (done) => {
  const { getByText, getAllByTestId, getByTestId } = render(<Details />);
  // const linkElement = getByText(/learn react/i);
  // act(() => {
  const detailComp = await waitForElement(() =>getByTestId(/details-comp/i));
  const navInApp = within(appRouting).getAllByTestId('nav-header');
   // expect(navInApp.length).toBe(1);
  // })
  expect(detailComp).toBeInTheDocument();
  done();
});
