import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  // Action received is the actual object from the AJAX request and not just
  // a promise.  ReduxPromise is the middleware that stop/change/manipulate data
  // before it reaches here, the reducer, so that we get a useable response.
  // It looks primarily at the payload property from the action and if it's a
  // promise, it stops the action entirely and once the request is finished,
  // it dispatches a new action of the same type but with a payload of the
  // resolved request.  It then sends the resolved request to the reducers.
  //
  // ReduxPromise is initialized in the root index.js.
  console.log("Action Received", action);

  switch(action.type) {
  case FETCH_WEATHER:
    // ## push mutates the state array, whereas concat returns a brand new
    // version of the state array. NEVER MUTATE STATE.
    // return state.concat([action.payload.data]);
    // ## ES6 syntax of above
    return [ action.payload.data, ...state ]; // [ city, city, city] NOT
    // [ city, [city, city] ]

  }


  return state;
}
