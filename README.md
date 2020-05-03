This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Online demo

https://jamies-vacation.azurewebsites.net/

## Description

Jamie's vacation is about to end. She works at an international company, so she can choose another office to work from: either Amsterdam, Madrid, or Budapest. 
Help her choose which office to go to – she’d like someplace with good weather or cheap flights (or both).

API's used:
- AccuWeatherAPI for weather forecasts (https://developer.accuweather.com)
- KiwiAPI for flight search (https://docs.kiwi.com)

## Screenshot

![Image](https://i.gyazo.com/564469b4eca37bf38f651442dba8414e.png)

## Prerequisites

Make sure that you have AccuWeather API key. You can get one here - https://developer.accuweather.com/apis.
You can't query without API key - you will get an error message.

## Some notes

I've decided not to overcomplicate this small app with libraries like Router & Redux.
I'd use Router if I'd need more than one page; I'd use Redux if the form would be bigger and the state management would 
be more complex. So far, I managed to get around only using hooks.

Also, I was tempted to use additional API for IATA codes but it also requires API key.
For simplicity, I left this part out. The user will need to specify their location using IATA code.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.