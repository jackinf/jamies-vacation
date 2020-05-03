import React, { useState, useEffect } from 'react';
import config from '../../config';
import TextField from '@material-ui/core/TextField/TextField';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

export default function ApiTokenConfigurator() {
  const [token, setToken] = useState('');
  const [overriddenToken, setOverriddenToken] = useState('');

  useEffect(() => {
    const overriddenToken = config.apiKeys.getAccuWeatherApiKey();
    if (overriddenToken) {
      setOverriddenToken(overriddenToken);
    }
  }, []);

  const clearOverriddenToken = () => {
    config.apiKeys.removeAccuWeatherApiKey();
    setOverriddenToken('');
    setToken('');
  };

  const overrideToken = () => {
    config.apiKeys.setAccuWeatherApiKey(token);
    setOverriddenToken(token);
    setToken('');
  };

  return (
    <Card>
      <CardHeader title="Token for AccuWeather API" />
      <CardContent>
        {overriddenToken || (
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
        {!overriddenToken && <Button variant="contained" color="primary" onClick={overrideToken}>Set token</Button>}
        {overriddenToken && <Button variant="contained" color="secondary" onClick={clearOverriddenToken}>Clear token</Button>}
      </CardActions>
    </Card>
  )
}