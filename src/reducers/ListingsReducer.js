import { mapKeys as _mapKeys } from 'lodash';
import { FETCH_LISTING, FETCH_LISTINGS, FETCH_LISTINGS_COMPLETE } from '../actions';

export default (state = {
  properties: {},
  loadingStatus: 'IDLE',
}, action) => {
  switch (action.type) {
    case FETCH_LISTING:
      // Copy the current state and set a new property with a dynamic key value and the payload as the value
      return { ...state, properties: { ...state.properties, [action.payload.mlsId]: action.payload } };
    case FETCH_LISTINGS:
      // Copy the current state and set a new property
      return { ...state, loadingStatus: 'LOADING' };
    case FETCH_LISTINGS_COMPLETE:
      // Create a new state object that uses an AJAX request response and grabs the 'id' property from each object in the response to use as its key
      return { ...state, properties: _mapKeys(action.payload, 'mlsId'), loadingStatus: 'LOADED' };
    default:
      return state;
  }
};
