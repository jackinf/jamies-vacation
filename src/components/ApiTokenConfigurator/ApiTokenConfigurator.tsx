import React, { useState, useEffect } from 'react';
import config from '../../config';

export default function ApiTokenConfigurator() {
  const [token, setToken] = useState('');
  const [overriddenToken, setOverriddenToken] = useState('');

  useEffect(() => {
    const overriddenToken = config.apiKeys.getOverriddenAccuWeatherApiKey();
    if (overriddenToken) {
      setOverriddenToken(overriddenToken);
    }
  }, []);

  const clearOverriddenToken = () => {
    config.apiKeys.removeOverriddenAccuWeatherApiKey();
    setOverriddenToken('');
    setToken('');
  };

  const overrideToken = () => {
    config.apiKeys.overrideAccuWeatherApiKey(token);
    setOverriddenToken(token);
    setToken('');
  };

  const message = overriddenToken
    ? <p>Using overridden token from local storage</p> : config.apiKeys.getDefaultAccuWeatherApiKey()
      ? <p>Using default token</p> : <p>No token defined!</p>;

  return (
    <div>
      <h3>Token for AccuWeather API</h3>
      {message}
      <input type="text" id="accuweather-token" value={token} onChange={e => setToken(e.target.value)}/>
      {token && <button onClick={overrideToken}>Set token</button>}
      {overriddenToken && <button onClick={clearOverriddenToken}>Clear token</button>}
    </div>
  )
}