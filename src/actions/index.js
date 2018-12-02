import axios from 'axios';

const API_KEY = '04a621eae80aa31e4a85575a57b39bb5';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// make a single variable that holds action type so we can later import into the reducer as well and have a single source
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);


  return {
    type: FETCH_WEATHER,
    payload: request // returning the promise (request) as the payload
  };
}
