export interface CitySearchResponseItem {
  Key: string;
  Country: {
    ID: string;
    LocalizedName: string;
    EnglishName: string;
  }
}

export interface NDayForecastResponse {
  "Headline": {
    "EffectiveDate": string,
    "EffectiveEpochDate": number,
    "Severity": number,
    "Text": string,
    "Category": string,
    "EndDate": string,
    "EndEpochDate": number,
    "MobileLink": string,
    "Link": string
  },
  "DailyForecasts": [
    {
      "Date": string,
      "EpochDate": number,
      "Temperature": {
        "Minimum": {
          "Value": number,
          "Unit": "C" | "F",
          "UnitType": number
        },
        "Maximum": {
          "Value": number,
          "Unit": "C" | "F",
          "UnitType": number
        }
      },
      "Day": {
        "Icon": number,
        "IconPhrase": string,
        "HasPrecipitation": boolean,
        "PrecipitationType": string,
        "PrecipitationIntensity": string
      },
      "Night": {
        "Icon": number,
        "IconPhrase": string,
        "HasPrecipitation": boolean
      },
      "Sources": string[],
      "MobileLink": string,
      "Link": string
    }
  ]
}