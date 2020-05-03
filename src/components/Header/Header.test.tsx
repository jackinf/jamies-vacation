import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders description text', () => {
  const { getByText } = render(<Header />);
  expect(getByText(/Jamie's Vacation/i)).toBeInTheDocument();
});
