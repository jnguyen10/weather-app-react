import axios from 'axios';

const API_KEY = "04e88f7ccb0515d6aa8f8a157d48c862";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  // request that returns a promise (no actual data contained in promise)
  const request = axios.get(url);

  console.log("Request:", request);

  // return is sent directly to the reducers
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
