import React from 'react';
import { render } from '@testing-library/react';
import ApiTokenConfigurator from './ApiTokenConfigurator';
import ApiTokenProvider from '../../providers/ApiTokenProvider';

test('render an input field for setting the token', () => {
  const { getByText } = render(
    <ApiTokenProvider>
      <ApiTokenConfigurator />
    </ApiTokenProvider>
  );

  expect(getByText(/Set token/i)).toBeInTheDocument();
});