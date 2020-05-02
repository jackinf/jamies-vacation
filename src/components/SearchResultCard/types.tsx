import { NDayForecastResponse } from '../../apis/accuWeatherApi/types';
import { SearchFlightsResponse } from '../../apis/kiwiApi/types';

export interface SearchResultCardProps {
  forecastInfo: NDayForecastResponse;
  flightInfo: SearchFlightsResponse;
}