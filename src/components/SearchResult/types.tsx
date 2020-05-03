export interface OfficeInfo {
  flightDestination: string;
  flightDuration: string;
  flightPrice: string;
  forecastHeadline: string;
  minTemperature: string;
  maxTemperature: string;
}

export interface SearchResultProps {
  destinationInfo?: OfficeInfo;
  error?: { flightDestination: string, message: string }
}