import config from '../../config';
import { CitySearchResponseItem, NDayForecastResponse } from './types';

const apiKey = config.apiKeys.accuWeatherApiKey;

export default class AccuWeatherApi {
  public async citySearch(destinationCity: string): Promise<CitySearchResponseItem[]> {
    const url = new URL('http://dataservice.accuweather.com/locations/v1/cities/search');

    const params = new URLSearchParams();
    params.append('apikey', apiKey);
    params.append('metric', 'true');
    params.append('q', destinationCity);

    const response = await fetch(`${url}?${params}`);
    return await response.json();
  };

  public async get1DayForecast(locationKey: string): Promise<NDayForecastResponse> {
    const url = new URL(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey}`);
    const params = new URLSearchParams();
    params.append('apikey', apiKey);
    const response = await fetch(`${url}?${params}`);
    return await response.json();
  };
}