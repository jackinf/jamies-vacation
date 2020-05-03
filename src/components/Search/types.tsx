export interface SearchProps {
  destinations: Array<{
    cityName: string;
    countryID: string;
    iataCode: string;
  }>;
}