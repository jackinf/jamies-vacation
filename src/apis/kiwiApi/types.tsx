import { Moment } from 'moment';

export interface SearchFlightsRequest {
  flyFromIataCode: string;
  flyToIataCode: string;
  dateFrom: Moment;
  dateTo: Moment;
}

export interface SearchFlightsResponse {
  search_id: string;
  data: [
    {
      id: string;
      route: [
        {
          fare_basis: string;
          fare_category: string;
          fare_classes: string
          price: number;
          fare_family: string
          found_on: string;
          last_seen: number;
          refresh_timestamp: number;
          source: string;
          return: number;
          bags_recheck_required: boolean;
          guarantee: boolean;
          id: string;
          combination_id: string;
          original_return: number;
          aTime: number;
          dTime: number;
          aTimeUTC: number;
          dTimeUTC: number;
          mapIdfrom: string;
          mapIdto: string;
          cityTo: string;
          cityFrom: string;
          cityCodeFrom: string;
          cityCodeTo: string;
          flyTo: string;
          flyFrom: string;
          airline: string;
          operating_carrier: string;
          equipment: any;
          latFrom: number;
          lngFrom: number;
          latTo: number;
          lngTo: number;
          flight_no: number;
          vehicle_type: string;
          operating_flight_no: string;
        }
      ];
      dTime: number;
      dTimeUTC: number;
      aTime: number;
      aTimeUTC: number;
      nightsInDest: null;
      duration: {
        departure: number;
        return: number;
        total: number
      };
      fly_duration: string;
      flyFrom: string;
      cityFrom: string;
      cityCodeFrom: string;
      countryFrom: {
        code: string;
        name: string;
      };
      mapIdfrom: string;
      flyTo: string;
      cityTo: string;
      cityCodeTo: string;
      countryTo: {
        code: string;
        name: string
      };
      mapIdto: string;
      distance: number;
      routes: string[][];
      airlines: string[];
      pnr_count: number;
      virtual_interlining: boolean;
      has_airport_change: boolean;
      technical_stops: number;
      price: number;
      bags_price: {
        1: number;
        2: number
      };
      baglimit: {
        hand_width: number;
        hand_height: number;
        hand_length: number;
        hand_weight: number;
        hold_width: number;
        hold_height: number;
        hold_length: number;
        hold_dimensions_sum: number;
        hold_weight: number
      };
      availability: {
        seats: number
      };
      facilitated_booking_available: boolean;
      p1: number;
      p2: number;
      p3: number;
      transfers: [];
      type_flights: string[];
      found_on: string[];
      conversion: {
        EUR: number
      };
      quality: number;
      booking_token: string;
      deep_link: string;
    }
  ];
  connections: any[];
  time: number;
  currency: string;
  currency_rate: number;
  fx_rate: number;
  refresh: [];
  del: number;
  ref_tasks: [];
  search_params: {
    flyFrom_type: string;
    to_type: string;
    seats: {
      passengers: number;
      adults: number;
      children: number;
      infants: number
    }
  };
  all_stopover_airports: any[];
  all_airlines: any[]
}