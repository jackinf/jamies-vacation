import React, { useContext } from 'react';
import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import ApiTokenConfigurator from '../ApiTokenConfigurator/ApiTokenConfigurator';
import Container from '@material-ui/core/Container';

import useStyles from './styles';
import Search from '../Search/Search';
import { ApiTokenContext } from '../../providers/ApiTokenProvider';

export default function Main() {
  const classes = useStyles();
  const apiTokenContext = useContext(ApiTokenContext);

  return (
    <Container maxWidth="md">
      <div className={classes.section}>
        <Card>
          <CardContent>
            This app will help you decide which office is better for you
          </CardContent>
        </Card>
      </div>
      <div className={classes.section}>
        <ApiTokenConfigurator />
      </div>
      {apiTokenContext.accuWeatherApiKey && (
        <div className={classes.section}>
          <Search
            destinations={[
              {cityName: 'Amsterdam', countryID: 'NL', iataCode: 'AMS'},
              {cityName: 'Budapest', countryID: 'HU', iataCode: 'BUD'},
              {cityName: 'Madrid', countryID: 'ES', iataCode: 'MAD'},
            ]}
            accuWeatherApiKey={apiTokenContext.accuWeatherApiKey}
          />
        </div>
      )}
    </Container>
  )
}