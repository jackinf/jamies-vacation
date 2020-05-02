import React from 'react';
import { render } from '@testing-library/react';
import Search from './Search';

test('renders questions and input fields', () => {
  const { getByText } = render(<Search />);
  const h3Element1 = getByText(/Where are you flying from/i);
  expect(h3Element1).toBeInTheDocument();

  const h3Element2 = getByText(/Which office are you flying to/i);
  expect(h3Element2).toBeInTheDocument();
});