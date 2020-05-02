import React from 'react';
import { render } from '@testing-library/react';
import Search from './Search';

test('renders questions and input fields', () => {
  const { getByText } = render(<Search />);
  const h3Element = getByText(/Where are you flying from/i);
  expect(h3Element).toBeInTheDocument();
});