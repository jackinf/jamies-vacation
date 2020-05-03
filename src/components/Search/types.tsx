import { Moment } from 'moment';

export interface Destination {
  cityName: string;
  countryName: string;
  countryID: string;
  iataCode: string;
}

export interface SearchProps {
  destinations: Array<Destination>;
  accuWeatherApiKey: string;
}

export interface Errors {
  hasErrors: boolean;
  flyingFrom?: { text: string };
  dateFrom?: { text: string };
  dateTo?: { text: string };
}

export interface ValidationParams {
  flyingFrom: string;
  dateFrom: Moment | null,
  dateTo: Moment | null;
}