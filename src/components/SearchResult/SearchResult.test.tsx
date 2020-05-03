import React from 'react';
import { render } from '@testing-library/react';
import SearchResult from './SearchResult';

test('render results on the page', () => {
  const destinationInfo = {
    flightDestination: "Amsterdam, Netherlands",
    flightDuration: "2h 10min",
    flightPrice: "55 EUR",
    forecastHeadline: "Sunny weather",
    minTemperature: "10 C",
    maxTemperature: "20 C",
  };

  const { getByText } = render(<SearchResult destinationInfo={destinationInfo} />);

  expect(getByText(/flight to Amsterdam, Netherlands/i)).toBeInTheDocument();
  expect(getByText(/Flight duration: 2h 10min/i)).toBeInTheDocument();
  expect(getByText(/Price: 55 EUR/i)).toBeInTheDocument();
  expect(getByText(/Today: Sunny weather/i)).toBeInTheDocument();
  expect(getByText(/Today: Min - 10 C, Max - 20 C/i)).toBeInTheDocument();
});

test('render error message on the page', () => {
  const destinationInfo = {
    flightDestination: "Amsterdam, Netherlands",
    flightDuration: "2h 10min",
    flightPrice: "55 EUR",
    forecastHeadline: "Sunny weather",
    minTemperature: "10 C",
    maxTemperature: "20 C",
  };

  const { getByText } = render(<SearchResult error={{ flightDestination: 'Amsterdam, Netherlands', message: 'Something went wrong'}} />);

  expect(getByText(/flight to Amsterdam, Netherlands/i)).toBeInTheDocument();
  expect(getByText(/Something went wrong/i)).toBeInTheDocument();
});