import React, { useContext } from 'react';
import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import ApiTokenConfigurator from '../ApiTokenConfigurator/ApiTokenConfigurator';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';

import useStyles from './styles';
import Search from '../Search/Search';
import { ApiTokenContext } from '../../providers/ApiTokenProvider';
import Divider from '@material-ui/core/Divider';
import CardHeader from '@material-ui/core/CardHeader';

const hardcodedDestinations = [
  {cityName: 'Amsterdam', countryName: 'Netherlands', countryID: 'NL', iataCode: 'AMS'},
  {cityName: 'Budapest', countryName: 'Hungary', countryID: 'HU', iataCode: 'BUD'},
  {cityName: 'Madrid', countryName: 'Spain', countryID: 'ES', iataCode: 'MAD'},
];

export default function Main() {
  const classes = useStyles();
  const apiTokenContext = useContext(ApiTokenContext);

  return (
    <Container maxWidth="md">
      <div className={classes.section}>
        <ApiTokenConfigurator />
      </div>
      <div className={classes.section}>
        <Card>
          <CardHeader title="Destinations" />
          <CardContent>
            {hardcodedDestinations.map((item, index) => (
              <Chip key={index} label={item.cityName} className={classes.chip} color="primary" />
            ))}
          </CardContent>
        </Card>
      </div>
      {apiTokenContext.accuWeatherApiKey && (
        <div className={classes.section}>
          <Divider />
          <Search
            destinations={hardcodedDestinations}
            accuWeatherApiKey={apiTokenContext.accuWeatherApiKey}
          />
        </div>
      )}
    </Container>
  )
}