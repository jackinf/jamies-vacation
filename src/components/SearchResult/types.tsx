export interface OfficeInfo {
  flightDestination: string;
  flightDuration: string;
  flightPrice: string;
  forecastHeadline: string;
  minTemperature: string;
  maxTemperature: string;
}

export interface SearchResultProps {
  officeInfo?: OfficeInfo;
  error?: { flightDestination: string, message: string }
}