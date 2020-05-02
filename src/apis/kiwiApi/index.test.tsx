import KiwiApi from './index';
import moment from 'moment';

describe("KiwiApi", () => {
  it("should find a flight from London to Amsterdam 6 months in the future", async () => {
    const api = new KiwiApi();
    const response = await api.searchFlights({
      dateFrom: moment().add(6, 'months'),
      dateTo: moment().add(6, 'months'),
      flyFromIataCode: 'LON',
      flyToIataCode: 'AMS',
    });
    expect(response.data.length).not.toBe(0);
  });
});