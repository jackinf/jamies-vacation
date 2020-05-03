import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { ApiTokenContext } from '../../providers/ApiTokenProvider';

export default function ApiTokenConfigurator() {
  const [token, setToken] = useState('');

  return (
    <ApiTokenContext.Consumer>
      {({ handleSetAccuWeatherToken, handleClearAccuWeatherToken, accuWeatherApiKey }) => (
        <Card>
          <CardHeader title="Token for AccuWeather API" />
          <CardContent>
            {accuWeatherApiKey || (
              <TextField
                id="accuweather-token"
                label="Token"
                variant="outlined"
                value={token}
                onChange={e => setToken(e.target.value)}
              />
            )}
          </CardContent>
          <CardActions>
            {handleSetAccuWeatherToken && !accuWeatherApiKey && (
              <Button variant="contained" color="primary" onClick={() => handleSetAccuWeatherToken(token)}>Set token</Button>
            )}
            {handleClearAccuWeatherToken && accuWeatherApiKey && (
              <Button variant="contained" color="secondary" onClick={handleClearAccuWeatherToken}>Clear token</Button>
            )}
          </CardActions>
        </Card>
      )}
    </ApiTokenContext.Consumer>
  )
}