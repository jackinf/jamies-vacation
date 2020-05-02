import React, { useState } from 'react';
import AccuWeatherApi from '../apis/accuWeatherApi';

const destinations = [
  {cityName: 'Amsterdam', countryID: 'NL'},
];

export default function Search() {
  const [flyingFrom, setFlyingFrom] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    const promises = [];
    const accuWeatherApi = new AccuWeatherApi();
    setIsSearching(true);

    for (let destination of destinations) {
      const promise = accuWeatherApi.citySearch(destination.cityName)
        .then(response => response.find(item => item.Country.ID === destination.countryID))
        .then(foundItem => accuWeatherApi.get1DayForecast(foundItem!.Key))
        .then(forecast => console.log(forecast));
      promises.push(promise);
    }
    await Promise.all(promises);
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
      <input type="text" id="flying-from" value={flyingFrom} onChange={e => setFlyingFrom(e.target.value)}/>
      <input type="date" id="flying-date-from"/>
      <input type="date" id="flying-date-to"/>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}