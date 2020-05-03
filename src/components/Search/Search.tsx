import React, { useState } from 'react';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { KeyboardDatePicker } from '@material-ui/pickers';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';

import useStyles from './styles';
import AccuWeatherApi from '../../apis/accuWeatherApi';
import KiwiApi from '../../apis/kiwiApi';
import { OfficeInfo } from '../SearchResultCard/types';
import SearchResultCard from '../SearchResultCard/SearchResultCard';
import { SearchProps } from './types';
import { LinearProgress } from '@material-ui/core';
import mapToSearchResultCardProps from '../SearchResultCard/helpers/mapToSearchResultCardProps';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dummy = {
  flightDestination: 'flightDestination',
  flightDuration: 'flightDuration',
  flightPrice: 'flightPrice',
  forecastHeadline: 'forecastHeadline',
  minTemperature: 'minTemperature',
  maxTemperature: 'maxTemperature',
};

export default function Search({ destinations }: SearchProps) {
  const classes = useStyles();

  const [flyingFrom, setFlyingFrom] = useState('');
  const [dateFrom, setDateFrom] = useState<moment.Moment | null>();
  const [dateTo, setDateTo] = useState<moment.Moment | null>();
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<Array<OfficeInfo | null>>([]);

  const handlePrefill = async () => {
    setFlyingFrom("LON");
    setDateFrom(moment()
      .add(6, "months"));
    setDateTo(moment()
      .add(6, "months")
      .add(10, "days"));
  };

  const handleSearch = async () => {
    if (!dateFrom || !dateTo) {
      // TODO: toggle validation
      return;
    }

    const promises = [];
    const accuWeatherApi = new AccuWeatherApi();
    const kiwiApi = new KiwiApi();

    setResults([]);
    setIsSearching(true);

    for (let destination of destinations) {
      const accuWeatherPromise = accuWeatherApi.citySearch(destination.cityName)
        .then(response => response.find(item => item.Country.ID === destination.countryID))
        .then(foundItem => accuWeatherApi.get1DayForecast(foundItem!.Key));

      const kiwiPromise = kiwiApi.searchFlights({
        dateFrom: dateFrom,
        dateTo: dateTo,
        flyFromIataCode: flyingFrom,
        flyToIataCode: destination.iataCode,
      });

      const promise = Promise.all([kiwiPromise, accuWeatherPromise])
        .then(item => mapToSearchResultCardProps(item[1], item[0]))
        .then(item => {
          results.push(item);
          setResults(results);
        });
      promises.push(promise);
    }

    await Promise.all(promises);
    setIsSearching(false);
  };

  return (
    <div>
      {isSearching && (
        <div className={classes.progressBars}>
          <LinearProgress />
        </div>
      )}

      <Card className={classes.root}>
        <CardHeader title="Where are you flying from?" />
        <CardContent>
          <TextField
            id="flying-from"
            label="Flying from"
            variant="outlined"
            value={flyingFrom}
            onChange={e => setFlyingFrom(e.target.value)}
          />
          &nbsp;
          <KeyboardDatePicker
            autoOk
            variant="inline"
            inputVariant="outlined"
            label="Start"
            format="DD/MM/YYYY"
            value={dateFrom}
            InputAdornmentProps={{ position: "start" }}
            onChange={setDateFrom}
          />
          &nbsp;
          <KeyboardDatePicker
            autoOk
            variant="inline"
            inputVariant="outlined"
            label="End"
            format="DD/MM/YYYY"
            value={dateTo}
            InputAdornmentProps={{ position: "start" }}
            onChange={setDateTo}
          />
        </CardContent>
        <CardActions>
          <Button variant="contained" onClick={handlePrefill}>Prefill fields</Button> &nbsp;
          <Button variant="contained" color="primary" onClick={handleSearch} disabled={isSearching}>Search</Button>
        </CardActions>
      </Card>

      <Grid container spacing={3} className={classes.section}>
        {results.map((result, key) => (
          <Grid key={key} item md={6} className={classes.gridItem}>
            <SearchResultCard officeInfo={result} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}