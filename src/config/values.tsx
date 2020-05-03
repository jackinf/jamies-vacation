const localStorageAccuWeatherKey = 'accuWeatherApiKey';

export default {
  apiKeys: {
    accuWeatherApiKey: localStorage.getItem(localStorageAccuWeatherKey) || '',

    getAccuWeatherApiKey: () => localStorage.getItem(localStorageAccuWeatherKey),
    setAccuWeatherApiKey: (newApiKey: string) => localStorage.setItem(localStorageAccuWeatherKey, newApiKey),
    removeAccuWeatherApiKey: () => localStorage.removeItem(localStorageAccuWeatherKey),
  }
}