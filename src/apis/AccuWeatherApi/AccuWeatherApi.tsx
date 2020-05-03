import { CitySearchResponseItem, NDayForecastResponse } from './types';

export default class AccuWeatherApi {
  private baseUrl: string = 'https://dataservice.accuweather.com';
  private readonly apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  public async citySearch(destinationCity: string): Promise<CitySearchResponseItem[]> {
    const url = new URL(`${this.baseUrl}/locations/v1/cities/search`);

    const params = new URLSearchParams();
    params.append('apikey', this.apiKey);
    params.append('metric', 'true');
    params.append('q', destinationCity);

    const response = await fetch(`${url}?${params}`);
    return await response.json();
  };

  public async get1DayForecast(locationKey: string): Promise<NDayForecastResponse> {
    const url = new URL(`${this.baseUrl}/forecasts/v1/daily/1day/${locationKey}`);
    const params = new URLSearchParams();
    params.append('apikey', this.apiKey);
    const response = await fetch(`${url}?${params}`);
    return await response.json();
  };
}