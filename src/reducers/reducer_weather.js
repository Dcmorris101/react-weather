import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  if (action.error) {
    alert('City not found! Check city spelling.');
    return state;
  }
  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]); // doesnt change existing array, makes new array that contains old stuff and new stuff
      return [ action.payload.data, ...state ]; //ES6 method
  }
  return state;
}
