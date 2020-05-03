import React from 'react';
import { render } from '@testing-library/react';
import Search from './Search';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

test('renders questions and input fields', () => {
  const destinations = [{
    cityName: 'Amsterdam',
    countryName: 'Netherlands',
    iataCode: 'AMS',
    countryID: 'NL',
  }];

  const { getByText } = render(
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Search destinations={destinations} accuWeatherApiKey={"test"} />
    </MuiPickersUtilsProvider>
  );

  expect(getByText(/Where are you flying from/i)).toBeInTheDocument();
});