import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders description text', () => {
  const { getByText } = render(<App />);
  const pElement = getByText(/This app will help you decide which office is better for you/i);
  expect(pElement).toBeInTheDocument();
});
