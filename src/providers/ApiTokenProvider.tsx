import React, { ReactNode, useState } from 'react';
import config from '../config';

export const ApiTokenContext = React.createContext<{
  accuWeatherApiKey?: string;
  handleSetAccuWeatherToken?: (token: string) => void;
  handleClearAccuWeatherToken?: () => void;
}>({});

export default function ApiTokenProvider(props: { children: ReactNode }) {
  const [accuWeatherApiKey, setAccuWeatherApiKey] = useState(config.apiKeys.getAccuWeatherApiKey() || undefined);

  const handleClearAccuWeatherToken = () => {
    config.apiKeys.removeAccuWeatherApiKey();
    setAccuWeatherApiKey('');
  };

  const handleSetAccuWeatherToken = (token: string) => {
    config.apiKeys.setAccuWeatherApiKey(token);
    setAccuWeatherApiKey(token);
  };

  return (
    <ApiTokenContext.Provider value={{
      accuWeatherApiKey,
      handleSetAccuWeatherToken,
      handleClearAccuWeatherToken
    }}>
      {props.children}
    </ApiTokenContext.Provider>
  )
}