import React, { useState } from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { KeyboardDatePicker } from '@material-ui/pickers';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import AccuWeatherApi from '../../apis/accuWeatherApi';
import KiwiApi from '../../apis/kiwiApi';
import { SearchResultCardProps } from '../SearchResultCard/types';
import SearchResultCard from '../SearchResultCard/SearchResultCard';
import { SearchProps } from './types';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      marginTop: theme.spacing(3),
      width: '25ch',
    },
  },
}));

export default function Search({ destinations }: SearchProps) {
  const classes = useStyles();

  const [flyingFrom, setFlyingFrom] = useState('');
  const [dateFrom, setDateFrom] = useState<moment.Moment | null>();
  const [dateTo, setDateTo] = useState<moment.Moment | null>();
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<SearchResultCardProps[]>([]);

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

      promises.push(Promise.all([kiwiPromise, accuWeatherPromise]));
    }

    const promiseResults = await Promise.all(promises);
    const objectResult = promiseResults
      .map(item => ({ flightInfo: item[0], forecastInfo: item[1] }));
    setResults(objectResult);
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
      <div className={classes.root}>
        <div>
          <Button variant="contained" onClick={handlePrefill}>Prefill fields please</Button>
        </div>
        <Card>
          <CardContent>
            <TextField
              id="flying-from"
              label="Flying from"
              variant="outlined"
              value={flyingFrom}
              onChange={e => setFlyingFrom(e.target.value)}
            />
            <div>
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
            </div>
          </CardContent>
          <CardActions>
            <div>
              <Button variant="contained" color="primary" onClick={handleSearch}>Search</Button>
            </div>
          </CardActions>
        </Card>
      </div>
      <div>
        {results.map(result => <SearchResultCard flightInfo={result.flightInfo} forecastInfo={result.forecastInfo} />)}
      </div>
    </div>
  );
}