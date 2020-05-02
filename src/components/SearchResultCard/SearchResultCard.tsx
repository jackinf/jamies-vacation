import React from 'react';
import { SearchResultCardProps } from './types';

export default function SearchResultCard(props: SearchResultCardProps) {
  const { flightInfo, forecastInfo } = props;

  if (!flightInfo.data) {
    return <div>Can't fly there :(</div>
  }
  const flight = flightInfo.data[0];

  const temperature = forecastInfo?.DailyForecasts && forecastInfo.DailyForecasts[0].Temperature;
  const temperatureLi = temperature && (
    <li>
      Min: {temperature.Minimum.Value} {temperature.Minimum.Unit},
      Max: {temperature.Maximum.Value} {temperature.Maximum.Unit}
    </li>
  );

  return (
    <div style={{"border": "2px solid black"}}>
      <h3>Flight to {flight.cityTo}, {flight.countryTo.name}</h3>
      <ul>
        <li>Price: {flight.price} {flightInfo.currency}</li>
        <li>Flight duration: {flight.fly_duration}</li>
        <li>{forecastInfo?.Headline?.Text}</li>
        {temperatureLi}
      </ul>
    </div>
  )
}