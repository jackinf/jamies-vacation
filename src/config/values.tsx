const localStorageAccuWeatherKey = 'accuWeatherApiKey';

export default {
  apiKeys: {
    accuWeatherApiKey: localStorage.getItem(localStorageAccuWeatherKey) || process.env.REACT_APP_ACCUWEATHER_API_KEY || '',

    // Custom logic to override existing api keys
    getDefaultAccuWeatherApiKey: () => process.env.REACT_APP_ACCUWEATHER_API_KEY || '',
    getOverriddenAccuWeatherApiKey: () => localStorage.getItem(localStorageAccuWeatherKey),
    overrideAccuWeatherApiKey: (newApiKey: string) => localStorage.setItem(localStorageAccuWeatherKey, newApiKey),
    removeOverriddenAccuWeatherApiKey: () => localStorage.removeItem(localStorageAccuWeatherKey),
  }
}