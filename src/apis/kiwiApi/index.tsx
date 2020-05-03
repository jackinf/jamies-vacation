import moment from 'moment';
import { SearchFlightsRequest, SearchFlightsResponse } from './types';

export default class KiwiApi {
  public async searchFlights(requestParams: SearchFlightsRequest): Promise<SearchFlightsResponse> {
    const { flyFromIataCode, flyToIataCode, dateFrom, dateTo } = requestParams;
    const url = new URL("https://api.skypicker.com/flights");

    const params = new URLSearchParams();
    params.append("flyFrom", flyFromIataCode);
    params.append("to", flyToIataCode);
    params.append("dateFrom", moment(dateFrom).format("DD/MM/YYYY"));
    params.append("dateTo", moment(dateTo).format("DD/MM/YYYY"));
    params.append("partner", "picky");
    params.append("v", "3");
    params.append("asc", "1");
    params.append("curr", "EUR");
    params.append("one_for_city", "1");

    const httpResponse = await fetch(`${url}?${params}`);
    if (!httpResponse.ok) {
      throw Error("Call failed")
    }
    return await httpResponse.json();
  }
}