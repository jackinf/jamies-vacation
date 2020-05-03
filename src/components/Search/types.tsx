import { Moment } from 'moment';

export interface SearchProps {
  destinations: Array<{
    cityName: string;
    countryID: string;
    iataCode: string;
  }>;
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