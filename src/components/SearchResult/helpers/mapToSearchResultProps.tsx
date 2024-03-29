import { NDayForecastResponse } from '../../../apis/AccuWeatherApi/types';
import { SearchFlightsResponse } from '../../../apis/KiwiApi/types';
import { OfficeInfo } from '../types';

export default function mapToSearchResultProps(
  forecastInfo: NDayForecastResponse,
  flightInfo: SearchFlightsResponse): OfficeInfo | null {
  if (!flightInfo.data) {
    return null;
  }
  const flight = flightInfo.data[0];

  const temperature = forecastInfo?.DailyForecasts && forecastInfo.DailyForecasts[0].Temperature;
  return {
    flightDestination: `${flight.cityTo}, ${flight.countryTo.name}`,
    flightDuration: flight.fly_duration,
    flightPrice: `${flight.price} ${flightInfo.currency}`,
    forecastHeadline: forecastInfo?.Headline?.Text,
    minTemperature: temperature && `${temperature.Minimum.Value} ${temperature.Minimum.Unit}`,
    maxTemperature: temperature && `${temperature.Maximum.Value} ${temperature.Maximum.Unit}`
  }
}