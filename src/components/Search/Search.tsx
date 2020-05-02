import React, { useState } from 'react';
import moment from 'moment';

import AccuWeatherApi from '../../apis/accuWeatherApi';
import KiwiApi from '../../apis/kiwiApi';

const destinations = [
  {cityName: 'Amsterdam', countryID: 'NL', iataCode: 'AMS'},
  {cityName: 'Budapest', countryID: 'HU', iataCode: 'BUD'},
  {cityName: 'Madrid', countryID: 'ES', iataCode: 'MAD'},
];

export default function Search() {
  const [flyingFrom, setFlyingFrom] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handlePrefill = async () => {
    setFlyingFrom("LON");
    setDateFrom(moment()
      .add(6, "months")
      .format('YYYY-MM-DD'));
    setDateTo(moment()
      .add(6, "months")
      .add(10, "days")
      .format('YYYY-MM-DD'));
  };

  const handleSearch = async () => {
    const promises = [];
    const accuWeatherApi = new AccuWeatherApi();
    const kiwiApi = new KiwiApi();

    setIsSearching(true);

    for (let destination of destinations) {
      const accuWeatherPromise = accuWeatherApi.citySearch(destination.cityName)
        .then(response => response.find(item => item.Country.ID === destination.countryID))
        .then(foundItem => accuWeatherApi.get1DayForecast(foundItem!.Key));

      const kiwiPromise = kiwiApi.searchFlights({
        dateFrom: moment(dateFrom),
        dateTo: moment(dateTo),
        flyFromIataCode: flyingFrom,
        flyToIataCode: destination.iataCode,
      });

      promises.push(Promise.all([kiwiPromise, accuWeatherPromise]));
    }

    const result = await Promise.all(promises);
    console.log("MEGARESULT!", result);
    setIsSearching(false);
  };

  if (isSearching) {
    return (
      <div>Searching...</div>
    )
  }

  return (
    <div>
      <h3>Where are you flying from?</h3>
      <button onClick={handlePrefill}>Prefill fields please</button>
      <hr/>
      <input type="text" id="flying-from" value={flyingFrom} onChange={e => setFlyingFrom(e.target.value)} />
      <input type="date" id="flying-date-from" value={dateFrom} onChange={e => setDateFrom(e.target.value)} />
      <input type="date" id="flying-date-to" value={dateTo} onChange={e => setDateTo(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}